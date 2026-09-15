import { useCallback, useState } from "react";

export function useParallax(strength = 18) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    const target = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - target.left) / target.width - 0.5) * strength;
    const y = ((event.clientY - target.top) / target.height - 0.5) * strength;
    setOffset({ x, y });
  }, [strength]);

  const reset = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  return { offset, handlePointerMove, reset };
}
