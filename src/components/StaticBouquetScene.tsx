import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

interface StaticBouquetSceneProps {
  phase: "reveal" | "explore";
  onPickRandom: () => void;
  onZoomOutHeart: () => void;
  onRevealComplete: () => void;
}

const PETAL_COUNT = 14;

const STORY_LINES = [
  "Wait... don't look away just yet. 🌹",
  "A bouquet is beautiful... but somehow, it still felt too ordinary for you. ✨",
  "So I searched for something worthy enough to give you...",
  "And then I realised... maybe I had to create it myself. ❤️‍🔥",
  "This is only the beginning. Keep looking... 👀",
];

const LETTER_TITLE = "A little birthday secret 💌";

export function StaticBouquetScene({
  phase,
  onPickRandom,
  onZoomOutHeart,
  onRevealComplete,
}: StaticBouquetSceneProps) {
  const [visible, setVisible] = useState(false);
  const [storyIndex, setStoryIndex] = useState(-1);
  const [showDrop, setShowDrop] = useState(false);
  const [dropOpened, setDropOpened] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [heartTransition, setHeartTransition] = useState(false);

  const storyTimersRef = useRef<number[]>([]);
  const dropTimerRef = useRef<number | null>(null);
  const continueTimerRef = useRef<number | null>(null);
  const heartTimerRef = useRef<number | null>(null);

  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, index) => ({
        id: index,
        left: `${(index * 29 + 5) % 100}%`,
        delay: `${-((index % 8) * 1.8)}s`,
        duration: `${13 + (index % 5) * 2}s`,
        size: `${7 + (index % 4) * 2}px`,
        drift: `${-70 + (index % 7) * 23}px`,
        rotate: `${index * 53}deg`,
      })),
    [],
  );

  const clearTimers = () => {
    storyTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    storyTimersRef.current = [];

    if (dropTimerRef.current !== null) {
      window.clearTimeout(dropTimerRef.current);
      dropTimerRef.current = null;
    }

    if (continueTimerRef.current !== null) {
      window.clearTimeout(continueTimerRef.current);
      continueTimerRef.current = null;
    }

    if (heartTimerRef.current !== null) {
      window.clearTimeout(heartTimerRef.current);
      heartTimerRef.current = null;
    }
  };

  useEffect(() => {
    clearTimers();
    setVisible(false);
    setStoryIndex(-1);
    setShowDrop(false);
    setDropOpened(false);
    setShowContinue(false);
    setHeartTransition(false);

    const entranceTimer = window.setTimeout(() => setVisible(true), 40);

    if (phase === "reveal") {
      // Image gets a quick entrance, then each sentence gets its own clean slot.
      const storyStarts = [900, 3500, 6200, 8900, 11600];
      storyStarts.forEach((delay, index) => {
        const timer = window.setTimeout(() => setStoryIndex(index), delay);
        storyTimersRef.current.push(timer);
      });

      // Let the final line breathe before the notification arrives.
      const revealTimer = window.setTimeout(() => {
        setStoryIndex(-1);
        setShowDrop(true);
        onRevealComplete();
      }, 14600);
      storyTimersRef.current.push(revealTimer);
    } else {
      setStoryIndex(-1);
      setShowDrop(true);
    }

    return () => {
      window.clearTimeout(entranceTimer);
      clearTimers();
    };
  }, [phase, onRevealComplete]);

  const handleBouquetClick = () => {
    if (phase === "explore" && !dropOpened && !showContinue && !heartTransition) {
      onPickRandom();
    }
  };

  const openDrop = () => {
    if (heartTransition) return;
    setShowDrop(false);
    setDropOpened(true);
    setShowContinue(false);

    // Give the letter time to be read before the permission popup appears.
    // The letter reveals itself first, then remains on screen long enough to read.
    continueTimerRef.current = window.setTimeout(() => {
      setShowContinue(true);
      continueTimerRef.current = null;
    }, 12500);
  };

  const closeDrop = () => {
    setDropOpened(false);
    setShowContinue(false);
    if (continueTimerRef.current !== null) {
      window.clearTimeout(continueTimerRef.current);
      continueTimerRef.current = null;
    }
    // The notification can be opened again.
    dropTimerRef.current = window.setTimeout(() => {
      setShowDrop(true);
      dropTimerRef.current = null;
    }, 1200);
  };

  const continueToNextPage = () => {
    if (heartTransition) return;
    setShowContinue(false);
    setDropOpened(false);
    setHeartTransition(true);

    heartTimerRef.current = window.setTimeout(() => {
      onZoomOutHeart();
      heartTimerRef.current = null;
    }, 3800);
  };

  return (
    <section
      className={`page3 ${visible ? "page3--visible" : ""} ${
        storyIndex >= 0 ? "page3--story" : ""
      } ${dropOpened ? "page3--drop-open" : ""} ${
        showContinue ? "page3--continue" : ""
      } ${heartTransition ? "page3--heart" : ""}`}
      aria-label="100,001 Roses"
    >
      <div className="page3__backdrop" aria-hidden="true">
        <img src="/assets/bouquet/bouquet-wide.jpg" alt="" />
      </div>

      <div className="page3__art" aria-hidden="true">
        <img
          className="page3__image"
          src="/assets/bouquet/bouquet-wide.jpg"
          alt=""
          draggable={false}
        />
      </div>

      <div className="page3__shade" aria-hidden="true" />
      <div className="page3__warmth" aria-hidden="true" />
      <div className="page3__light-sweep" aria-hidden="true" />
      <div className="page3__vignette" aria-hidden="true" />
      <div className="page3__grain" aria-hidden="true" />

      <div className="page3__petals" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="page3__petal"
            style={
              {
                left: petal.left,
                animationDelay: petal.delay,
                animationDuration: petal.duration,
                width: petal.size,
                height: `calc(${petal.size} * .68)`,
                "--drift": petal.drift,
                "--rotate": petal.rotate,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* One text slot. The previous line fully fades before the next appears. */}
      <div className="page3__story" aria-live="polite">
        {STORY_LINES.map((line, index) => (
          <p
            key={line}
            className={`page3__story-line ${
              storyIndex === index ? "page3__story-line--active" : ""
            }`}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Small romantic notes fill the open space beside the bouquet. */}
      <span className="page3__side-note page3__side-note--left" aria-hidden="true">
        not just flowers
        <b>🌹</b>
      </span>
      <span className="page3__side-note page3__side-note--right" aria-hidden="true">
        a little piece
        <b>of my heart ♡</b>
      </span>

      {/* The story sits directly over the rose-filled bouquet area. */}

      {/* Incoming-message style notification: bottom-right, like a phone notification. */}

      {phase === "explore" && showDrop && !dropOpened && !heartTransition && (
        <button type="button" className="page3__message-drop" onClick={openDrop}>
          <span className="page3__message-icon">💌</span>
          <span className="page3__message-body">
            <strong>New message</strong>
            <small>Check me... something special just arrived 👀</small>
          </span>
          <span className="page3__message-arrow">›</span>
        </button>
      )}

      {/* The bouquet remains a subtle interaction target without adding another visual layer. */}
      {phase === "explore" && !dropOpened && !showContinue && !heartTransition && (
        <button
          type="button"
          className="page3__bouquet-hit"
          onClick={handleBouquetClick}
          aria-label="Choose a rose from the bouquet"
        />
      )}

      {/* Birthday letter. */}
      {phase === "explore" && dropOpened && !heartTransition && (
        <div className="page3__letter page3__letter--reading" role="dialog" aria-label="Birthday letter">
          <div className="page3__letter-flower">🌹</div>
          <button
            type="button"
            className="page3__letter-close"
            onClick={closeDrop}
            aria-label="Close birthday letter"
          >
            ×
          </button>

          <span className="page3__letter-kicker">✦ written for this little moment ✦</span>
          <h2>{LETTER_TITLE}</h2>

          <div className="page3__letter-rule">♡</div>

          <p className="page3__letter-lead">
            Happy Birthday, beautiful. ❤️
          </p>

          <p className="page3__letter-copy page3__letter-copy--1">
            I could have simply sent you a message and said, “Happy Birthday.”
            But that felt far too ordinary for a day that belongs to you.
          </p>

          <p className="page3__letter-copy page3__letter-copy--2">
            So I made you this little journey instead — a few roses, a few
            feelings, and a tiny corner of the internet where you can pause for
            a moment and just enjoy being celebrated. ✨
          </p>

          <p className="page3__letter-copy page3__letter-copy--3">
            I hope this new year of your life gives you beautiful surprises,
            ridiculous amounts of laughter, unforgettable memories, and people
            who remind you just how special you are. 🌷
          </p>

          <p className="page3__letter-copy page3__letter-copy--4 page3__letter-whisper">
            And yes... there is still something I haven't shown you yet. 👀
          </p>

          <span className="page3__letter-signature">
            With a little too much effort, a lot of love, and 100,001 roses. ❤️
          </span>

          <div className="page3__letter-progress">
            <span />
          </div>

          <div className="page3__letter-hint">
            Read it slowly... the next part is waiting.
          </div>
        </div>
      )}

      {/* Permission/curiosity popup in the CENTER, after the letter has been read. */}
      {phase === "explore" && showContinue && !heartTransition && (
        <div className="page3__permission-backdrop">
          <div className="page3__permission" role="dialog" aria-label="Continue to the next page">
            <span className="page3__permission-sparkles">✦ 🌹 ✦</span>
            <span className="page3__permission-kicker">one last little question...</span>
            <h3>Are you ready to go a little further? 👀</h3>
            <p>
              Because if you think this was the whole surprise...
              <br />
              you really don't know me yet. ❤️‍🔥
            </p>
            <button type="button" onClick={continueToNextPage}>
              I WANT TO SEE WHAT'S NEXT ✨
            </button>
            <span className="page3__permission-foot">no turning back after this... 😉</span>
          </div>
        </div>
      )}

      {/* Heart transition into Page 4. */}
      <div className="page3__heart" aria-hidden="true">
        <div className="page3__heart-aura" />
        <div className="page3__heart-symbol">♥</div>
        <div className="page3__heart-copy">
          <span>100,001 roses</span>
          <strong>and still... not enough</strong>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&display=swap');

        .page3 {
          position: fixed;
          inset: 0;
          z-index: 100;
          overflow: hidden;
          background: #080308;
          color: #fff4ec;
          opacity: 0;
          transition: opacity .9s cubic-bezier(.16,.72,.2,1);
          isolation: isolate;
        }

        .page3--visible { opacity: 1; }

        .page3__backdrop,
        .page3__art {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .page3__backdrop {
          z-index: 0;
          background: #080308;
        }

        .page3__backdrop img {
          position: absolute;
          inset: -10%;
          width: 120%;
          height: 120%;
          object-fit: cover;
          filter: blur(30px) brightness(.34) saturate(1.1);
          transform: scale(1.08);
        }

        .page3__art {
          z-index: 1;
          display: grid;
          place-items: center;
        }

        .page3__image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
          opacity: 0;
          transform: scale(1.035);
          filter: saturate(.88) contrast(1.02) brightness(.58);
          animation:
            page3ImageIn 1.15s cubic-bezier(.16,.72,.2,1) forwards,
            page3SlowMotion 18s ease-in-out 1.15s infinite alternate;
        }

        .page3--visible .page3__image { animation-play-state: running; }

        .page3__shade {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(5,0,9,.08), transparent 28%, transparent 64%, rgba(5,0,9,.38)),
            linear-gradient(90deg, rgba(5,0,9,.12), transparent 25%, transparent 75%, rgba(5,0,9,.12));
        }

        .page3__warmth {
          position: absolute;
          inset: -10%;
          z-index: 4;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 58%, rgba(255,172,119,.10), transparent 30%),
            radial-gradient(circle at 15% 75%, rgba(255,65,92,.06), transparent 22%),
            radial-gradient(circle at 87% 68%, rgba(255,194,137,.06), transparent 24%);
          mix-blend-mode: screen;
          animation: page3Warmth 7s ease-in-out infinite;
        }

        /* Repeated light pass: short cycle, but subtle enough to remain romantic. */
        .page3__light-sweep {
          position: absolute;
          top: -30%;
          left: -48%;
          width: 32%;
          height: 165%;
          z-index: 5;
          pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(255,228,205,.075), transparent);
          transform: rotate(12deg);
          filter: blur(12px);
          opacity: 0;
          animation: page3LightPass 12s cubic-bezier(.22,.65,.25,1) infinite;
        }

        .page3__art::after {
          content: "";
          position: absolute;
          inset: -15%;
          z-index: 2;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 18% 48%,
              rgba(255, 196, 154, .10) 0%,
              rgba(255, 196, 154, .035) 18%,
              transparent 42%
            );
          mix-blend-mode: screen;
          opacity: .55;
          transform: translate3d(-7%, 1%, 0) scale(1.05);
          animation: page3AmbientDrift 18s ease-in-out infinite alternate;
        }

        .page3__vignette {
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
          background: radial-gradient(circle at center, transparent 48%, rgba(4,0,7,.36) 100%);
        }

        .page3__grain {
          position: absolute;
          inset: -50%;
          z-index: 7;
          pointer-events: none;
          opacity: .035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
          animation: page3Grain .28s steps(2) infinite;
        }

        .page3__petals {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          overflow: hidden;
        }

        .page3__petal {
          position: absolute;
          top: -8%;
          display: block;
          border-radius: 72% 28% 70% 30%;
          background: linear-gradient(135deg, rgba(255,112,128,.86), rgba(112,8,29,.74));
          box-shadow: 0 3px 14px rgba(65,0,16,.22);
          opacity: 0;
          animation: page3PetalFall linear infinite;
        }

        .page3__side-note {
          position: absolute;
          z-index: 17;
          top: 50%;
          width: clamp(190px, 14vw, 255px);
          color: rgba(255,239,231,.96);
          font: italic 600 clamp(24px, 2.05vw, 34px)/1.05 "Cormorant Garamond", Georgia, serif;
          letter-spacing: .015em;
          text-align: center;
          text-shadow:
            0 4px 18px rgba(0,0,0,.96),
            0 0 12px rgba(255,218,192,.28),
            0 0 34px rgba(177,36,67,.24);
          opacity: 0;
          transform: translateY(14px);
          animation: page3SideNoteIn 1.5s cubic-bezier(.16,.8,.2,1) .9s forwards;
          pointer-events: none;
        }

        .page3__side-note::before {
          content: "✦";
          display: block;
          margin-bottom: 10px;
          color: rgba(255,205,169,.88);
          font: 15px "Cormorant Garamond", Georgia, serif;
          text-shadow: 0 0 14px rgba(255,188,151,.45);
        }

        .page3__side-note::after {
          content: "";
          display: block;
          width: 58px;
          height: 1px;
          margin: 12px auto 0;
          background: linear-gradient(90deg, transparent, rgba(255,205,169,.72), transparent);
          box-shadow: 0 0 12px rgba(255,174,135,.22);
        }

        .page3__side-note b {
          display: block;
          margin-top: 9px;
          color: #ffd0c2;
          font: 400 clamp(18px, 1.45vw, 24px)/1.1 "Great Vibes", "Cormorant Garamond", cursive;
          letter-spacing: .025em;
          text-shadow: 0 0 18px rgba(255,115,142,.26);
        }

        .page3__side-note--left {
          left: clamp(24px, 10.5vw, 205px);
        }

        .page3__side-note--right {
          right: clamp(24px, 10.5vw, 205px);
        }

        .page3__story {
          position: absolute;
          z-index: 18;
          left: 50%;
          top: 34%;
          width: min(760px, 84vw);
          min-height: 110px;
          transform: translate(-50%, -50%);
          display: grid;
          place-items: center;
          pointer-events: none;
          text-align: center;
        }

        .page3__story-line {
          grid-area: 1 / 1;
          width: min(860px, 88vw);
          margin: 0;
          padding: 0 18px;
          color: #fff8f2;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(25px, 3vw, 43px);
          line-height: 1.2;
          font-style: italic;
          font-weight: 500;
          letter-spacing: .01em;
          text-shadow:
            0 3px 12px rgba(0,0,0,.96),
            0 0 24px rgba(0,0,0,.72);
          opacity: 0;
          transform: translateY(22px) scale(.985);
          filter: blur(9px);
          transition:
            opacity 1.05s ease,
            transform 1.2s cubic-bezier(.16,.8,.2,1),
            filter 1.2s ease;
        }

        .page3__story-line--active {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .page3__bouquet-hit {
          position: absolute;
          z-index: 20;
          left: 29%;
          top: 23%;
          width: 42%;
          height: 49%;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .page3__message-drop {
          position: absolute;
          z-index: 35;
          right: clamp(16px, 2.2vw, 34px);
          bottom: clamp(18px, 3vw, 34px);
          width: min(390px, 88vw);
          min-height: 76px;
          display: grid;
          grid-template-columns: 42px 1fr 18px;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1px solid rgba(255,203,193,.13);
          border-radius: 18px;
          background: rgba(24,8,17,.86);
          box-shadow: 0 18px 55px rgba(0,0,0,.42), 0 0 24px rgba(255,73,104,.18);
          color: #fff2e9;
          text-align: left;
          backdrop-filter: blur(17px) saturate(1.12);
          cursor: pointer;
          animation: page3NotificationDrop .8s cubic-bezier(.16,.82,.24,1) forwards,
                     page3NotificationPulse 2.2s ease-in-out 1s infinite;
        }

        .page3__message-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(165,30,62,.34);
          font-size: 20px;
        }

        .page3__message-body { display: flex; flex-direction: column; gap: 4px; }
        .page3__message-body strong {
          font: 600 13px "Cormorant Garamond", Georgia, serif;
          letter-spacing: .05em;
          text-transform: uppercase;
        }
        .page3__message-body small {
          color: rgba(255,235,224,.78);
          font: 15px/1.25 "Cormorant Garamond", Georgia, serif;
        }
        .page3__message-arrow { font-size: 28px; color: rgba(255,220,205,.72); }

        .page3__letter {
          position: absolute;
          z-index: 40;
          left: 50%;
          top: 50%;
          width: min(600px, 88vw);
          max-height: min(82vh, 760px);
          overflow-y: auto;
          transform: translate(-50%, -50%) scale(.93) rotateX(5deg);
          padding: clamp(34px, 4.5vw, 58px) clamp(27px, 5vw, 58px) 38px;
          color: #4c2632;
          text-align: center;
          background:
            radial-gradient(circle at 15% 10%, rgba(255,255,255,.72), transparent 21%),
            radial-gradient(circle at 90% 90%, rgba(180,78,78,.07), transparent 28%),
            linear-gradient(135deg, #fff8ea 0%, #f7e7d4 48%, #f3dfcc 100%);
          box-shadow: 0 38px 120px rgba(0,0,0,.62), 0 0 70px rgba(255,86,112,.17);
          border-radius: 3px;
          opacity: 0;
          animation: page3LetterIn .95s cubic-bezier(.16,.8,.2,1) forwards;
        }

        .page3__letter::before {
          content: "";
          position: absolute;
          inset: 13px;
          border: 1px solid rgba(119,55,69,.16);
          pointer-events: none;
        }

        .page3__letter::after {
          content: "";
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: 20px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(125,58,73,.18), transparent);
        }

        .page3__letter-flower {
          font-size: 25px;
          margin-bottom: 4px;
          filter: drop-shadow(0 3px 8px rgba(112,20,38,.15));
        }

        .page3__letter-close {
          position: absolute;
          z-index: 2;
          top: 11px;
          right: 15px;
          border: 0;
          background: transparent;
          color: rgba(75,32,46,.55);
          font-size: 25px;
          cursor: pointer;
        }

        .page3__letter-kicker {
          display: block;
          margin-bottom: 9px;
          color: rgba(123,57,72,.67);
          font: 10px Arial, sans-serif;
          letter-spacing: .28em;
          text-transform: uppercase;
        }

        .page3__letter h2 {
          margin: 0;
          color: #772e46;
          font-family: "Great Vibes", "Cormorant Garamond", cursive;
          font-size: clamp(34px, 5vw, 50px);
          font-weight: 400;
          line-height: 1.08;
        }

        .page3__letter-rule {
          margin: 10px auto 17px;
          color: rgba(139,52,73,.55);
          font-family: "Cormorant Garamond", serif;
          font-size: 17px;
        }

        .page3__letter p {
          margin: 12px 0;
          color: rgba(57,27,37,.98);
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.62;
        }

        .page3__letter-lead {
          color: #7a2d45 !important;
          font-size: clamp(22px, 3vw, 27px) !important;
          font-style: italic;
        }

        .page3__letter-whisper {
          color: #6f263e !important;
          font-style: italic;
          font-weight: 600;
          margin-top: 18px !important;
        }

        .page3__letter-signature {
          display: block;
          margin-top: 19px;
          color: rgba(91,39,56,.92);
          font: italic 17px "Cormorant Garamond", Georgia, serif;
          font-weight: 600;
        }

        .page3__letter-progress {
          width: 100px;
          height: 1px;
          margin: 20px auto 10px;
          background: rgba(116,54,70,.13);
          overflow: hidden;
        }

        .page3__letter-progress span {
          display: block;
          width: 0;
          height: 100%;
          background: rgba(130,48,70,.52);
          animation: page3LetterRead 12.5s linear forwards;
        }

        .page3__letter-hint {
          color: rgba(82,40,54,.78);
          font: italic 13px "Cormorant Garamond", Georgia, serif;
        }

        .page3__letter--reading .page3__letter-flower,
        .page3__letter--reading .page3__letter-kicker,
        .page3__letter--reading h2,
        .page3__letter--reading .page3__letter-rule,
        .page3__letter--reading p,
        .page3__letter--reading .page3__letter-signature,
        .page3__letter--reading .page3__letter-hint {
          opacity: 0;
          transform: translateY(14px);
          animation: page3LetterContentIn 1s cubic-bezier(.16,.78,.2,1) forwards;
        }

        .page3__letter--reading .page3__letter-flower { animation-delay: .45s; }
        .page3__letter--reading .page3__letter-kicker { animation-delay: .75s; }
        .page3__letter--reading h2 { animation-delay: 1.05s; }
        .page3__letter--reading .page3__letter-rule { animation-delay: 1.35s; }
        .page3__letter--reading .page3__letter-lead { animation-delay: 1.75s; }

        /* Every paragraph gets its own deliberate reveal beat. */
        .page3__letter--reading .page3__letter-copy--1 { animation-delay: 2.35s; }
        .page3__letter--reading .page3__letter-copy--2 { animation-delay: 3.45s; }
        .page3__letter--reading .page3__letter-copy--3 {
          animation-delay: 4.65s;
          animation-duration: 1.25s;
        }
        .page3__letter--reading .page3__letter-copy--4 { animation-delay: 5.85s; }

        .page3__letter--reading .page3__letter-signature { animation-delay: 6.75s; }
        .page3__letter--reading .page3__letter-hint { animation-delay: 7.65s; }


        .page3__permission-backdrop {
          position: absolute;
          inset: 0;
          z-index: 60;
          display: grid;
          place-items: center;
          background: rgba(5,0,9,.54);
          backdrop-filter: blur(5px);
          animation: page3BackdropIn .7s ease forwards;
        }

        .page3__permission {
          width: min(500px, 86vw);
          padding: 38px 30px 30px;
          border: 1px solid rgba(255,194,180,.18);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(39,10,22,.96), rgba(17,4,12,.97));
          box-shadow: 0 35px 110px rgba(0,0,0,.62), 0 0 55px rgba(255,74,109,.16);
          text-align: center;
          animation: page3PermissionIn .8s cubic-bezier(.16,.8,.2,1) forwards;
        }

        .page3__permission-sparkles {
          display: block;
          margin-bottom: 10px;
          color: #f5b7ad;
          font-size: 15px;
          letter-spacing: .18em;
        }

        .page3__permission-kicker {
          color: rgba(255,213,201,.56);
          font: 9px Arial, sans-serif;
          letter-spacing: .34em;
          text-transform: uppercase;
        }

        .page3__permission h3 {
          margin: 15px 0 12px;
          color: #fff0e6;
          font: italic 500 clamp(26px, 4vw, 36px)/1.2 "Cormorant Garamond", Georgia, serif;
        }

        .page3__permission p {
          margin: 0;
          color: rgba(255,229,218,.74);
          font: 16px/1.6 "Cormorant Garamond", Georgia, serif;
        }

        .page3__permission button {
          margin-top: 22px;
          padding: 14px 25px;
          border: 1px solid rgba(255,191,178,.28);
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(153,34,64,.8), rgba(93,13,38,.82));
          color: #fff1e9;
          font: 600 11px Arial, sans-serif;
          letter-spacing: .12em;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,.3), 0 0 24px rgba(255,65,105,.14);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .page3__permission button:hover {
          transform: translateY(-2px) scale(1.015);
          box-shadow: 0 14px 35px rgba(0,0,0,.35), 0 0 34px rgba(255,65,105,.22);
        }

        .page3__permission-foot {
          display: block;
          margin-top: 13px;
          color: rgba(255,213,201,.38);
          font: italic 12px "Cormorant Garamond", Georgia, serif;
        }

        .page3__heart {
          position: absolute;
          inset: 0;
          z-index: 80;
          display: grid;
          place-items: center;
          background: radial-gradient(circle at center, rgba(112,7,40,.28), rgba(3,0,8,.98) 76%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 1.2s ease;
        }

        .page3--heart .page3__heart { opacity: 1; }

        .page3__heart-aura {
          position: absolute;
          width: min(40vw, 500px);
          height: min(40vw, 500px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,67,111,.36), transparent 68%);
          filter: blur(17px);
          transform: scale(.2);
          opacity: 0;
          transition: transform 3.1s cubic-bezier(.12,.78,.16,1), opacity 1.2s ease;
        }

        .page3--heart .page3__heart-aura { transform: scale(1.45); opacity: 1; }

        .page3__heart-symbol {
          color: rgba(255,222,210,.98);
          font-size: min(28vw, 320px);
          line-height: 1;
          transform: scale(.08);
          opacity: 0;
          text-shadow: 0 0 25px rgba(255,81,119,.95), 0 0 100px rgba(255,46,90,.5);
          transition: transform 3s cubic-bezier(.12,.78,.16,1), opacity 1.1s ease .35s;
        }

        .page3--heart .page3__heart-symbol { transform: scale(1); opacity: 1; }

        .page3__heart-copy {
          position: absolute;
          bottom: 12%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
          color: rgba(255,235,220,.92);
          text-align: center;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 1.2s ease 1.8s, transform 1.2s ease 1.8s;
        }

        .page3--heart .page3__heart-copy { opacity: 1; transform: translateY(0); }
        .page3__heart-copy span { font: 10px Arial, sans-serif; letter-spacing: .3em; text-transform: uppercase; }
        .page3__heart-copy strong { font: italic 400 clamp(22px, 3vw, 34px) "Cormorant Garamond", Georgia, serif; }

        @keyframes page3ImageIn {
          0% { opacity: 0; transform: scale(1.06); filter: saturate(.72) brightness(.34) blur(3px); }
          55% { opacity: .78; }
          100% { opacity: .98; transform: scale(1.035); filter: saturate(.96) contrast(1.03) brightness(.83); }
        }

        @keyframes page3SlowMotion {
          0% { transform: scale(1.035) translate3d(-.35%, .2%, 0); }
          50% { transform: scale(1.065) translate3d(.25%, -.15%, 0); }
          100% { transform: scale(1.09) translate3d(.4%, .28%, 0); }
        }

        @keyframes page3Warmth {
          0%,100% { opacity: .55; transform: scale(1); }
          50% { opacity: .86; transform: scale(1.025); }
        }

        @keyframes page3LightPass {
          0%, 24% {
            transform: translateX(-28vw) rotate(12deg);
            opacity: 0;
          }
          34% {
            opacity: .16;
          }
          50% {
            opacity: .28;
          }
          66% {
            opacity: .12;
          }
          82%, 100% {
            transform: translateX(250vw) rotate(12deg);
            opacity: 0;
          }
        }

        @keyframes page3Grain {
          0% { transform: translate3d(0,0,0); }
          25% { transform: translate3d(-2%,1%,0); }
          50% { transform: translate3d(1%,-2%,0); }
          75% { transform: translate3d(2%,2%,0); }
          100% { transform: translate3d(-1%,-1%,0); }
        }

        @keyframes page3PetalFall {
          0% { transform: translate3d(0,-10vh,0) rotate(var(--rotate)) scale(.72); opacity: 0; }
          10% { opacity: .52; }
          55% { opacity: .44; }
          100% { transform: translate3d(var(--drift),112vh,0) rotate(calc(var(--rotate) + 430deg)) scale(1); opacity: 0; }
        }

        @keyframes page3NotificationDrop {
          0% { transform: translate3d(120%, 0, 0); opacity: 0; }
          65% { transform: translate3d(-8px, 0, 0); opacity: 1; }
          100% { transform: translate3d(0, 0, 0); opacity: 1; }
        }

        @keyframes page3NotificationPulse {
          0%,100% { box-shadow: 0 18px 55px rgba(0,0,0,.42), 0 0 0 rgba(255,73,104,0); }
          50% { box-shadow: 0 18px 55px rgba(0,0,0,.42), 0 0 0 7px rgba(255,73,104,.07), 0 0 28px rgba(255,73,104,.2); }
        }

        @keyframes page3LetterIn {
          from { opacity: 0; transform: translate(-50%, -46%) scale(.93) rotateX(5deg); filter: blur(6px); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1) rotateX(0); filter: blur(0); }
        }

        @keyframes page3LetterRead { from { width: 0; } to { width: 100%; } }

        @keyframes page3SideNoteIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes page3LetterContentIn {
          from {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes page3AmbientDrift {
          0% {
            transform: translate3d(-7%, 1%, 0) scale(1.05);
            opacity: .38;
          }
          50% {
            transform: translate3d(3%, -1%, 0) scale(1.09);
            opacity: .58;
          }
          100% {
            transform: translate3d(8%, 2%, 0) scale(1.06);
            opacity: .42;
          }
        }
        @keyframes page3BackdropIn { from { opacity: 0; } to { opacity: 1; } }

        @keyframes page3PermissionIn {
          from { opacity: 0; transform: translateY(25px) scale(.93); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @media (max-width: 700px) {
          .page3__image { object-fit: cover; }
          .page3__backdrop { display: none; }
          .page3__story { top: 35%; width: 88vw; }
          .page3__story-line { font-size: 25px; line-height: 1.12; }
          .page3__side-note { display: none; }
          .page3__bouquet-hit { left: 12%; top: 25%; width: 76%; height: 44%; }
          .page3__message-drop { right: 14px; bottom: 16px; width: calc(100vw - 28px); }
          .page3__letter { width: 84vw; max-height: 84vh; padding: 32px 22px 30px; }
          .page3__letter p { font-size: 15px; line-height: 1.55; }
          .page3__permission { width: 82vw; padding: 32px 22px 25px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .page3__image,
          .page3__warmth,
          .page3__light-sweep,
          .page3__grain,
          .page3__petal { animation: none; }
          .page3__image { opacity: .97; transform: none; filter: none; }
        }
      `}</style>
    </section>
  );
}

export default StaticBouquetScene;
