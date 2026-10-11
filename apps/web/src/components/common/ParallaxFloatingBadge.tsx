"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type React from "react";
import { cn } from "@/lib/utils";

export interface ParallaxFloatingBadgeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  initialY?: number;
}

export function ParallaxFloatingBadge({
  children,
  speed = 0.4,
  className,
  initialY = 0,
}: ParallaxFloatingBadgeProps) {
  const { scrollY } = useScroll();
  const rawY = useTransform(
    scrollY,
    [0, 800],
    [initialY, initialY - speed * 100],
  );
  const y = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ y }}
      className={cn("pointer-events-none select-none", className)}
    >
      {children}
    </motion.div>
  );
}
