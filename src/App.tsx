import {

  useCallback,

  useEffect,

  useRef,

  useState,

} from "react";



import { LoadingScreen } from "./components/LoadingScreen";

import IntroLetter from "./components/IntroLetter";

import  GardenScene  from "./components/GardenScene";

import { StaticBouquetScene } from "./components/StaticBouquetScene";

import { RoseInfo } from "./components/RoseInfo";

import { FinalScene } from "./components/FinalScene";

import { AudioController } from "./components/AudioController";

import { SceneTransition } from "./components/SceneTransition";

import { WebGLFallbackWrapper } from "./components/WebGLFallback";



import { Experience } from "./three/Experience";

import { detectQuality } from "./three/SceneManager";



import type {

  SceneState,

  ExperienceEvent,

} from "./types";



/**

 * ============================================================

 * APP

 * ============================================================

 *

 * Main state controller for the birthday experience.

 *

 * IMPORTANT:

 *

 * The garden/gate visual is now handled by GardenScene.

 * GardenScene uses static cinematic images rather than the

 * procedural Three.js gate.

 *

 * Three.js is still kept for the rest of the experience and

 * compatibility with the existing project.

 */

export default function App() {

  // ==========================================================

  // MAIN STATE

  // ==========================================================



  const [state, setState] =

    useState<SceneState>("LOADING");



  const [webglAvailable, setWebglAvailable] =

    useState(true);



  const [gardenPhase, setGardenPhase] =

    useState<

      "approach" |

      "question" |

      "scared"

    >("approach");



  const [bouquetPhase, setBouquetPhase] =

    useState<

      "reveal" |

      "explore"

    >("reveal");



  const [zoomHint, setZoomHint] =

    useState(

      "100,001 roses 🌹"

    );



  const [selectedRose, setSelectedRose] =

    useState<{

      id: number;

      isRandom: boolean;

    } | null>(null);



  const [finalPhase, setFinalPhase] =

    useState<

      "heart" |

      "final"

    >("heart");



  const [transitionActive, setTransitionActive] =

    useState(false);



  // ==========================================================

  // REFS

  // ==========================================================



  const containerRef =

    useRef<HTMLDivElement>(null);



  const experienceRef =

    useRef<Experience | null>(null);



  const stateRef =

    useRef<SceneState>("LOADING");



  // ==========================================================

  // KEEP STATE REF SYNCHRONIZED

  // ==========================================================



  useEffect(() => {

    stateRef.current = state;

  }, [state]);



  // ==========================================================

  // WEBGL CHECK

  // ==========================================================



  useEffect(() => {

    setWebglAvailable(

      Experience.isWebGLAvailable()

    );

  }, []);



  // ==========================================================

  // INITIALIZE THREE.JS EXPERIENCE

  // ==========================================================



  useEffect(() => {

    if (

      !webglAvailable ||

      !containerRef.current

    ) {

      return;

    }



    const quality =

      detectQuality();



    const exp =

      new Experience(

        containerRef.current,

        quality

      );



    experienceRef.current =

      exp;



    // ========================================================

    // THREE.JS EVENTS

    // ========================================================



    const unsubscribe =

      exp.onEvent(

        (

          event: ExperienceEvent

        ) => {

          switch (event.type) {

            // ==================================================

            // GATES REACHED

            // ==================================================



            case "gates-reached": {

              /*

               * The Three.js camera can still tell us when

               * the gate area has been reached.

               *

               * But the actual gate visuals are now rendered

               * by GardenScene.

               */



              if (

                stateRef.current ===

                  "GATE_APPROACH" ||

                stateRef.current ===

                  "GARDEN"

              ) {

                setState(

                  "GATE_QUESTION"

                );



                /*

                 * Keep Three.js parked at the gate.

                 *

                 * IMPORTANT:

                 * We do NOT start a Three.js gate opening.

                 */



                exp.setState(

                  "GATE_QUESTION"

                );



                setGardenPhase(

                  "question"

                );

              }



              break;

            }



            // ==================================================

            // OLD THREE.JS GATES OPENED

            // ==================================================



            case "gates-opened": {

              /*

               * IGNORE THIS EVENT.

               *

               * The old procedural Three.js gate is no longer

               * responsible for opening the gate.

               *

               * GardenScene controls the cinematic opening.

               */



              break;

            }



            // ==================================================

            // BOUQUET READY

            // ==================================================



            case "bouquet-revealed": {
              // StaticBouquetScene owns the bouquet reveal/explore flow.
              break;
            }
            case "rose-selected": {

              setSelectedRose({

                id: event.roseId,

                isRandom: false,

              });



              break;

            }



            // ==================================================

            // HEART FORMED

            // ==================================================



            case "heart-formed": {
              if (stateRef.current !== "HEART_REVEAL") {
                break;
              }
              setFinalPhase("final");
              setState("FINAL_MESSAGE");
              exp.setState("FINAL_MESSAGE");
              break;
            }
            case "zoomed-out-fully": {

              if (

                stateRef.current ===

                "BOUQUET_EXPLORE"

              ) {

                triggerHeartReveal();

              }



              break;

            }



            // ==================================================

            // EXPLORE READY

            // ==================================================



            case "explore-ready": {

              updateZoomHint();



              break;

            }

          }

        }

      );



    // ========================================================

    // CLEANUP

    // ========================================================



    return () => {



      exp.dispose();



      experienceRef.current =

        null;

    };

  }, [webglAvailable]);



  // ==========================================================

  // LOADING COMPLETE

  // ==========================================================



  const handleLoadingComplete =

    useCallback(() => {

      setState(

        "LETTER"

      );



      experienceRef.current?.setState(

        "LETTER"

      );

    }, []);



  // ==========================================================

  // LETTER REVEAL

  // ==========================================================



  const handleReveal =
    useCallback(() => {
      // Direct Page 1 -> Page 2 handoff.
      // The old SceneTransition overlay caused the background to flash.
      setTransitionActive(false);
      setGardenPhase("approach");
      setState("GARDEN");
      experienceRef.current?.setState("GARDEN");
    }, []);

  const handleTransitionMid = useCallback(() => {
    // Legacy compatibility only. Page 1 no longer uses the transition veil.
  }, []);

  const handleTransitionComplete = useCallback(() => {
    setTransitionActive(false);
  }, []);

  const handleGateYes =

    useCallback(() => {

      /*

       * IMPORTANT:

       *

       * We change only the React state here.

       *

       * DO NOT call:

       *

       * experienceRef.current?.setState(

       *   "GATE_OPENING"

       * );

       *

       * because the new GardenScene is responsible for the

       * cinematic gate animation.

       */



      setState(

        "GATE_OPENING"

      );

    }, []);



  // ==========================================================

  // SCARED BUTTON

  // ==========================================================



  const handleGateScared =

    useCallback(() => {

      setGardenPhase(

        "scared"

      );

    }, []);



  // ==========================================================

  // SCARED → OPEN

  // ==========================================================



  const handleGateScaredConfirm =

    useCallback(() => {

      handleGateYes();

    }, [

      handleGateYes,

    ]);



  // ==========================================================

  // STATIC CINEMATIC GATES FINISHED OPENING

  // ==========================================================



  const handleStaticGatesOpened =

    useCallback(() => {

      /*

       * GardenScene calls this after the cinematic gate

       * animation has completed.

       *

       * Sequence:

       *

       * GATE_OPENING

       *      ↓

       * golden light

       *      ↓

       * smoke

       *      ↓

       * hearts

       *      ↓

       * gates slowly open

       *      ↓

       * BOUQUET_REVEAL

       */



      setGardenPhase(

        "approach"

      );



      setBouquetPhase(

        "reveal"

      );



      setSelectedRose(

        null

      );



      setState(

        "BOUQUET_REVEAL"

      );



      /*

       * Now Three.js can prepare the rest of the scene.

       *

       * The actual bouquet visual is handled by

       * StaticBouquetScene.

       */



      experienceRef.current?.setState(

        "BOUQUET_REVEAL"

      );

    }, []);



  // ==========================================================

  // RANDOM ROSE

  // ==========================================================



  const handlePickRandom = useCallback(() => {
    const current = stateRef.current;

    if (current === "FINAL_MESSAGE" || current === "HEART_REVEAL") {
      experienceRef.current?.pickRandomRose();
      return;
    }

    if (current !== "BOUQUET_EXPLORE") return;

    const roseId = Math.floor(Math.random() * 100001) + 1;
    setSelectedRose({ id: roseId, isRandom: true });
  }, []);

  // ==========================================================
  // ROSE NAVIGATION — FINAL HEART
  // ==========================================================

  const selectRoseNumber = useCallback((roseId: number) => {
    if (stateRef.current !== "FINAL_MESSAGE" && stateRef.current !== "HEART_REVEAL") return;
    const normalized = Math.max(1, Math.min(100001, roseId));
    experienceRef.current?.focusRose(normalized);
  }, []);

  const handleRosePrevious = useCallback(() => {
    if (!selectedRose) return;
    selectRoseNumber(selectedRose.id <= 1 ? 100001 : selectedRose.id - 1);
  }, [selectedRose, selectRoseNumber]);

  const handleRoseNext = useCallback(() => {
    if (!selectedRose) return;
    selectRoseNumber(selectedRose.id >= 100001 ? 1 : selectedRose.id + 1);
  }, [selectedRose, selectRoseNumber]);

  // WHOLE BOUQUET → HEART

  // ==========================================================



  const handleZoomOutHeart =

    useCallback(() => {

      triggerHeartReveal();

    }, []);



  // ==========================================================

  // HEART REVEAL

  // ==========================================================



  const triggerHeartReveal =

    useCallback(() => {

      if (

        stateRef.current !==

        "BOUQUET_EXPLORE"

      ) {

        return;

      }



      setSelectedRose(

        null

      );



      setFinalPhase(

        "heart"

      );



      setState(

        "HEART_REVEAL"

      );



      setBouquetPhase(

        "explore"

      );



      experienceRef.current?.setState(

        "HEART_REVEAL"

      );

    }, []);



  // ==========================================================

  // CLOSE ROSE INFO

  // ==========================================================



  const handleRoseClose =

    useCallback(() => {

      setSelectedRose(

        null

      );



      /*

       * Static bouquet mode doesn't require Three.js

       * highlighting, but clearing it is harmless if an old

       * RoseField exists.

       */



      if (

        experienceRef.current?.roseField

      ) {

        experienceRef.current.roseField.clearHighlight();

      }

    }, []);



  // ==========================================================

  // UPDATE ZOOM HINT

  // ==========================================================



  const updateZoomHint =

    useCallback(() => {

      const exp =

        experienceRef.current;



      if (!exp) {

        return;

      }



      const radius =

        exp.cameraController.getRadius();



      if (

        radius > 60

      ) {

        setZoomHint(

          "100,001 roses 🌹"

        );

      } else if (

        radius > 25

      ) {

        setZoomHint(

          "Go on... explore. 👀"

        );

      } else {

        setZoomHint(

          "Find one. 🌹"

        );

      }

    }, []);



  // ==========================================================

  // RESET

  // ==========================================================



  const handleReset = useCallback(() => {
    // Replay as a completely fresh run. This guarantees that no previous
    // camera angle, orbit inertia, timer, rose highlight or audio state
    // survives into the next playthrough.
    window.location.reload();
  }, []);

  // WEBGL FALLBACK

  // ==========================================================



  if (!webglAvailable) {

    return (

      <WebGLFallbackWrapper />

    );

  }



  // ==========================================================

  // RENDER

  // ==========================================================



  const gardenActive =
    state === "GARDEN" ||
    state === "GATE_APPROACH" ||
    state === "GATE_QUESTION" ||
    state === "GATE_OPENING";

  const bouquetActive =
    state === "BOUQUET_REVEAL" ||
    state === "BOUQUET_EXPLORE";

  const threeHidden =
    state === "LETTER" ||
    gardenActive ||
    bouquetActive;

  return (
    <>
      {/* ======================================================
          THREE.JS WORLD

          GardenScene and StaticBouquetScene own their pages.
          Hide Three.js completely on those pages so the old
          procedural gate cannot appear underneath/over them.
      ====================================================== */}

      <div
        ref={containerRef}
        aria-hidden={threeHidden}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: threeHidden ? -1 : 1,
          visibility: threeHidden ? "hidden" : "visible",
          overflow: "hidden",
          pointerEvents:
            state === "HEART_REVEAL" || state === "FINAL_MESSAGE"
              ? "auto"
              : "none",
        }}
      />

      {/* ======================================================

          LOADING

      ====================================================== */}



      {state === "LOADING" && (

        <LoadingScreen

          onComplete={

            handleLoadingComplete

          }

        />

      )}



      {/* ======================================================

          LETTER

      ====================================================== */}



      {state === "LETTER" && (

        <IntroLetter

          onReveal={

            handleReveal

          }

        />

      )}



      {/* ======================================================

          CINEMATIC GARDEN + HEAVEN GATES



          IMPORTANT:



          GardenScene is now rendered for:



          GARDEN

          GATE_APPROACH

          GATE_QUESTION

          GATE_OPENING



          This means the same cinematic background remains

          visible throughout the complete gate sequence.

      ====================================================== */}



      {(

        state === "GARDEN" ||

        state === "GATE_APPROACH" ||

        state === "GATE_QUESTION" ||

        state === "GATE_OPENING"

      ) && (

        <GardenScene

          phase={

            state ===

            "GATE_QUESTION"

              ? gardenPhase ===

                "scared"

                ? "scared"

                : "question"

              : state ===

                "GATE_OPENING"

              ? "opening"

              : "approach"

          }



          onApproachComplete={() => {
            setState("GATE_QUESTION");
            setGardenPhase("question");
          }}

          onYes={

            handleGateYes

          }

          onScared={

            handleGateScared

          }

          onScaredConfirm={

            handleGateScaredConfirm

          }

          onOpened={

            handleStaticGatesOpened

          }

        />

      )}



      {/* ======================================================

          STATIC CINEMATIC BOUQUET

      ====================================================== */}



      {(

        state ===

          "BOUQUET_REVEAL" ||

        state ===

          "BOUQUET_EXPLORE"

      ) && (

        <StaticBouquetScene

          phase={

            bouquetPhase

          }

          onPickRandom={

            handlePickRandom

          }

          onZoomOutHeart={

            handleZoomOutHeart

          }

          onRevealComplete={() => {

            setBouquetPhase("explore");

            setState("BOUQUET_EXPLORE");

          }}

        />

      )}



      {/* ======================================================

          ROSE INFORMATION

      ====================================================== */}



      {selectedRose &&
        (state === "BOUQUET_EXPLORE" ||
          state === "HEART_REVEAL" ||
          state === "FINAL_MESSAGE") && (
          <RoseInfo
            roseId={selectedRose.id}
            isRandom={selectedRose.isRandom}
            onClose={handleRoseClose}
            onPrevious={state === "FINAL_MESSAGE" ? handleRosePrevious : undefined}
            onNext={state === "FINAL_MESSAGE" ? handleRoseNext : undefined}
            onPickAnother={state === "FINAL_MESSAGE" ? handlePickRandom : undefined}
          />
        )}



      {/* ======================================================

          HEART / FINAL

      ====================================================== */}



      {(

        state ===

          "HEART_REVEAL" ||

        state ===

          "FINAL_MESSAGE"

      ) && (

        <FinalScene
          phase={finalPhase}
          onReset={handleReset}
          onPickRandom={handlePickRandom}
        />

      )}



      {/* ======================================================

          AUDIO

      ====================================================== */}



      <AudioController

        visible={

          state !==

          "LOADING"

        }

      />



      {/* ======================================================

          LETTER → GARDEN TRANSITION

      ====================================================== */}



      <SceneTransition

        active={

          transitionActive

        }

        onMid={

          handleTransitionMid

        }

        onComplete={

          handleTransitionComplete

        }

      />

    </>

  );

}