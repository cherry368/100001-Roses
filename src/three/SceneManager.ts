import type { QualityLevel } from "../types";

// ═══════════════════════════════════════════════════════════
//  SCENE MANAGER — Quality detection and device optimization
//  Detects mobile, GPU quality, and sets appropriate quality
// ═══════════════════════════════════════════════════════════

export function detectQuality(): QualityLevel {
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);
  const isTablet = /iPad|Tablet|PlayBook|Silk/i.test(navigator.userAgent) || (navigator.userAgent.includes("Android") && navigator.userAgent.includes("Mobile") === false);
  const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 2;

  if (isMobile && !isTablet) {
    if (lowMemory || (isLowEnd && navigator.hardwareConcurrency <= 2)) return "LOW";
    return "MEDIUM";
  }

  if (isTablet) {
    if (lowMemory) return "LOW";
    return "MEDIUM";
  }

  if (isLowEnd && lowMemory) return "MEDIUM";

  return "HIGH";
}

export function isMobile(): boolean {
  return /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
