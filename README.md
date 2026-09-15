# 100,001 Roses — Static Cinematic Build

## Experience flow
LOADING → LETTER → REVEAL_TRANSITION → GARDEN → GATE_APPROACH → GATE_QUESTION → GATE_OPENING → BOUQUET_REVEAL → BOUQUET_EXPLORE → ROSE_SELECTED → HEART_REVEAL → FINAL_MESSAGE

## Structure
- `src/components` — React presentation and interaction components
- `src/animations` — centralized animation timing/tuning
- `src/hooks` — reusable interaction/cinematic hooks
- `src/three` — garden, gate, particles and camera infrastructure
- `src/data` — special roses and rose messages
- `src/config` — birthday content/configuration
- `src/styles` — global styling and animation keyframes
- `public/assets` — cinematic image/audio assets grouped by scene

## Main rendering strategy
The garden/gate remains Three.js. The hero bouquet uses static cinematic artwork plus lightweight motion, parallax, petals and particles. This avoids creating 100,001 DOM or individual 3D flower objects while preserving the 100,001-rose story.

## Run
```bash
npm install
npm run dev
```
