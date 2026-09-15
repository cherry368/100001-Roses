import { useEffect, useRef, useState } from "react";

interface FinalSceneProps {
  phase: "heart" | "final";
  onReset: () => void;
  onPickRandom: () => void;
}

const STORY = [
  {
    at: 2800,
    title: "One last surprise…",
    body: "Out of 100,001 roses, there’s something I’ve always wanted to say…",
  },
  {
    at: 6200,
    title: "Every rose has a reason…",
    body: "A memory. A moment. A feeling. A little piece of you.",
  },
  {
    at: 10000,
    title: "And all of them lead to this…",
    body: "",
  },
  {
    at: 14000,
    title: "Because at the end of it all…",
    body: "It’s always you. ❤️",
  },
];

const TEXT_HOLD_AFTER_LAST = 3500;

export function FinalScene({ phase, onReset, onPickRandom }: FinalSceneProps) {
  const [step, setStep] = useState(-1);
  const [fadingOut, setFadingOut] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];

    setStep(-1);
    setFadingOut(false);
    setShowReplay(false);

    if (phase === "final") {
      setStep(STORY.length - 1);
      setFadingOut(false);
      const fadeTimer = window.setTimeout(() => setFadingOut(true), TEXT_HOLD_AFTER_LAST);
      timersRef.current.push(fadeTimer);
      return () => {
        timersRef.current.forEach((timer) => window.clearTimeout(timer));
        timersRef.current = [];
      };
    }

    STORY.forEach((item, index) => {
      timersRef.current.push(
        window.setTimeout(() => {
          setFadingOut(false);
          setStep(index);
        }, item.at),
      );
    });

    timersRef.current.push(
      window.setTimeout(
        () => setFadingOut(true),
        STORY[STORY.length - 1].at + TEXT_HOLD_AFTER_LAST,
      ),
    );

    timersRef.current.push(window.setTimeout(() => setShowReplay(true), 26000));

    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    };
  }, [phase]);

  const current = step >= 0 ? STORY[step] : null;
  const interactive = phase === "final";

  return (
    <div className="final-scene" aria-live="polite">
      <div className="heart-vignette" aria-hidden="true" />
      <div className="heart-top-glow" aria-hidden="true" />

      <div className="heart-particles" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index} style={{ "--i": index } as React.CSSProperties} />
        ))}
      </div>

      {interactive && (
        <>
          <div className="explore-heading">
            <div className="explore-eyebrow">100,001 REASONS</div>
            <h1>Now it’s your turn…</h1>
            <div className="explore-rule"><span />♡<span /></div>
            <p>Click on any rose to read its note.</p>
            <small>Each rose holds a unique memory, a reason, a feeling… just for you.</small>
          </div>

          <div className="explore-help">
            <div className="help-row"><b>◉</b><span><strong>Click a rose</strong><em>Read its note</em></span></div>
            <div className="help-row"><b>↕</b><span><strong>Scroll</strong><em>Zoom in / out</em></span></div>
            <div className="help-row"><b>✣</b><span><strong>Drag</strong><em>Look around</em></span></div>
            <div className="help-row"><b>⦿</b><span><strong>Double click</strong><em>Reset view</em></span></div>
          </div>

          <div className="explore-footer">
            <span>♥</span> 100,001 REASONS. ALWAYS YOU.
          </div>

          <button className="random-rose" type="button" onClick={onPickRandom}>
            ♥ Pick a rose for me
          </button>
        </>
      )}

      {current && !interactive && (
        <div className={`story-copy ${fadingOut ? "story-copy--fade" : "story-copy--visible"}`}>
          <div key={step} className="story-block">
            <div className="story-title">{current.title}</div>
            {current.body && <div className="story-body">{current.body}</div>}
            <div className="story-divider" aria-hidden="true"><span /><b>♡</b><span /></div>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`heart-replay ${showReplay || interactive ? "heart-replay--visible" : ""}`}
        onClick={onReset}
        aria-label="Replay the journey"
      >
        Replay ↻
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Great+Vibes&display=swap');

        .final-scene {
          position: fixed;
          inset: 0;
          z-index: 60;
          overflow: hidden;
          pointer-events: none;
          color: #fff8fb;
          font-family: 'Cormorant Garamond', Georgia, serif;
          isolation: isolate;
        }

        .heart-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 52%, transparent 30%, rgba(0,0,0,.12) 60%, rgba(0,0,0,.5) 100%);
          opacity: .78;
        }

        .heart-top-glow {
          position: absolute;
          left: 50%;
          top: -15%;
          width: min(80vw, 1000px);
          height: 55vh;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(255,150,175,.12), rgba(255,80,120,.035) 34%, transparent 72%);
          filter: blur(12px);
          animation: heartGlow 6s ease-in-out infinite;
        }

        .heart-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: .4;
        }

        .heart-particles span {
          position: absolute;
          width: 2px;
          height: 2px;
          left: calc((var(--i) * 17.1%) % 100%);
          top: calc((var(--i) * 29.7%) % 100%);
          border-radius: 50%;
          background: rgba(255,225,235,.82);
          box-shadow: 0 0 8px rgba(255,150,180,.7);
          animation: particleFloat 7s ease-in-out infinite, particleBlink 3.4s ease-in-out infinite;
          animation-delay: calc(var(--i) * -.31s), calc(var(--i) * -.17s);
        }

        .story-copy {
          position: absolute;
          left: 50%;
          top: 12vh;
          width: min(820px, 88vw);
          transform: translate(-50%, 0);
          text-align: center;
          z-index: 5;
          opacity: 1;
          transition: opacity 1.2s ease, transform 1.2s ease;
        }

        .story-copy--visible { opacity: 1; }
        .story-copy--fade { opacity: 0; transform: translate(-50%, -16px); }

        .story-title {
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          font-style: italic;
          text-shadow: 0 2px 20px rgba(0,0,0,.75);
        }

        .story-body {
          margin-top: .8rem;
          font-size: clamp(1.05rem, 2.2vw, 1.45rem);
          color: rgba(255,244,240,.82);
        }

        .story-divider, .explore-rule {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin: 18px auto 0;
          color: #ffd8a7;
        }

        .story-divider span, .explore-rule span {
          width: 80px;
          height: 1px;
          background: rgba(255,216,167,.45);
        }

        .explore-heading {
          position: absolute;
          top: clamp(22px, 4.5vh, 56px);
          left: 50%;
          width: min(900px, 88vw);
          transform: translateX(-50%);
          text-align: center;
          z-index: 8;
          text-shadow: 0 2px 18px rgba(0,0,0,.8);
        }

        .explore-eyebrow {
          color: rgba(255,220,180,.75);
          font-size: 11px;
          letter-spacing: .42em;
          margin-bottom: 5px;
        }

        .explore-heading h1 {
          margin: 0;
          font: 400 clamp(2.2rem, 5.4vw, 4.1rem)/1.05 'Great Vibes', cursive;
          color: #ffe4ca;
        }

        .explore-heading p {
          margin: 8px 0 0;
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-style: italic;
          color: rgba(255,244,235,.92);
        }

        .explore-heading small {
          display: block;
          margin-top: 4px;
          color: rgba(255,244,235,.62);
          font-size: clamp(.78rem, 1.5vw, .95rem);
        }

        .explore-help {
          position: absolute;
          left: 14px;
          bottom: 18vh;
          z-index: 9;
          width: 170px;
          padding: 16px 13px;
          border: 1px solid rgba(255,215,150,.32);
          border-radius: 16px;
          background: rgba(15,5,12,.48);
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 40px rgba(0,0,0,.32);
        }

        .help-row {
          display: flex;
          gap: 10px;
          align-items: center;
          margin: 10px 0;
          color: #ffe1bf;
        }

        .help-row b {
          width: 28px;
          font-size: 20px;
          text-align: center;
          font-weight: 400;
        }

        .help-row span { display: flex; flex-direction: column; }
        .help-row strong { font-size: 13px; font-weight: 600; }
        .help-row em { color: rgba(255,240,230,.58); font-size: 11px; font-style: normal; margin-top: 2px; }

        .random-rose {
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          z-index: 10;
          pointer-events: auto;
          padding: 11px 22px;
          border: 1px solid rgba(255,215,150,.52);
          border-radius: 999px;
          background: rgba(70,10,25,.48);
          color: #fff0dc;
          font: 600 15px Georgia, serif;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0,0,0,.3);
        }

        .explore-footer {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          color: rgba(255,224,198,.68);
          font-size: 11px;
          letter-spacing: .3em;
          white-space: nowrap;
        }

        .explore-footer span { color: #ffb2c8; margin-right: 8px; }

        .heart-replay {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 15;
          opacity: 0;
          pointer-events: none;
          border: 1px solid rgba(255,215,150,.35);
          border-radius: 999px;
          background: rgba(0,0,0,.25);
          color: rgba(255,244,235,.72);
          padding: 8px 13px;
          cursor: pointer;
        }

        .heart-replay--visible { opacity: 1; pointer-events: auto; }

        @keyframes heartGlow { 0%,100% { opacity:.55; transform:translateX(-50%) scale(.95); } 50% { opacity:1; transform:translateX(-50%) scale(1.05); } }
        @keyframes particleFloat { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(8px,-16px,0); } }
        @keyframes particleBlink { 0%,100% { opacity:.25; } 50% { opacity:.9; } }

        @media (max-width: 760px) {
          .explore-heading { top: 18px; width: 94vw; }
          .explore-eyebrow { letter-spacing: .22em; }
          .explore-heading h1 { font-size: 2.4rem; }
          .explore-heading p { font-size: .92rem; }
          .explore-heading small { font-size: .72rem; }
          .explore-help { left: 8px; bottom: 90px; width: 145px; padding: 8px; }
          .help-row { margin: 7px 0; }
          .help-row strong { font-size: 11px; }
          .help-row em { font-size: 9px; }
          .explore-footer { display: none; }
          .random-rose { bottom: 18px; }
        }
      `}</style>
    </div>
  );
}
