"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  viewportMargin?: string;
  scale?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 24,
  direction = "up",
  className,
  viewportMargin = "-60px",
  scale = 1,
  ...props
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: yOffset, x: 0 };
      case "down":
        return { y: -yOffset, x: 0 };
      case "left":
        return { x: yOffset, y: 0 };
      case "right":
        return { x: -yOffset, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialPos.x,
        y: initialPos.y,
        scale: scale !== 1 ? scale : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
