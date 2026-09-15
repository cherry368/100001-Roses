import { getRoseMessage, isSpecialRose } from "../data/specialRoses";
import { getUniqueRoseMessage } from "../data/roseMessages";

interface Props {
  roseId: number;
  isRandom: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  onPickAnother?: () => void;
}

export function RoseInfo({
  roseId,
  isRandom: _isRandom,
  onClose,
  onPrevious,
  onNext,
  onPickAnother,
}: Props) {
  const specialMessage = getRoseMessage(roseId);
  const message = specialMessage || getUniqueRoseMessage(roseId);
  const isSpecial = isSpecialRose(roseId);

  return (
    <div className="rose-info-overlay">
      <div className="rose-info-panel" role="dialog" aria-label={`Rose ${roseId} note`}>
        <button className="rose-info-close" type="button" onClick={onClose} aria-label="Close rose note">
          ×
        </button>

        <div className="rose-info-glow" aria-hidden="true" />

        <div className="rose-info-rose-art" aria-hidden="true">
          <div className="rose-art-flower">🌹</div>
          <div className="rose-art-leaves">✦</div>
        </div>

        <div className="rose-info-content">
          <div className="rose-info-pill">Rose #{roseId.toLocaleString("en-US")}</div>
          <div className="rose-info-count">1 of 100,001 roses</div>

          <div className="rose-note">
            <span className="rose-note-pin">♡</span>
            <p>{message}</p>
            <span className="rose-note-heart">♡</span>
          </div>

          {isSpecial && <div className="rose-special">✦ This one was hidden for you ✦</div>}

          <div className="rose-info-nav">
            <button type="button" onClick={onPrevious} disabled={!onPrevious} aria-label="Previous rose">
              ‹
            </button>
            <span>{roseId.toLocaleString("en-US")} / 100,001</span>
            <button type="button" onClick={onNext} disabled={!onNext} aria-label="Next rose">
              ›
            </button>
          </div>

          {onPickAnother && (
            <button className="rose-pick-button" type="button" onClick={onPickAnother}>
              ♥ Pick another rose
            </button>
          )}
        </div>
      </div>

      <style>{`
        .rose-info-overlay {
          position: fixed;
          inset: 0;
          z-index: 90;
          pointer-events: none;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: clamp(18px, 4vw, 54px);
        }

        .rose-info-panel {
          position: relative;
          width: min(460px, 90vw);
          max-height: min(760px, 88vh);
          overflow: auto;
          pointer-events: auto;
          border: 1px solid rgba(255, 215, 150, .42);
          border-radius: 28px;
          padding: 24px;
          color: #fff7ed;
          background:
            linear-gradient(145deg, rgba(38, 7, 16, .93), rgba(17, 7, 20, .91)),
            radial-gradient(circle at 30% 15%, rgba(255, 92, 130, .25), transparent 50%);
          box-shadow: 0 30px 100px rgba(0,0,0,.62), 0 0 55px rgba(255,75,120,.16);
          backdrop-filter: blur(18px);
          animation: rosePanelIn .65s cubic-bezier(.16,.72,.2,1) both;
        }

        .rose-info-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 3;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255, 215, 150, .4);
          background: rgba(0,0,0,.22);
          color: #fff6ec;
          font-size: 28px;
          line-height: 1;
          cursor: pointer;
        }

        .rose-info-glow {
          position: absolute;
          left: 50%;
          top: 40px;
          width: 240px;
          height: 240px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 65, 105, .34), transparent 68%);
          filter: blur(22px);
          pointer-events: none;
        }

        .rose-info-rose-art {
          position: relative;
          height: 220px;
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: 20px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,80,115,.2), transparent 45%),
            linear-gradient(145deg, rgba(80,12,30,.75), rgba(17,8,20,.2));
        }

        .rose-art-flower {
          position: relative;
          z-index: 1;
          font-size: clamp(100px, 20vw, 160px);
          filter: drop-shadow(0 12px 30px rgba(255, 30, 80, .35));
          animation: roseFloat 4s ease-in-out infinite;
        }

        .rose-art-leaves {
          position: absolute;
          bottom: 18px;
          color: rgba(255,215,150,.7);
          font-size: 36px;
        }

        .rose-info-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 18px 8px 4px;
        }

        .rose-info-pill {
          display: inline-flex;
          padding: 7px 20px;
          border: 1px solid rgba(255,215,150,.55);
          border-radius: 999px;
          color: #ffe2bd;
          font: 600 15px/1.2 Georgia, serif;
          letter-spacing: .05em;
          background: rgba(0,0,0,.2);
        }

        .rose-info-count {
          margin-top: 8px;
          color: rgba(255,247,237,.62);
          font: italic 15px/1.3 Georgia, serif;
        }

        .rose-note {
          position: relative;
          margin: 18px auto 10px;
          padding: 28px 28px 24px;
          color: #3c2822;
          background: linear-gradient(145deg, #fff4dd, #f2d7bc);
          box-shadow: 0 15px 35px rgba(0,0,0,.35);
          transform: rotate(-1.2deg);
          clip-path: polygon(0 2%, 97% 0, 100% 96%, 3% 100%);
        }

        .rose-note-pin,
        .rose-note-heart {
          color: #a33b53;
          font-size: 24px;
        }

        .rose-note-pin {
          display: block;
          margin-bottom: 10px;
        }

        .rose-note p {
          margin: 0;
          white-space: pre-line;
          font: 500 clamp(17px, 3vw, 22px)/1.42 Georgia, serif;
          font-style: italic;
        }

        .rose-note-heart {
          display: block;
          margin-top: 12px;
        }

        .rose-special {
          color: #ffd88d;
          font: italic 14px Georgia, serif;
        }

        .rose-info-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 18px;
          color: rgba(255,247,237,.75);
          font: 15px Georgia, serif;
        }

        .rose-info-nav button {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,215,150,.45);
          background: rgba(0,0,0,.18);
          color: #ffe8c9;
          font-size: 32px;
          cursor: pointer;
        }

        .rose-info-nav button:disabled {
          opacity: .35;
          cursor: default;
        }

        .rose-pick-button {
          margin-top: 16px;
          padding: 11px 24px;
          border-radius: 999px;
          border: 1px solid rgba(255,215,150,.55);
          background: rgba(125,20,48,.42);
          color: #fff0df;
          font: 600 15px Georgia, serif;
          cursor: pointer;
        }

        @keyframes rosePanelIn {
          from { opacity: 0; transform: translateX(38px) scale(.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes roseFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        @media (max-width: 760px) {
          .rose-info-overlay {
            align-items: flex-end;
            justify-content: center;
            padding: 12px;
          }
          .rose-info-panel {
            width: min(520px, 96vw);
            max-height: 82vh;
            padding: 16px;
          }
          .rose-info-rose-art { height: 145px; }
          .rose-art-flower { font-size: 95px; }
        }
      `}</style>
    </div>
  );
}
