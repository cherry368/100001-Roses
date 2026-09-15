import {

  useEffect,

  useRef,

  useState,

} from "react";



type GardenPhase =

  | "approach"

  | "question"

  | "scared"

  | "opening";



interface GardenSceneProps {

  phase: GardenPhase;

  onYes: () => void;

  onScared: () => void;

  onScaredConfirm: () => void;

  onApproachComplete: () => void;

  onOpened: () => void;

}



const PETALS = Array.from(

  { length: 28 },

  (_, i) => ({

    id: i,

    left: `${(i * 37) % 100}%`,

    delay: `${(i % 9) * 0.7}s`,

    duration: `${8 + (i % 6) * 1.3}s`,

    size: `${7 + (i % 4) * 3}px`,

    rotation: `${(i * 47) % 360}deg`,

  })

);



const STARS = Array.from(

  { length: 42 },

  (_, i) => ({

    id: i,

    left: `${(i * 53) % 100}%`,

    top: `${(i * 29) % 67}%`,

    delay: `${(i % 8) * 0.45}s`,

    size: `${1 + (i % 3)}px`,

  })

);



export default function GardenScene({

  phase,

  onYes,

  onScared,

  onScaredConfirm,

  onApproachComplete,

  onOpened,

}: GardenSceneProps) {

  const [approachProgress, setApproachProgress] =

    useState(0);



  const [doorProgress, setDoorProgress] =

    useState(0);



  const [showQuestion, setShowQuestion] =

    useState(false);



  const [showInsideLight, setShowInsideLight] =

    useState(false);



  const approachStarted =

    useRef(false);



  const openingStarted =

    useRef(false);



  
  const openingCompletedRef = useRef(false);
// ==========================================================

  // CINEMATIC APPROACH

  useEffect(() => {
    if (phase !== "approach") {
      return;
    }

    if (approachStarted.current) {
      return;
    }

    approachStarted.current = true;

    const start = performance.now();
    const duration = 6200;
    let frame = 0;
    let completed = false;

    const finishApproach = () => {
      if (completed) {
        return;
      }

      completed = true;
      setApproachProgress(1);
      setShowQuestion(true);
      onApproachComplete();
    };

    const animate = (now: number) => {
      const elapsed = now - start;

      const raw = Math.min(
        elapsed / duration,
        1,
      );

      const eased =
        raw < 0.5
          ? 2 * raw * raw
          : 1 -
            Math.pow(
              -2 * raw + 2,
              2,
            ) /
              2;

      setApproachProgress(eased);

      if (raw < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        finishApproach();
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      approachStarted.current = false;
    };
  }, [phase, onApproachComplete]);

  // RESET APPROACH WHEN NEEDED

  useEffect(() => {
    if (phase === "approach") {
      setApproachProgress(0);
      setDoorProgress(0);
      setShowQuestion(false);
      setShowInsideLight(false);
      openingStarted.current = false;
      openingCompletedRef.current = false;
    }

    if (phase === "question" || phase === "scared") {
      setDoorProgress(0);
      setShowInsideLight(false);
      openingStarted.current = false;
      openingCompletedRef.current = false;
    }
  }, [phase]);

  // CINEMATIC DOOR OPENING

  useEffect(() => {
    if (phase !== "opening") {
      setDoorProgress(0);
      setShowInsideLight(false);
      openingStarted.current = false;
      openingCompletedRef.current = false;
      return;
    }

    // Never start the same gate-opening phase twice.
    if (openingStarted.current) {
      return;
    }

    openingStarted.current = true;
    openingCompletedRef.current = false;

    setShowQuestion(false);
    setShowInsideLight(true);
    setDoorProgress(0);

    const start = performance.now();
    const duration = 6200;
    let frame = 0;
    let cancelled = false;

    const finishOpening = () => {
      if (
        cancelled ||
        openingCompletedRef.current
      ) {
        return;
      }

      openingCompletedRef.current = true;
      setDoorProgress(1);

      // IMPORTANT:
      // Page 3 is entered exactly once.
      onOpened();
    };

    const animate = (now: number) => {
      if (cancelled) {
        return;
      }

      const elapsed = now - start;

      const progress = Math.min(
        elapsed / duration,
        1,
      );

      const eased =
        1 -
        Math.pow(
          1 - progress,
          3,
        );

      setDoorProgress(eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        finishOpening();
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [phase, onOpened]);

  // TEXT

  // ==========================================================



  const renderText = () => {

  // ========================================================

  // OPENING

  // ========================================================



  if (phase === "opening") {

    return (

      <div className="rose-gate-opening-copy">

        <div className="rose-gate-eyebrow">

          BEYOND THIS DOOR

        </div>



        <div className="rose-gate-opening-title">

          100,001

        </div>



        <div className="rose-gate-opening-subtitle">

          little reasons to smile.

        </div>

      </div>

    );

  }



  // ========================================================

  // SCARED SCREEN

  // ========================================================



  if (phase === "scared") {

    return (

      <div className="rose-gate-question">

        <div className="rose-gate-eyebrow">

          HEY... DON&apos;T BE SCARED

        </div>



        <h2>

          Maybe you just

          <br />

          need to be{" "}

          <span>brave.</span>

        </h2>



        <p>

          I promise...

          <br />

          there&apos;s nothing scary

          behind these doors.

        </p>



        <div className="rose-gate-actions">



          <button

            type="button"

            className="rose-gate-primary"

            onClick={() => {

              onScaredConfirm();

            }}

          >

            Okay, I&apos;ll be brave

            <span> ✦</span>

          </button>



          <button

            type="button"

            className="rose-gate-secondary"

            onClick={() => {

              onYes();

            }}

          >

            Actually... open it anyway

          </button>



        </div>

      </div>

    );

  }



  // ========================================================

  // NORMAL QUESTION

  // ========================================================



  if (phase === "question") {

    return (

      <div className="rose-gate-question">

        <div className="rose-gate-eyebrow">

          THERE&apos;S SOMETHING FOR YOU

        </div>



        <h2>

          Will you open

          <br />

          <span>this door?</span>

        </h2>



        <p>

          I could tell you what&apos;s

          waiting inside...

          <br />

          but where&apos;s the fun in that?

        </p>



        <div className="rose-gate-actions">



          <button

            type="button"

            className="rose-gate-primary"

            onClick={() => {

              onYes();

            }}

          >

            Open the doors

            <span> ✦</span>

          </button>



          <button

            type="button"

            className="rose-gate-secondary"

            onClick={() => {

              onScared();

            }}

          >

            I&apos;m a little scared

          </button>



        </div>

      </div>

    );

  }



  // ========================================================

  // APPROACH

  // ========================================================



  return (

    <div className="rose-gate-intro">

      <div className="rose-gate-eyebrow">

        SOMEWHERE BEYOND

      </div>



      <h1>

        There is a story

        <br />

        <span>waiting for you.</span>

      </h1>



      <p>

        Come a little closer...

      </p>

    </div>

  );

};



  return (

    <div className="rose-gate-scene">

      {/* ======================================================

          SKY

      ======================================================= */}



      <div className="rose-gate-sky" />



      <div className="rose-gate-moon">

        <div className="rose-gate-moon-core" />

      </div>



      {/* ======================================================

          STARS

      ======================================================= */}



      <div className="rose-gate-stars">

        {STARS.map((star) => (

          <span

            key={star.id}

            style={{

              left: star.left,

              top: star.top,

              width: star.size,

              height: star.size,

              animationDelay:

                star.delay,

            }}

          />

        ))}

      </div>



      {/* ======================================================

          DISTANT KINGDOM

      ======================================================= */}



      <div className="rose-gate-horizon">

        <div className="rose-gate-castle">

          <div className="castle-tower castle-tower-left" />

          <div className="castle-center" />

          <div className="castle-tower castle-tower-right" />

        </div>

      </div>



      {/* ======================================================

          ATMOSPHERIC LIGHT

      ======================================================= */}



      <div className="rose-gate-atmosphere" />



      <div

        className="rose-gate-inside-light"

        style={{

          opacity:

            showInsideLight

              ? 0.95 *

                doorProgress

              : 0,

        }}

      />



      {/* ======================================================

          GROUND

      ======================================================= */}



      <div className="rose-gate-ground">



        <div className="rose-gate-path" />



        <div className="rose-gate-ground-glow" />



        <div className="rose-gate-mist mist-one" />

        <div className="rose-gate-mist mist-two" />

        <div className="rose-gate-mist mist-three" />



      </div>



      {/* ======================================================

          ROSE PETALS

      ======================================================= */}



      <div className="rose-gate-petals">

        {PETALS.map(

          (petal) => (

            <span

              key={petal.id}

              style={{

                left:

                  petal.left,

                animationDelay:

                  petal.delay,

                animationDuration:

                  petal.duration,

                width:

                  petal.size,

                height:

                  petal.size,

                transform:

                  `rotate(${petal.rotation})`,

              }}

            />

          )

        )}

      </div>



      {/* ======================================================

          HUGE PALACE GATE

      ======================================================= */}



      <div

        className="rose-gate-architecture"

        style={{

          transform:

            `translateY(${(1 - approachProgress) * 9}%)`,

        }}

      >



        {/* ==================================================

            LEFT OUTER PILLAR

        =================================================== */}



        <div className="rose-gate-pillar rose-gate-pillar-left">



          <div className="rose-gate-pillar-cap">

            <span />

            <span />

            <span />

          </div>



          <div className="rose-gate-pillar-body">



            <div className="pillar-stone stone-one" />

            <div className="pillar-stone stone-two" />

            <div className="pillar-stone stone-three" />

            <div className="pillar-stone stone-four" />



            <div className="pillar-lamp">

              <div className="lamp-flame" />

            </div>



            <div className="pillar-rose rose-one">

              🌹

            </div>



            <div className="pillar-rose rose-two">

              🌹

            </div>



          </div>



          <div className="rose-gate-pillar-base" />



        </div>



        {/* ==================================================

            RIGHT OUTER PILLAR

        =================================================== */}



        <div className="rose-gate-pillar rose-gate-pillar-right">



          <div className="rose-gate-pillar-cap">

            <span />

            <span />

            <span />

          </div>



          <div className="rose-gate-pillar-body">



            <div className="pillar-stone stone-one" />

            <div className="pillar-stone stone-two" />

            <div className="pillar-stone stone-three" />

            <div className="pillar-stone stone-four" />



            <div className="pillar-lamp">

              <div className="lamp-flame" />

            </div>



            <div className="pillar-rose rose-one">

              🌹

            </div>



            <div className="pillar-rose rose-two">

              🌹

            </div>



          </div>



          <div className="rose-gate-pillar-base" />



        </div>



        {/* ==================================================

            CENTRAL ARCH

        =================================================== */}



        <div className="rose-gate-arch">



          <div className="rose-gate-arch-inner">



            <div className="rose-gate-emblem">

              <div>

                100001

              </div>



              <span>

                ROSES

              </span>

            </div>



          </div>



        </div>



        {/* ==================================================

            LEFT GIANT DOOR

        =================================================== */}



        <div

          className="rose-gate-door-wrap rose-gate-door-wrap-left"

          style={{

            transform:

              `perspective(1800px) rotateY(${78 * doorProgress}deg)`,

          }}

        >



          <div className="rose-gate-door">



            <div className="door-frame">



              <div className="door-panel panel-one" />

              <div className="door-panel panel-two" />

              <div className="door-panel panel-three" />



              <div className="door-rose-pattern">

                🌹

              </div>



              <div className="door-handle">

                <span />

              </div>



              <div className="door-metal-detail detail-top" />

              <div className="door-metal-detail detail-bottom" />



            </div>



          </div>



        </div>



        {/* ==================================================

            RIGHT GIANT DOOR

        =================================================== */}



        <div

          className="rose-gate-door-wrap rose-gate-door-wrap-right"

          style={{

            transform:

              `perspective(1800px) rotateY(${-78 * doorProgress}deg)`,

          }}

        >



          <div className="rose-gate-door">



            <div className="door-frame">



              <div className="door-panel panel-one" />

              <div className="door-panel panel-two" />

              <div className="door-panel panel-three" />



              <div className="door-rose-pattern">

                🌹

              </div>



              <div className="door-handle">

                <span />

              </div>



              <div className="door-metal-detail detail-top" />

              <div className="door-metal-detail detail-bottom" />



            </div>



          </div>



        </div>



      </div>



      {/* ======================================================

          FOREGROUND TEXT

      ======================================================= */}



      <div className="rose-gate-copy">

        {renderText()}

      </div>



      {/* ======================================================

          TOP CINEMATIC LABEL

      ======================================================= */}



      <div className="rose-gate-top-label">

        <span>

          FOR SOMEONE SPECIAL

        </span>



        <i />

      </div>



      {/* ======================================================

          BOTTOM CINEMATIC LABEL

      ======================================================= */}



      <div className="rose-gate-bottom-label">

        <span>

          A LITTLE SOMETHING

          <br />

          FROM MY HEART

        </span>



        <div className="bottom-line" />

      </div>



      {/* ======================================================

          VIGNETTE

      ======================================================= */}



      <div className="rose-gate-vignette" />



      {/* ======================================================

          FILM GRAIN

      ======================================================= */}



      <div className="rose-gate-grain" />



      {/* ======================================================

          STYLES

      ======================================================= */}



      <style>{`



        * {

          box-sizing: border-box;

        }



        .rose-gate-scene {

          position: fixed;

          inset: 0;

          width: 100vw;

          height: 100vh;

          overflow: hidden;

          background:

            radial-gradient(

              circle at 50% 55%,

              #241414 0%,

              #100b0d 42%,

              #050507 100%

            );

          color: #fff;

          font-family:

            Georgia,

            "Times New Roman",

            serif;

          isolation: isolate;

        }



        /* ====================================================

           SKY

        ==================================================== */



        .rose-gate-sky {

          position: absolute;

          inset: 0;

          background:

            linear-gradient(

              180deg,

              #05050a 0%,

              #0c0a13 26%,

              #24151a 56%,

              #100a0d 100%

            );

          z-index: -10;

        }



        .rose-gate-sky::after {

          content: "";

          position: absolute;

          inset: 0;

          background:

            radial-gradient(

              ellipse at 50% 68%,

              rgba(173, 77, 65, 0.23),

              transparent 48%

            );

        }



        /* ====================================================

           MOON

        ==================================================== */



        .rose-gate-moon {

          position: absolute;

          top: 7%;

          right: 12%;

          width: clamp(

            70px,

            9vw,

            150px

          );

          aspect-ratio: 1;

          border-radius: 50%;

          background:

            radial-gradient(

              circle at 35% 32%,

              #fffdf4,

              #eadfc4 50%,

              #a99b85 100%

            );

          box-shadow:

            0 0 40px

              rgba(

                255,

                243,

                211,

                0.28

              ),

            0 0 100px

              rgba(

                255,

                215,

                163,

                0.13

              );

          animation:

            moonFloat

            7s ease-in-out

            infinite;

          z-index: -6;

        }



        .rose-gate-moon-core {

          position: absolute;

          inset: 10%;

          border-radius: 50%;

          background:

            radial-gradient(

              circle at 30% 30%,

              rgba(

                255,

                255,

                255,

                0.3

              ),

              transparent 60%

            );

        }



        @keyframes moonFloat {

          0%,

          100% {

            transform:

              translateY(0);

          }



          50% {

            transform:

              translateY(-8px);

          }

        }



        /* ====================================================

           STARS

        ==================================================== */



        .rose-gate-stars {

          position: absolute;

          inset: 0;

          z-index: -7;

        }



        .rose-gate-stars span {

          position: absolute;

          border-radius: 50%;

          background: #fff;

          box-shadow:

            0 0 8px

              rgba(

                255,

                255,

                255,

                0.8

              );

          animation:

            starPulse

            3s ease-in-out

            infinite;

        }



        @keyframes starPulse {

          0%,

          100% {

            opacity: 0.25;

            transform: scale(0.7);

          }



          50% {

            opacity: 0.95;

            transform: scale(1.4);

          }

        }



        /* ====================================================

           DISTANT CASTLE

        ==================================================== */



        .rose-gate-horizon {

          position: absolute;

          left: 50%;

          bottom: 27%;

          transform:

            translateX(-50%);

          width: min(

            65vw,

            1000px

          );

          height: 24%;

          opacity: 0.58;

          z-index: -5;

        }



        .rose-gate-castle {

          position: absolute;

          inset: 0;

          display: flex;

          justify-content: center;

          align-items: flex-end;

          filter:

            drop-shadow(

              0 0 20px

              rgba(

                207,

                116,

                72,

                0.16

              )

            );

        }



        .castle-center {

          width: 35%;

          height: 70%;

          background:

            linear-gradient(

              90deg,

              #120d0f,

              #2b1818,

              #120d0f

            );

          clip-path:

            polygon(

              0 18%,

              22% 18%,

              22% 0,

              78% 0,

              78% 18%,

              100% 18%,

              100% 100%,

              0 100%

            );

        }



        .castle-tower {

          width: 18%;

          height: 100%;

          background:

            linear-gradient(

              90deg,

              #0c090c,

              #241417,

              #0c090c

            );

        }



        .castle-tower::before {

          content: "";

          display: block;

          height: 20%;

          background:

            linear-gradient(

              135deg,

              transparent 50%,

              #181014 50%

            );

        }



        /* ====================================================

           ATMOSPHERE

        ==================================================== */



        .rose-gate-atmosphere {

          position: absolute;

          inset: 0;

          z-index: -4;

          background:

            radial-gradient(

              ellipse at 50% 70%,

              rgba(

                255,

                126,

                81,

                0.13

              ),

              transparent 42%

            );

          animation:

            atmosphereBreath

            6s ease-in-out

            infinite;

        }



        @keyframes atmosphereBreath {

          0%,

          100% {

            opacity: 0.55;

            transform: scale(0.98);

          }



          50% {

            opacity: 1;

            transform: scale(1.04);

          }

        }



        /* ====================================================

           INSIDE LIGHT

        ==================================================== */



        .rose-gate-inside-light {

          position: absolute;

          left: 50%;

          top: 23%;

          width: 48%;

          height: 60%;

          transform:

            translateX(-50%);

          background:

            radial-gradient(

              ellipse,

              rgba(

                255,

                229,

                159,

                0.72

              ) 0%,

              rgba(

                255,

                172,

                82,

                0.25

              ) 30%,

              transparent 72%

            );

          filter:

            blur(15px);

          z-index: -1;

          pointer-events: none;

        }



        /* ====================================================

           GROUND

        ==================================================== */



        .rose-gate-ground {

          position: absolute;

          inset:

            48% 0 0;

          background:

            linear-gradient(

              180deg,

              transparent,

              #0a0809 25%,

              #040405 100%

            );

          z-index: -3;

        }



        .rose-gate-path {

          position: absolute;

          left: 50%;

          bottom: -5%;

          width: 42%;

          height: 95%;

          transform:

            translateX(-50%);

          clip-path:

            polygon(

              42% 0,

              58% 0,

              100% 100%,

              0 100%

            );

          background:

            linear-gradient(

              90deg,

              rgba(

                117,

                68,

                47,

                0.1

              ),

              rgba(

                204,

                112,

                67,

                0.24

              ),

              rgba(

                117,

                68,

                47,

                0.1

              )

            );

        }



        .rose-gate-ground-glow {

          position: absolute;

          left: 50%;

          bottom: 5%;

          width: 55%;

          height: 35%;

          transform:

            translateX(-50%);

          background:

            radial-gradient(

              ellipse,

              rgba(

                238,

                133,

                91,

                0.12

              ),

              transparent 70%

            );

          filter:

            blur(25px);

        }



        /* ====================================================

           MIST

        ==================================================== */



        .rose-gate-mist {

          position: absolute;

          width: 65%;

          height: 18%;

          border-radius: 50%;

          background:

            rgba(

              212,

              176,

              163,

              0.07

            );

          filter:

            blur(25px);

          animation:

            mistMove

            14s ease-in-out

            infinite;

        }



        .mist-one {

          left: -10%;

          bottom: 16%;

        }



        .mist-two {

          right: -12%;

          bottom: 27%;

          animation-delay: -5s;

        }



        .mist-three {

          left: 20%;

          bottom: 8%;

          animation-delay: -9s;

        }



        @keyframes mistMove {

          0%,

          100% {

            transform:

              translateX(-3%);

            opacity: 0.25;

          }



          50% {

            transform:

              translateX(8%);

            opacity: 0.65;

          }

        }



        /* ====================================================

           PETALS

        ==================================================== */



        .rose-gate-petals {

          position: absolute;

          inset: 0;

          overflow: hidden;

          z-index: 8;

          pointer-events: none;

        }



        .rose-gate-petals span {

          position: absolute;

          top: -30px;

          border-radius:

            70% 30% 70% 30%;

          background:

            linear-gradient(

              135deg,

              #ff9b91,

              #7b1721

            );

          box-shadow:

            0 2px 8px

              rgba(

                255,

                80,

                90,

                0.22

              );

          animation:

            petalFall

            11s linear

            infinite;

          opacity: 0.6;

        }



        @keyframes petalFall {

          0% {

            transform:

              translate3d(

                0,

                -40px,

                0

              )

              rotate(0deg);

            opacity: 0;

          }



          12% {

            opacity: 0.75;

          }



          70% {

            opacity: 0.5;

          }



          100% {

            transform:

              translate3d(

                80px,

                110vh,

                0

              )

              rotate(480deg);

            opacity: 0;

          }

        }



        /* ====================================================

           ARCHITECTURE

        ==================================================== */



        .rose-gate-architecture {

          position: absolute;

          inset: 4% 0 5%;

          transform-origin:

            center bottom;

          z-index: 2;

          perspective: 1800px;

        }



        /* ====================================================

           PILLARS

        ==================================================== */



        .rose-gate-pillar {

          position: absolute;

          top: 0;

          width: clamp(

            110px,

            13vw,

            235px

          );

          height: 92%;

          z-index: 8;

        }



        .rose-gate-pillar-left {

          left: 0;

        }



        .rose-gate-pillar-right {

          right: 0;

        }



        .rose-gate-pillar-body {

          position: absolute;

          left: 10%;

          right: 10%;

          top: 11%;

          bottom: 5%;

          border:

            2px solid

            rgba(

              196,

              153,

              103,

              0.55

            );

          background:

            linear-gradient(

              90deg,

              #241b19 0%,

              #574137 20%,

              #7a5a48 48%,

              #473329 74%,

              #1b1414 100%

            );

          box-shadow:

            inset 8px 0 18px

              rgba(

                0,

                0,

                0,

                0.48

              ),

            inset -8px 0 18px

              rgba(

                255,

                219,

                170,

                0.12

              ),

            0 10px 40px

              rgba(

                0,

                0,

                0,

                0.55

              );

        }



        .rose-gate-pillar-body::before {

          content: "";

          position: absolute;

          inset: 0;

          background:

            repeating-linear-gradient(

              90deg,

              transparent 0 28px,

              rgba(

                255,

                224,

                190,

                0.06

              ) 29px,

              transparent 31px

            );

          opacity: 0.5;

        }



        .rose-gate-pillar-cap {

          position: absolute;

          top: 0;

          left: 0;

          width: 100%;

          height: 13%;

          background:

            linear-gradient(

              180deg,

              #9a7556,

              #5c4336 55%,

              #241a18

            );

          border:

            2px solid

            rgba(

              220,

              177,

              120,

              0.7

            );

          box-shadow:

            0 8px 30px

              rgba(

                0,

                0,

                0,

                0.45

              );

          z-index: 3;

        }



        .rose-gate-pillar-cap span {

          position: absolute;

          bottom: -7px;

          height: 12px;

          background:

            #4c362c;

          border:

            1px solid

            rgba(

              225,

              184,

              126,

              0.5

            );

        }



        .rose-gate-pillar-cap span:nth-child(1) {

          left: 8%;

          width: 84%;

        }



        .rose-gate-pillar-cap span:nth-child(2) {

          left: 16%;

          bottom: -17px;

          width: 68%;

        }



        .rose-gate-pillar-cap span:nth-child(3) {

          left: 26%;

          bottom: -27px;

          width: 48%;

        }



        .rose-gate-pillar-base {

          position: absolute;

          left: -4%;

          right: -4%;

          bottom: 0;

          height: 9%;

          background:

            linear-gradient(

              180deg,

              #715340,

              #30231f

            );

          border:

            2px solid

            rgba(

              212,

              170,

              116,

              0.5

            );

          box-shadow:

            0 -5px 20px

              rgba(

                0,

                0,

                0,

                0.5

              );

        }



        .pillar-stone {

          position: absolute;

          left: 8%;

          right: 8%;

          height: 1px;

          background:

            rgba(

              225,

              194,

              161,

              0.2

            );

        }



        .stone-one {

          top: 24%;

        }



        .stone-two {

          top: 47%;

        }



        .stone-three {

          top: 68%;

        }



        .stone-four {

          top: 82%;

        }



        /* ====================================================

           LAMPS

        ==================================================== */



        .pillar-lamp {

          position: absolute;

          top: 34%;

          left: 50%;

          width: 28px;

          height: 52px;

          transform:

            translateX(-50%);

          border:

            2px solid

            rgba(

              216,

              178,

              118,

              0.8

            );

          background:

            rgba(

              34,

              20,

              16,

              0.9

            );

          border-radius:

            8px 8px 12px 12px;

          box-shadow:

            0 0 30px

              rgba(

                255,

                176,

                84,

                0.28

              );

        }



        .lamp-flame {

          position: absolute;

          left: 50%;

          top: 50%;

          width: 13px;

          height: 23px;

          transform:

            translate(

              -50%,

              -45%

            );

          border-radius:

            50% 50% 55% 45%;

          background:

            radial-gradient(

              circle at 50% 70%,

              #fff,

              #ffd06a 38%,

              #b8482d 70%,

              transparent 72%

            );

          animation:

            flame

            1.8s ease-in-out

            infinite;

        }



        @keyframes flame {

          0%,

          100% {

            transform:

              translate(

                -50%,

                -45%

              )

              scaleY(1);

          }



          50% {

            transform:

              translate(

                -48%,

                -48%

              )

              scaleY(1.15);

          }

        }



        /* ====================================================

           PILLAR ROSES

        ==================================================== */



        .pillar-rose {

          position: absolute;

          font-size:

            clamp(

              20px,

              2.5vw,

              38px

            );

          filter:

            drop-shadow(

              0 4px 7px

              rgba(

                0,

                0,

                0,

                0.55

              )

            );

          animation:

            roseSway

            4s ease-in-out

            infinite;

        }



        .rose-one {

          bottom: 17%;

          left: 17%;

        }



        .rose-two {

          bottom: 23%;

          right: 13%;

          animation-delay: -1.4s;

        }



        @keyframes roseSway {

          0%,

          100% {

            transform:

              rotate(-4deg)

              translateY(0);

          }



          50% {

            transform:

              rotate(5deg)

              translateY(-5px);

          }

        }



        /* ====================================================

           CENTRAL ARCH

        ==================================================== */



        .rose-gate-arch {

          position: absolute;

          top: 3%;

          left: 50%;

          width: min(

            66vw,

            1080px

          );

          height: 25%;

          transform:

            translateX(-50%);

          border:

            3px solid

            rgba(

              176,

              130,

              88,

              0.8

            );

          border-bottom: 0;

          border-radius:

            50% 50% 0 0;

          background:

            linear-gradient(

              180deg,

              rgba(

                95,

                64,

                52,

                0.95

              ),

              rgba(

                37,

                25,

                24,

                0.97

              )

            );

          box-shadow:

            inset 0 8px 20px

              rgba(

                255,

                219,

                171,

                0.08

              ),

            0 20px 45px

              rgba(

                0,

                0,

                0,

                0.45

              );

          z-index: 5;

        }



        .rose-gate-arch::before,

        .rose-gate-arch::after {

          content: "";

          position: absolute;

          top: 15%;

          width: 18%;

          height: 70%;

          border:

            1px solid

            rgba(

              220,

              174,

              117,

              0.25

            );

        }



        .rose-gate-arch::before {

          left: 8%;

        }



        .rose-gate-arch::after {

          right: 8%;

        }



        .rose-gate-arch-inner {

          position: absolute;

          inset: 16%;

          border:

            1px solid

            rgba(

              255,

              212,

              148,

              0.35

            );

          border-radius:

            50% 50% 0 0;

          display: flex;

          justify-content: center;

          align-items: center;

        }



        .rose-gate-emblem {

          text-align: center;

          color:

            rgba(

              245,

              203,

              143,

              0.92

            );

          text-shadow:

            0 0 18px

              rgba(

                244,

                175,

                92,

                0.25

              );

          letter-spacing:

            0.28em;

        }



        .rose-gate-emblem div {

          font-size:

            clamp(

              20px,

              3vw,

              46px

            );

          font-weight: 500;

        }



        .rose-gate-emblem span {

          display: block;

          margin-top: 4px;

          font-size:

            clamp(

              8px,

              0.8vw,

              12px

            );

          letter-spacing:

            0.55em;

        }



        /* ====================================================

           DOORS

        ==================================================== */



        .rose-gate-door-wrap {

          position: absolute;

          top: 23%;

          width: 31.5%;

          height: 69%;

          z-index: 7;

          transform-style:

            preserve-3d;

          backface-visibility:

            hidden;

          will-change:

            transform;

        }



        .rose-gate-door-wrap-left {

          left: 18.5%;

          transform-origin:

            left center;

        }



        .rose-gate-door-wrap-right {

          right: 18.5%;

          transform-origin:

            right center;

        }



        .rose-gate-door {

          position: absolute;

          inset: 0;

          transform-style:

            preserve-3d;

          backface-visibility:

            hidden;

        }



        .door-frame {

          position: absolute;

          inset: 0;

          border:

            5px solid

            #4a3328;

          background:

            linear-gradient(

              90deg,

              #1a1110,

              #493126 12%,

              #241714 28%,

              #604333 50%,

              #241714 72%,

              #4d3327 88%,

              #160f0f

            );

          box-shadow:

            inset 0 0 35px

              rgba(

                0,

                0,

                0,

                0.75

              ),

            0 15px 50px

              rgba(

                0,

                0,

                0,

                0.7

              );

        }



        .door-panel {

          position: absolute;

          top: 7%;

          bottom: 7%;

          width: 27%;

          border:

            2px solid

            rgba(

              202,

              158,

              104,

              0.4

            );

          background:

            linear-gradient(

              90deg,

              #171011,

              #39231e,

              #1a1011

            );

          box-shadow:

            inset 0 0 20px

              rgba(

                0,

                0,

                0,

                0.7

              );

        }



        .panel-one {

          left: 8%;

        }



        .panel-two {

          left: 36.5%;

        }



        .panel-three {

          right: 8%;

        }



        .door-panel::before {

          content: "";

          position: absolute;

          inset: 12%;

          border:

            1px solid

            rgba(

              222,

              174,

              111,

              0.22

            );

          border-radius:

            3px;

        }



        .door-rose-pattern {

          position: absolute;

          left: 50%;

          top: 50%;

          transform:

            translate(

              -50%,

              -50%

            );

          font-size:

            clamp(

              35px,

              5vw,

              80px

            );

          opacity: 0.72;

          filter:

            drop-shadow(

              0 0 18px

              rgba(

                225,

                81,

                73,

                0.3

              )

            );

        }



        .door-handle {

          position: absolute;

          top: 50%;

          width: 20px;

          height: 80px;

          transform:

            translateY(-50%);

          border-radius: 10px;

          background:

            linear-gradient(

              90deg,

              #4a2e20,

              #c08a4d,

              #503322

            );

          box-shadow:

            0 0 15px

              rgba(

                222,

                163,

                87,

                0.22

              );

        }



        .rose-gate-door-wrap-left

          .door-handle {

          right: 4%;

        }



        .rose-gate-door-wrap-right

          .door-handle {

          left: 4%;

        }



        .door-metal-detail {

          position: absolute;

          left: 7%;

          right: 7%;

          height: 8px;

          border-radius: 4px;

          background:

            linear-gradient(

              90deg,

              transparent,

              rgba(

                210,

                159,

                94,

                0.7

              ),

              transparent

            );

        }



        .detail-top {

          top: 12%;

        }



        .detail-bottom {

          bottom: 12%;

        }



        /* ====================================================

           COPY

        ==================================================== */



        .rose-gate-copy {

          position: absolute;

          inset: 0;

          z-index: 20;

          pointer-events: none;

          display: flex;

          justify-content: center;

          align-items: center;

          text-align: center;

          padding:

            0 20px;

        }



        .rose-gate-intro,

        .rose-gate-question,

        .rose-gate-opening-copy {

          max-width:

            760px;

          animation:

            copyAppear

            1.5s

            cubic-bezier(

              0.22,

              1,

              0.36,

              1

            )

            both;

        }



        @keyframes copyAppear {

          from {

            opacity: 0;

            transform:

              translateY(24px)

              scale(0.98);

            filter:

              blur(8px);

          }



          to {

            opacity: 1;

            transform:

              translateY(0)

              scale(1);

            filter:

              blur(0);

          }

        }



        .rose-gate-eyebrow {

          font-family:

            Arial,

            sans-serif;

          font-size:

            clamp(

              9px,

              1vw,

              13px

            );

          letter-spacing:

            0.45em;

          text-transform:

            uppercase;

          color:

            rgba(

              244,

              199,

              139,

              0.85

            );

          margin-bottom:

            18px;

        }



        .rose-gate-intro h1 {

          margin: 0;

          font-weight: 400;

          font-size:

            clamp(

              34px,

              5vw,

              78px

            );

          line-height: 1.05;

          text-shadow:

            0 4px 30px

              rgba(

                0,

                0,

                0,

                0.8

              );

        }



        .rose-gate-intro h1 span,

        .rose-gate-question h2 span {

          font-style: italic;

          color:

            #efb99d;

          text-shadow:

            0 0 25px

              rgba(

                239,

                146,

                113,

                0.22

              );

        }



        .rose-gate-intro p {

          margin-top: 25px;

          font-family:

            Arial,

            sans-serif;

          font-size:

            14px;

          letter-spacing:

            0.18em;

          color:

            rgba(

              255,

              255,

              255,

              0.58

            );

        }



        .rose-gate-question h2 {

          margin: 0;

          font-size:

            clamp(

              32px,

              5vw,

              70px

            );

          font-weight: 400;

          line-height: 1.02;

        }



        .rose-gate-question p {

          margin:

            24px auto

            28px;

          font-family:

            Arial,

            sans-serif;

          font-size:

            clamp(

              12px,

              1.2vw,

              16px

            );

          line-height: 1.7;

          letter-spacing:

            0.04em;

          color:

            rgba(

              255,

              255,

              255,

              0.64

            );

        }



        .rose-gate-actions {

          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 13px;

          pointer-events:

            auto;

        }



        .rose-gate-primary {

          border: 1px solid

            rgba(

              245,

              190,

              139,

              0.72

            );

          background:

            linear-gradient(

              135deg,

              rgba(

                113,

                48,

                39,

                0.92

              ),

              rgba(

                75,

                29,

                28,

                0.92

              )

            );

          color: #fff7ef;

          padding:

            14px 27px;

          border-radius: 999px;

          font-family:

            Arial,

            sans-serif;

          font-size: 13px;

          letter-spacing:

            0.08em;

          cursor: pointer;

          box-shadow:

            0 10px 35px

              rgba(

                83,

                27,

                22,

                0.35

              ),

            inset 0 1px

              rgba(

                255,

                255,

                255,

                0.12

              );

          transition:

            transform 0.3s,

            box-shadow 0.3s,

            background 0.3s;

        }



        .rose-gate-primary:hover {

          transform:

            translateY(-3px);

          box-shadow:

            0 15px 45px

              rgba(

                107,

                38,

                29,

                0.5

              ),

            0 0 25px

              rgba(

                236,

                155,

                107,

                0.15

              );

        }



        .rose-gate-secondary {

          border: 0;

          background:

            transparent;

          color:

            rgba(

              255,

              255,

              255,

              0.46

            );

          font-family:

            Arial,

            sans-serif;

          font-size:

            11px;

          letter-spacing:

            0.06em;

          cursor: pointer;

          padding:

            7px 15px;

          pointer-events:

            auto;

          transition:

            color 0.3s;

        }



        .rose-gate-secondary:hover {

          color:

            rgba(

              255,

              255,

              255,

              0.85

            );

        }



        /* ====================================================

           OPENING COPY

        ==================================================== */



        .rose-gate-opening-copy {

          transform:

            translateY(-8%);

        }



        .rose-gate-opening-title {

          font-size:

            clamp(

              64px,

              13vw,

              190px

            );

          line-height: 0.8;

          font-weight: 300;

          letter-spacing:

            0.08em;

          color:

            rgba(

              255,

              235,

              198,

              0.94

            );

          text-shadow:

            0 0 45px

              rgba(

                255,

                185,

                107,

                0.35

              ),

            0 8px 35px

              rgba(

                0,

                0,

                0,

                0.8

              );

        }



        .rose-gate-opening-subtitle {

          margin-top: 25px;

          font-size:

            clamp(

              18px,

              2.5vw,

              34px

            );

          font-style: italic;

          color:

            rgba(

              255,

              227,

              204,

              0.88

            );

        }



        /* ====================================================

           TOP LABEL

        ==================================================== */



        .rose-gate-top-label {

          position: absolute;

          top: 26px;

          left: 50%;

          transform:

            translateX(-50%);

          z-index: 30;

          display: flex;

          align-items: center;

          gap: 15px;

          font-family:

            Arial,

            sans-serif;

          font-size:

            9px;

          letter-spacing:

            0.35em;

          color:

            rgba(

              255,

              255,

              255,

              0.42

            );

          white-space:

            nowrap;

        }



        .rose-gate-top-label i {

          display: block;

          width: 34px;

          height: 1px;

          background:

            rgba(

              235,

              180,

              123,

              0.6

            );

        }



        /* ====================================================

           BOTTOM LABEL

        ==================================================== */



        .rose-gate-bottom-label {

          position: absolute;

          left: 34px;

          bottom: 28px;

          z-index: 30;

          display: flex;

          align-items: flex-end;

          gap: 14px;

          font-family:

            Arial,

            sans-serif;

          font-size: 8px;

          line-height: 1.6;

          letter-spacing:

            0.2em;

          color:

            rgba(

              255,

              255,

              255,

              0.32

            );

        }



        .bottom-line {

          width: 40px;

          height: 1px;

          margin-bottom: 4px;

          background:

            rgba(

              237,

              175,

              119,

              0.4

            );

        }



        /* ====================================================

           VIGNETTE

        ==================================================== */



        .rose-gate-vignette {

          position: absolute;

          inset: 0;

          z-index: 40;

          pointer-events: none;

          background:

            radial-gradient(

              ellipse at center,

              transparent 45%,

              rgba(

                0,

                0,

                0,

                0.2

              ) 75%,

              rgba(

                0,

                0,

                0,

                0.72

              ) 100%

            );

        }



        /* ====================================================

           GRAIN

        ==================================================== */



        .rose-gate-grain {

          position: absolute;

          inset: -50%;

          z-index: 50;

          pointer-events: none;

          opacity: 0.055;

          background-image:

            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http\://www\.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");

          animation:

            grainMove

            0.25s steps(2)

            infinite;

        }



        @keyframes grainMove {

          0% {

            transform:

              translate(0, 0);

          }



          25% {

            transform:

              translate(2%, -1%);

          }



          50% {

            transform:

              translate(-1%, 2%);

          }



          75% {

            transform:

              translate(1%, 1%);

          }



          100% {

            transform:

              translate(-2%, -1%);

          }

        }



        /* ====================================================

           RESPONSIVE

        ==================================================== */



        @media (max-width: 800px) {



          .rose-gate-pillar {

            width: 18vw;

          }



          .rose-gate-door-wrap {

            width: 34%;

          }



          .rose-gate-door-wrap-left {

            left: 16%;

          }



          .rose-gate-door-wrap-right {

            right: 16%;

          }



          .rose-gate-arch {

            width: 72vw;

          }



          .rose-gate-question {

            max-width: 90vw;

          }



          .rose-gate-bottom-label {

            left: 18px;

            bottom: 18px;

          }

        }



        @media (max-width: 520px) {



          .rose-gate-pillar {

            width: 20vw;

          }



          .rose-gate-door-wrap {

            top: 27%;

            height: 62%;

            width: 35%;

          }



          .rose-gate-door-wrap-left {

            left: 14%;

          }



          .rose-gate-door-wrap-right {

            right: 14%;

          }



          .rose-gate-arch {

            top: 7%;

            width: 76vw;

            height: 22%;

          }



          .rose-gate-copy {

            align-items: center;

            padding-top: 7vh;

          }



          .rose-gate-eyebrow {

            letter-spacing:

              0.3em;

          }



          .rose-gate-intro h1,

          .rose-gate-question h2 {

            font-size:

              clamp(

                30px,

                9vw,

                50px

              );

          }



          .rose-gate-question p {

            font-size: 12px;

          }



          .rose-gate-top-label {

            top: 18px;

          }



          .rose-gate-bottom-label {

            font-size: 7px;

          }



          .pillar-lamp {

            transform:

              translateX(-50%)

              scale(0.7);

          }



          .pillar-rose {

            font-size: 18px;

          }

        }



        @media (

          prefers-reduced-motion: reduce

        ) {



          .rose-gate-stars span,

          .rose-gate-moon,

          .rose-gate-atmosphere,

          .rose-gate-mist,

          .rose-gate-petals span,

          .pillar-lamp,

          .pillar-rose,

          .rose-gate-grain {

            animation:

              none !important;

          }

        }



      `}</style>

    </div>

  );

}