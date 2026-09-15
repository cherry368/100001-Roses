import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Props {
  active: boolean;
  onMid?: () => void;
  onComplete?: () => void;
}

export function SceneTransition({
  active,
  onMid,
  onComplete,
}: Props) {
  const ref =
    useRef<HTMLDivElement>(null);

  const [midCalled, setMidCalled] =
    useState(false);

  useEffect(() => {
    if (!active || !ref.current) {
      return;
    }

    setMidCalled(false);

    const element = ref.current;

    const tl = gsap.timeline();

    /*
     * PHASE 1
     *
     * Warm light begins growing from the centre.
     */

    tl.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
      }
    );

    /*
     * PHASE 2
     *
     * Hold the darkness for a moment.
     *
     * This is where App switches from
     * LETTER → GARDEN.
     */

    tl.to(element, {
      opacity: 1,
      duration: 0.18,

      onComplete: () => {
        if (!midCalled) {
          setMidCalled(true);
          onMid?.();
        }
      },
    });

    /*
     * PHASE 3
     *
     * Slowly reveal the new world.
     */

    tl.to(element, {
      opacity: 0,
      duration: 0.95,
      ease: "power2.inOut",

      onComplete: () => {
        onComplete?.();
      },
    });

    return () => {
      tl.kill();
    };
  }, [active, onMid, onComplete, midCalled]);

  if (!active) {
    return null;
  }

  return (
    <div
      ref={ref}
      className="scene-transition"
      aria-hidden="true"
    >
      <div className="scene-transition__glow" />

      <div className="scene-transition__petals">
        <span>🌹</span>
        <span>✨</span>
        <span>🌸</span>
        <span>💗</span>
        <span>🌹</span>
        <span>✨</span>
        <span>🌹</span>
        <span>💫</span>
      </div>

      <div className="scene-transition__message">
        <span>🌹</span>

        <p>
          Something beautiful
          <br />
          is waiting...
        </p>

        <span>✨</span>
      </div>
    </div>
  );
}