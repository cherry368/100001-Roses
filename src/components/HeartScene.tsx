interface Props {
  onContinue: () => void;
}

/** Static heart presentation placeholder for the final cinematic stage. */
export function HeartScene({ onContinue }: Props) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center", color: "white" }}>
      <div>
        <div style={{ fontSize: "clamp(100px, 20vw, 220px)", lineHeight: 1 }}>❤️</div>
        <h1 style={{ fontFamily: "Georgia, serif" }}>For you. 🌹</h1>
        <button onClick={onContinue}>One last thing… 💝</button>
      </div>
    </div>
  );
}
