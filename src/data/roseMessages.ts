// Deterministic notes for all 100,001 roses.
// Every rose gets its own note because the rose number is part of the
// generated message. The same rose always returns the same note.

const openings = [
  "You have a way of making ordinary moments feel special.",
  "Some memories stay quietly beautiful because of people like you.",
  "You make laughter feel easier and good days feel a little brighter.",
  "There is something wonderfully unforgettable about the way you are.",
  "Even the smallest moments can become beautiful when you are part of them.",
  "You deserve to be reminded that you are deeply appreciated.",
  "Some people bring flowers into a room; you bring warmth into it.",
  "I hope you never forget how much joy you can bring without even trying.",
  "There are moments I would happily replay just because you were there.",
  "You make simple memories feel like stories worth keeping.",
  "The best things about you are often the little things you don't notice.",
  "You have a beautiful way of turning normal days into better ones.",
];

const middles = [
  "Keep this little reminder close whenever you need a reason to smile.",
  "May this be one tiny reason to believe that beautiful things are still ahead.",
  "I hope this year gives you more moments that feel exactly like this.",
  "Whatever comes next, I hope it brings you plenty of reasons to laugh.",
  "You deserve memories that make you smile long after they happen.",
  "May the next chapter be kinder, brighter, and slightly more crazy.",
  "I hope you keep choosing happiness, even on the ordinary days.",
  "Somewhere in all the chaos, I hope you always find your little moments of peace.",
  "Never underestimate how much your presence can mean to someone.",
  "Take this as a tiny reminder that you are worth celebrating.",
  "I hope you collect beautiful memories faster than you can count them.",
  "And if today gets a little difficult, remember that brighter moments are coming.",
];

const closings = [
  "Always keep that smile. ❤️",
  "Stay wonderfully you. 🌹",
  "Here's to more crazy memories. ✨",
  "You deserve all the good things. 🫶",
  "Keep shining. ❤️",
  "One more reason to smile. 🌹",
  "For you, always. ♡",
  "Happy Birthday, beautiful soul. 🎂",
];

function hash(value: number): number {
  let x = value | 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
  x = x ^ (x >>> 16);
  return x >>> 0;
}

function pick<T>(items: readonly T[], seed: number): T {
  return items[hash(seed) % items.length];
}

export function getUniqueRoseMessage(roseNumber: number): string {
  const id = Math.max(1, Math.min(100001, Math.floor(roseNumber)));

  const opening = pick(openings, id * 3 + 11);
  const middle = pick(middles, id * 5 + 17);
  const closing = pick(closings, id * 7 + 23);

  return `${opening} ${middle}\n\nRose #${id.toLocaleString("en-US")} keeps this little reason just for you. ${closing}`;
}

// Kept for compatibility with older components.
export function getRandomRoseMessage(): string {
  const roseNumber = Math.floor(Math.random() * 100001) + 1;
  return getUniqueRoseMessage(roseNumber);
}
