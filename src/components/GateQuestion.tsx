import type { CSSProperties } from "react";

interface Props {
  phase: "question" | "scared";
  onYes: () => void;
  onScared: () => void;
  onScaredConfirm: () => void;
}

/** Dedicated gate-question UI. Kept separate so GardenScene stays focused on presentation. */
export function GateQuestion({ phase, onYes, onScared, onScaredConfirm }: Props) {
  const button: CSSProperties = {
    border: "1px solid rgba(255,220,235,.6)",
    borderRadius: 999,
    padding: "12px 20px",
    cursor: "pointer",
    background: "rgba(80,15,50,.7)",
    color: "#fff",
  };

  if (phase === "scared") {
    return (
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", pointerEvents: "none" }}>
        <div style={{ textAlign: "center", pointerEvents: "auto" }}>
          <h2 style={{ color: "#fff", fontFamily: "Georgia, serif" }}>Too late. 😂</h2>
          <p style={{ color: "#ffe4f0" }}>You came this far. There is no escaping now. 👀🌹</p>
          <button style={button} onClick={onScaredConfirm}>Open the gates 🌹</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", pointerEvents: "none" }}>
      <div style={{ textAlign: "center", pointerEvents: "auto" }}>
        <h2 style={{ color: "#fff", fontFamily: "Georgia, serif" }}>Do you want to open the gates? 👀🌹</h2>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={button} onClick={onYes}>YES, OPEN THEM! ❤️</button>
          <button style={button} onClick={onScared}>Maybe... I'm scared 😂</button>
        </div>
      </div>
    </div>
  );
}
