import { useEffect, useState } from "react";

// ═══════════════════════════════════════════════════════════
//  LOADING SCREEN — Short elegant loading with floating petals
// ═══════════════════════════════════════════════════════════

interface Props {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2000);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.random() * 15));
    }, 200);

    const done = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(onComplete, 500);
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(done);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div style={styles.overlay}>
      {/* Floating petals */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.petal,
            left: `${10 + i * 11}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}

      <div style={styles.content}>
        {phase < 2 ? (
          <p style={styles.text}>
            {phase === 0 ? "Preparing something slightly ridiculous... 🌹" : "Almost there..."}
          </p>
        ) : (
          <p style={styles.text}>Ready! 🌹</p>
        )}

        {/* Progress bar */}
        <div style={styles.barWrap}>
          <div
            style={{
              ...styles.bar,
              width: `${progress}%`,
            }}
          />
        </div>
        <p style={styles.percent}>{Math.round(progress)}%</p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "radial-gradient(ellipse at center, #2a1040 0%, #1a0a1f 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    overflow: "hidden",
  },
  content: {
    textAlign: "center",
    zIndex: 2,
  },
  text: {
    fontFamily: "var(--font-hand)",
    fontSize: "clamp(1.3rem, 4vw, 2rem)",
    color: "#ffb085",
    marginBottom: "1.5rem",
    opacity: 0.9,
  },
  barWrap: {
    width: "min(280px, 60vw)",
    height: "3px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "999px",
    overflow: "hidden",
    margin: "0 auto",
  },
  bar: {
    height: "100%",
    background: "linear-gradient(90deg, #e63973, #ffd700)",
    borderRadius: "999px",
    transition: "width 0.3s ease",
  },
  percent: {
    fontFamily: "var(--font-serif)",
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.4)",
    marginTop: "0.5rem",
  },
  petal: {
    position: "absolute",
    bottom: "-20px",
    width: "14px",
    height: "14px",
    borderRadius: "50% 0 50% 50%",
    background: "linear-gradient(135deg, #e63973, #ff3b8d)",
    opacity: 0.5,
    animation: "float 4s ease-in-out infinite",
  transform: "rotate(45deg)",
  zIndex: 1,
  filter: "blur(0.5px)",
  boxShadow: "0 0 10px rgba(230,57,115,0.3)",
  top: "auto",
  left: "0",
  animationName: "petalFall",
  } as React.CSSProperties,
};
