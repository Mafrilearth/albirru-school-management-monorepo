/**
 * Chromatic Visual Regression Modes Configuration
 * Defines viewport matrices and theme variations for automated snapshot testing.
 * @see https://www.chromatic.com/docs/modes
 */
export const allModes = {
  desktop: {
    viewport: 1280,
    theme: "light",
  },
  mobile: {
    viewport: "small",
    theme: "light",
  },
  "dark desktop": {
    viewport: 1280,
    theme: "dark",
  },
  "dark mobile": {
    viewport: "small",
    theme: "dark",
  },
} as const;

export type ModeName = keyof typeof allModes;
