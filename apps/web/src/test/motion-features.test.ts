import { describe, expect, it } from "vitest";
import {
  appleHoverLift,
  appleSpring,
  appleSpringGentle,
  appleSpringSnappy,
  appleTapHaptic,
  createSharedLayoutProps,
  staggerContainer,
  staggerItem,
} from "../lib/motion";

describe("Motion Architecture & Spring Tokens Suite", () => {
  it("verifies Apple HIG Liquid Glass Spring token physics invariants", () => {
    // Balanced spring
    expect(appleSpring).toMatchObject({
      type: "spring",
      stiffness: 300,
      damping: 28,
      mass: 0.8,
    });

    // Snappy spring (higher stiffness for snappy feedback)
    expect(appleSpringSnappy).toMatchObject({
      type: "spring",
      stiffness: 380,
      damping: 30,
      mass: 0.7,
    });

    // Gentle spring (softer stiffness and higher mass for smooth deceleration)
    expect(appleSpringGentle).toMatchObject({
      type: "spring",
      stiffness: 220,
      damping: 24,
      mass: 1.0,
    });
  });

  it("verifies interactive gesture transforms for haptic tap and hover lift", () => {
    expect(appleTapHaptic).toMatchObject({
      scale: 0.94,
    });
    expect(appleTapHaptic.transition).toMatchObject({
      type: "spring",
      stiffness: 450,
    });

    expect(appleHoverLift).toMatchObject({
      scale: 1.03,
      y: -2,
    });
    expect(appleHoverLift.transition).toBe(appleSpringSnappy);
  });

  it("provides orchestrated container and item stagger variants", () => {
    expect(staggerContainer.hidden).toEqual({ opacity: 0 });
    expect(staggerContainer.visible).toMatchObject({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    });

    expect(staggerItem.hidden).toEqual({ opacity: 0, y: 16 });
    expect(staggerItem.visible).toMatchObject({
      opacity: 1,
      y: 0,
      transition: appleSpring,
    });
  });

  it("generates valid layout animation props with createSharedLayoutProps", () => {
    const layoutProps = createSharedLayoutProps("tab-indicator");

    expect(layoutProps.layout).toBe(true);
    expect(layoutProps.layoutId).toBe("tab-indicator");
    expect(layoutProps.transition).toBe(appleSpring);
  });
});
