"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 origin-left z-[100] pointer-events-none shadow-[0_1px_8px_rgba(245,158,11,0.4)]"
    />
  );
}
