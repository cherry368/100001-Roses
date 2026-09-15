export function PetalLayer({ count = 18 }: { count?: number }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} style={{ position: "absolute", left: `${(i * 37) % 100}%`, top: `${-10 - ((i * 19) % 30)}%`, fontSize: `${14 + (i % 4) * 5}px`, animation: `rosePetalFall ${6 + (i % 5)}s linear ${-(i % 6)}s infinite` }}>🌹</span>
      ))}
    </div>
  );
}
