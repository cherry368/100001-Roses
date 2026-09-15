export function ParticleLayer({ count = 30 }: { count?: number }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} style={{ position: "absolute", left: `${(i * 53) % 100}%`, top: `${(i * 29) % 100}%`, width: 3, height: 3, borderRadius: "50%", background: "rgba(255,210,120,.8)", boxShadow: "0 0 10px rgba(255,210,120,.8)", animation: `particleFloat ${4 + (i % 4)}s ease-in-out ${-(i % 5)}s infinite alternate` }} />
      ))}
    </div>
  );
}
