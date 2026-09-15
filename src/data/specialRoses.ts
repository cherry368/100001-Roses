import { config } from "../config/birthday";

// Special rose IDs — these have unique messages and subtle visual differences
export const specialRoseIds: number[] = Object.keys(config.specialRoseMessages)
  .map(Number)
  .sort((a, b) => a - b);

// Check if a rose ID is special
export function isSpecialRose(roseId: number): boolean {
  return roseId in config.specialRoseMessages;
}

// Get the message for a specific rose
export function getRoseMessage(roseId: number): string | null {
  if (roseId in config.specialRoseMessages) {
    return config.specialRoseMessages[roseId];
  }
  if (roseId in config.hiddenMessages) {
    return config.hiddenMessages[roseId];
  }
  return null;
}

// Get all special and hidden rose IDs (for visual differentiation)
export function getHighlightedRoseIds(): Set<number> {
  return new Set([
    ...Object.keys(config.specialRoseMessages).map(Number),
    ...Object.keys(config.hiddenMessages).map(Number),
  ]);
}
