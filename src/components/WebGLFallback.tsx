import { config } from "../config/birthday";

// ═══════════════════════════════════════════════════════════
//  WEBGL FALLBACK — Simple 2D version when WebGL is unavailable
// ═══════════════════════════════════════════════════════════

interface Props {
  onReveal: () => void;
}

export function WebGLFallback({ onReveal }: Props) {
  return (
    <div style={styles.scene}>
      <div style={styles.paper}>
        <div style={styles.letter}>
          {config.letterText.split("\n").map((line, i) => (
            <p key={i} style={styles.line}>
              {line || "\u00A0"}
            </p>
          ))}
          <button style={styles.btn} onClick={onReveal}>
            💝 Reveal the Surprise
          </button>
        </div>
      </div>
      {revealed && (
        <div style={styles.reveal}>
          <p style={styles.revealTitle}>🌹 100,001 ROSES 🌹</p>
          <p style={styles.revealSub}>
            {config.finalMessage.split("\n").map((line, i) => (
              <span key={i} style={{ display: "block", minHeight: "1.5em" }}>
                {line || "\u00A0"}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

let revealed = false;

export function WebGLFallbackWrapper() {
  const [state, setState] = useState<"letter" | "reveal">("letter");

  return (
    <div style={styles.scene}>
      {state === "letter" ? (
        <div style={styles.paper}>
          <div style={styles.letter}>
            {config.letterText.split("\n").map((line, i) => (
              <p key={i} style={styles.line}>
                {line || "\u00A0"}
              </p>
            ))}
            <button
              style={styles.btn}
              onClick={() => setState("reveal")}
            >
              💝 Reveal the Surprise
            </button>
          </div>
        </div>
      ) : (
        <div style={styles.reveal}>
          <div style={styles.heart}>❤️</div>
          <p style={styles.revealTitle}>🌹 100,001 ROSES 🌹</p>
          <div style={styles.finalMsg}>
            {config.finalMessage.split("\n").map((line, i) => (
              <p key={i} style={{ ...styles.line, color: "#3a2a1a" }}>
                {line || "\u00A0"}
              </p>
            ))}
          </div>
          <button
            style={styles.btn}
            onClick={() => setState("letter")}
          >
            Explore Again 🌹
          </button>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";

const styles: Record<string, React.CSSProperties> = {
  scene: {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(ellipse at center, #4a1942 0%, #2a1040 60%, #1a0a1f 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
    padding: "1rem",
  },
  paper: {
    background: "linear-gradient(135deg, #fdf6e3, #f5ead0)",
    borderRadius: "8px",
    padding: "2rem",
    maxWidth: "500px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    transform: "rotate(-1deg)",
  },
  letter: {
    fontFamily: "var(--font-hand)",
    color: "#3a2a1a",
    lineHeight: 1.6,
    fontSize: "1.2rem",
  },
  line: {
    minHeight: "1.5em",
    margin: 0,
  },
  btn: {
    fontFamily: "var(--font-hand)",
    fontSize: "1.3rem",
    padding: "0.7rem 1.8rem",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #e63973, #ff3b8d)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "1.5rem",
    boxShadow: "0 4px 20px rgba(230,57,115,0.4)",
  },
  reveal: {
    textAlign: "center",
    maxWidth: "500px",
  },
  heart: {
    fontSize: "5rem",
    animation: "float 3s ease-in-out infinite",
  },
  revealTitle: {
    fontFamily: "var(--font-hand)",
    fontSize: "clamp(1.8rem, 6vw, 3rem)",
    color: "#ffd700",
    textShadow: "0 0 30px rgba(255,215,0,0.5)",
    margin: "1rem 0",
  },
  finalMsg: {
    background: "rgba(253,246,227,0.95)",
    borderRadius: "8px",
    padding: "1.5rem",
    marginTop: "1.5rem",
    fontFamily: "var(--font-hand)",
    fontSize: "1.2rem",
    lineHeight: 1.6,
    transform: "rotate(-1deg)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
  },
};
