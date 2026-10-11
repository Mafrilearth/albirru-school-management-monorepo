"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(245, 158, 11, 0.08)",
  borderColor = "rgba(245, 158, 11, 0.35)",
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative rounded-none border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Background Spotlight Radial Gradient */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />

      {/* Border Spotlight Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          border: "1px solid transparent",
          maskImage: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
          borderColor: borderColor,
        }}
      />

      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}
