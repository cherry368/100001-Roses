// Scene states for the experience state machine
export type SceneState =
  | "LOADING"
  | "LETTER"
  | "REVEAL_TRANSITION"
  | "GARDEN"
  | "GATE_APPROACH"
  | "GATE_QUESTION"
  | "GATE_OPENING"
  | "BOUQUET_REVEAL"
  | "BOUQUET_EXPLORE"
  | "ROSE_SELECTED"
  | "HEART_REVEAL"
  | "FINAL_MESSAGE";

// Events emitted by the Three.js Experience back to React
export type ExperienceEvent =
  | { type: "gates-reached" }
  | { type: "gates-opened" }
  | { type: "bouquet-revealed" }
  | { type: "rose-selected"; roseId: number; worldPosition: [number, number, number] }
  | { type: "zoomed-out-fully" }
  | { type: "heart-formed" }
  | { type: "explore-ready" };

// Quality levels for adaptive rendering
export type QualityLevel = "LOW" | "MEDIUM" | "HIGH";

// Callback type for experience events
export type ExperienceEventHandler = (event: ExperienceEvent) => void;
