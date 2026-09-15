import { useEffect, useRef } from "react";

export function useCinematic(active: boolean, onComplete: () => void, delay: number) {
  const completeRef = useRef(onComplete);
  completeRef.current = onComplete;

  useEffect(() => {
    if (!active) return;
    const timer = window.setTimeout(() => completeRef.current(), delay);
    return () => window.clearTimeout(timer);
  }, [active, delay]);
}
