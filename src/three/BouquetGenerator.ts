import * as THREE from "three";
import { getHighlightedRoseIds } from "../data/specialRoses";

// ═══════════════════════════════════════════════════════════
// BOUQUET GENERATOR
//
// Generates the original 100,001-rose bouquet and the target
// heart formation used by the Page 4 cinematic morph.
//
// Important:
// - The heart is NOT vertically flipped.
// - The complete heart silhouette is generated.
// - The same deterministic RNG keeps bouquet/heart pairing stable.
// - The shape is centered for the Page 4 camera.
// ═══════════════════════════════════════════════════════════

export interface RoseData {
  positions: Float32Array;
  rotations: Float32Array;
  scales: Float32Array;
  colors: Float32Array;
  heartPositions: Float32Array;
}

function mulberry32(seed: number): () => number {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;

    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateBouquetPositions(count: number): RoseData {
  const rng = mulberry32(42);

  const positions = new Float32Array(count * 3);
  const heartPositions = new Float32Array(count * 3);
  const rotations = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const colors = new Float32Array(count * 3);

  const highlighted = getHighlightedRoseIds();

  // =========================================================
  // ORIGINAL BOUQUET
  // =========================================================

  for (let i = 0; i < count; i++) {
    const theta = rng() * Math.PI * 2;
    const phi = Math.acos(2 * rng() - 1);
    const radius = Math.pow(rng(), 0.5) * 18;

    let x = radius * Math.sin(phi) * Math.cos(theta);
    let y = radius * Math.cos(phi) * 0.7 + 4;
    let z = radius * Math.sin(phi) * Math.sin(theta);

    // Narrow the lower part slightly so the bouquet reads as a
    // fuller flower arrangement rather than a perfect sphere.
    const narrowFactor =
      1 - Math.max(0, (4 - y) / 8) * 0.6;

    x *= narrowFactor;
    z *= narrowFactor;

    x += (rng() - 0.5) * 1.5;
    y += (rng() - 0.5) * 1.0;
    z += (rng() - 0.5) * 1.5;

    const index = i * 3;

    positions[index] = x;
    positions[index + 1] = y;
    positions[index + 2] = z;

    rotations[index] = (rng() - 0.5) * 0.8;
    rotations[index + 1] = rng() * Math.PI * 2;
    rotations[index + 2] = (rng() - 0.5) * 0.8;

    let scale = 0.6 + rng() * 0.5;

    if (highlighted.has(i + 1)) {
      scale *= 1.35;
    }

    scales[i] = scale;

    // Rose palette.
    const variation = rng();

    let r: number;
    let g: number;
    let b: number;

    if (highlighted.has(i + 1)) {
      r = 1.0;
      g = 0.85;
      b = 0.3;
    } else if (variation < 0.5) {
      r = 0.78 + rng() * 0.15;
      g = 0.08 + rng() * 0.1;
      b = 0.15 + rng() * 0.1;
    } else if (variation < 0.8) {
      r = 0.9 + rng() * 0.1;
      g = 0.25 + rng() * 0.15;
      b = 0.45 + rng() * 0.15;
    } else {
      r = 0.85 + rng() * 0.1;
      g = 0.12 + rng() * 0.1;
      b = 0.35 + rng() * 0.2;
    }

    colors[index] = r;
    colors[index + 1] = g;
    colors[index + 2] = b;
  }

  // =========================================================
  // HEART TARGET
  // =========================================================

  generateHeartPositions(count, heartPositions, rng);

  return {
    positions,
    rotations,
    scales,
    colors,
    heartPositions,
  };
}

// ═══════════════════════════════════════════════════════════
// HEART GENERATOR
//
// Canonical implicit heart:
//
//   (x² + y² - 1)³ - x²y³ <= 0
//
// We deliberately DO NOT negate Y. That was the source of the
// previous reversed/inverted Page 4 heart.
// ═══════════════════════════════════════════════════════════

function isInsideHeart(x: number, y: number): boolean {
  const value =
    Math.pow(x * x + y * y - 1, 3) -
    x * x * Math.pow(y, 3);

  return value <= 0;
}

function generateHeartPositions(
  count: number,
  out: Float32Array,
  rng: () => number,
): void {
  // World-space size of the finished heart.
  // This gives enough room for the two lobes and the lower point
  // while keeping the whole shape inside the Page 4 camera frame.
  const xScale = 14.5;
  const yScale = 8.0;
  const yOffset = 5.0;

  let index = 0;
  let attempts = 0;

  // The implicit heart occupies approximately [-1, 1] in both
  // axes. Give the rejection sampler a small margin.
  const minX = -1.15;
  const maxX = 1.15;
  const minY = -1.15;
  const maxY = 1.15;

  const maxAttempts = Math.max(count * 24, 10000);

  while (index < count && attempts < maxAttempts) {
    attempts++;

    const x =
      minX + rng() * (maxX - minX);
    const y =
      minY + rng() * (maxY - minY);

    if (!isInsideHeart(x, y)) {
      continue;
    }

    const radial = Math.min(
      1,
      Math.sqrt(
        (x / 1.05) ** 2 +
          (y / 1.05) ** 2,
      ),
    );

    // A shallow depth keeps the heart readable from the front while
    // preventing it from looking like a completely flat sheet.
    const depth =
      (rng() - 0.5) *
      (3.0 - radial * 1.0);

    const outIndex = index * 3;

    out[outIndex] = x * xScale;
    out[outIndex + 1] = y * yScale + yOffset;
    out[outIndex + 2] = depth;

    index++;
  }

  // =========================================================
  // DETERMINISTIC FALLBACK
  // =========================================================
  // Extremely unlikely with the generous attempt limit, but this
  // guarantees that all 100,001 instances always receive a target.
  // The parametric heart is also useful as a clean silhouette.

  while (index < count) {
    const t =
      (index / Math.max(1, count - 1)) *
      Math.PI * 2;

    const x = Math.sin(t) ** 3;
    const y =
      0.82 * Math.cos(t) -
      0.30 * Math.cos(2 * t) -
      0.12 * Math.cos(3 * t) -
      0.06 * Math.cos(4 * t);

    const outIndex = index * 3;

    out[outIndex] = x * xScale * 1.02;
    out[outIndex + 1] = y * yScale + yOffset;
    out[outIndex + 2] = (rng() - 0.5) * 1.8;

    index++;
  }
}
