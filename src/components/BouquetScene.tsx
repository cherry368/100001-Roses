import { useEffect, useState } from "react";

// ═══════════════════════════════════════════════════════════
//  BOUQUET SCENE — Reveal text overlays and exploration hints
//  Shows the "100,001 ROSES" reveal and zoom level hints
// ═══════════════════════════════════════════════════════════

interface Props {
  phase: "reveal" | "explore";
  zoomHint: string;
  onPickRandom: () => void;
  onZoomOutHeart: () => void;
}

export function BouquetScene({ phase, zoomHint, onPickRandom, onZoomOutHeart }: Props) {
  const [revealStep, setRevealStep] = useState(0);
  const [revealDone, setRevealDone] = useState(false);

  const revealTexts = [
    "Okay...",
    "I told you I went overboard.",
    "🌹 100,001 ROSES 🌹",
    "Yes. I actually made you 100,001.",
    "One rose wasn't dramatic enough. 😂",
  ];

  useEffect(() => {
    if (phase !== "reveal") return;

    setRevealStep(0);
    const timers: number[] = [];
    revealTexts.forEach((_, i) => {
      timers.push(window.setTimeout(() => setRevealStep(i + 1), i * 2000));
    });
    timers.push(
      window.setTimeout(() => {
        setRevealDone(true);
      }, revealTexts.length * 2000 + 500)
    );

    return () => timers.forEach(clearTimeout);
  }, [phase]);

  if (phase === "reveal") {
    return (
      <div style={styles.overlay}>
        <div style={styles.revealWrap}>
          {revealTexts.map((text, i) => (
            <p
              key={i}
              style={{
                ...styles.revealText,
                opacity: revealStep === i + 1 || (revealDone && i === revealTexts.length - 1) ? 1 : 0,
                transform: revealStep === i + 1 ? "translateY(0)" : "translateY(20px)",
                fontSize:
                  i === 2 ? "clamp(1.8rem, 6vw, 3.5rem)" : "clamp(1.2rem, 3.5vw, 1.8rem)",
                color: i === 2 ? "#ffd700" : "#fff8e7",
                textShadow:
                  i === 2
                    ? "0 0 30px rgba(255,215,0,0.5), 0 2px 15px rgba(0,0,0,0.6)"
                    : "0 2px 10px rgba(0,0,0,0.6)",
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    );
  }

  // Explore phase
  return (
    <div style={styles.overlay}>
      {/* Zoom hint */}
      <div style={styles.hintWrap}>
        <p
          key={zoomHint}
          style={styles.hintText}
        >
          {zoomHint}
        </p>
      </div>

      {/* Bottom controls */}
      <div style={styles.controls}>
        <button style={styles.ctrlBtn} onClick={onPickRandom}>
          Pick a Rose 🌹
        </button>
        <button style={styles.ctrlBtnHeart} onClick={onZoomOutHeart}>
          See the whole bouquet 💝
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 30,
    pointerEvents: "none",
  },
  revealWrap: {
    textAlign: "center",
    position: "relative",
    height: "200px",
    width: "100%",
    padding: "0 1rem",
  },
  revealText: {
    position: "absolute",
    width: "100%",
    fontFamily: "var(--font-hand)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
    margin: 0,
  },
  hintWrap: {
    position: "absolute",
    top: "8%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    pointerEvents: "none",
  },
  hintText: {
    fontFamily: "var(--font-hand)",
    fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
    color: "#fff8e7",
    textShadow: "0 2px 10px rgba(0,0,0,0.6)",
    opacity: 0.8,
    animation: "fadeIn 1s ease",
  },
  controls: {
    position: "absolute",
    bottom: "max(1.5rem, env(safe-area-inset-bottom))",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "0.8rem",
    flexWrap: "wrap" as const,
    justifyContent: "center",
    pointerEvents: "auto",
    padding: "0 1rem",
  },
  ctrlBtn: {
    fontFamily: "var(--font-hand)",
    fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
    padding: "0.6rem 1.3rem",
    borderRadius: "999px",
    background: "rgba(230,57,115,0.25)",
    color: "#fff8e7",
    border: "1.5px solid rgba(230,57,115,0.4)",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
    minHeight: "44px",
    touchAction: "manipulation",
    transition: "transform 0.3s ease, background 0.3s ease",
  },
  ctrlBtnHeart: {
    fontFamily: "var(--font-hand)",
    fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
    padding: "0.6rem 1.3rem",
    borderRadius: "999px",
    background: "rgba(255,215,0,0.2)",
    color: "#ffd700",
    border: "1.5px solid rgba(255,215,0,0.4)",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
    minHeight: "44px",
    touchAction: "manipulation",
    transition: "transform 0.3s ease, background 0.3s ease",
  },
};
