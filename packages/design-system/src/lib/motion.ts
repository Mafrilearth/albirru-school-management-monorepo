import type { TargetAndTransition, Transition, Variants } from "motion/react";

/**
 * SD Al-Birru School Information System (albirru-sis)
 * Motion & Animation Design Tokens
 *
 * Grounded in Apple Human Interface Guidelines (HIG) Liquid Glass Spring Physics.
 * @see https://motion.dev/docs/react-transitions
 */

/**
 * Standard balanced spring for modal dialogs, drawers, and card expansions.
 */
export const appleSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 28,
  mass: 0.8,
};

/**
 * Snappy responsive spring for buttons, tabs, tooltips, and interactive micro-interactions.
 */
export const appleSpringSnappy: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
  mass: 0.7,
};

/**
 * Gentle deceleration spring for full-page transitions, hero banners, and parallax layers.
 */
export const appleSpringGentle: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 24,
  mass: 1.0,
};

/**
 * Haptic tap gesture feedback for touchscreens and pointer press.
 */
export const appleTapHaptic: TargetAndTransition = {
  scale: 0.94,
  transition: {
    type: "spring",
    stiffness: 450,
    damping: 30,
    mass: 0.5,
  },
};

/**
 * Subtle elevation hover lift for cards, badges, and interactive tiles.
 */
export const appleHoverLift: TargetAndTransition = {
  scale: 1.03,
  y: -2,
  transition: appleSpringSnappy,
};

/**
 * Orchestrated stagger container for lists, grids, and curriculum showcases.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

/**
 * Standard staggered child item fade-in and slide-up.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: appleSpring,
  },
};

/**
 * Shared layout transition identifier helper.
 */
export function createSharedLayoutProps(layoutId: string) {
  return {
    layout: true as const,
    layoutId,
    transition: appleSpring,
  };
}
