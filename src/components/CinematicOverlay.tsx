import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function CinematicOverlay({ children }: Props) {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, transparent 45%, rgba(0,0,0,.34))" }} />
      <div style={{ position: "relative", width: "100%", height: "100%", pointerEvents: "none" }}>{children}</div>
    </div>
  );
}
