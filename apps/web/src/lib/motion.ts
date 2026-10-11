import type { Transition, TargetAndTransition } from "motion/react";

/**
 * Official Apple Human Interface Guidelines (HIG) - Liquid Glass Spring Tokens (WWDC 2025)
 * Physics: { type: "spring", stiffness: 300, damping: 28, mass: 0.8 }
 */
export const appleSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 28,
  mass: 0.8,
};

export const appleSpringSnappy: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
  mass: 0.7,
};

export const appleSpringGentle: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 24,
  mass: 1.0,
};

export const appleTapHaptic: TargetAndTransition = {
  scale: 0.94,
  transition: {
    type: "spring",
    stiffness: 450,
    damping: 30,
    mass: 0.5,
  },
};

export const appleHoverLift: TargetAndTransition = {
  scale: 1.03,
  y: -2,
  transition: appleSpringSnappy,
};
