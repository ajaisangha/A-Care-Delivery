// src/rates.js
export const ZONES = [
  { id: 1, name: "Zone 1 (0-5 km)" },
  { id: 2, name: "Zone 2 (5-10 km)" },
  { id: 3, name: "Zone 3 (10-15 km)" },
  { id: 4, name: "Zone 4 (15 km+)" },
];

export const RATES = {
  florist: { single: [14, 18, 22], premium: [18, 22, 26], multiple: [25, 32, 40] },
  pharmacy: { standard: [9, 12, 15], urgent: [18, 22, 28] },
  retail: { small: [13, 17, 21], medium: [17, 22, 27] },
  sameday: { economy: [11, 14, 17], express: [25, 30, 35] },
  extras: { handling: 2, waitingPerMin: 0.75, fuelSurchargePct: 0.05 },
};
