"use client";

import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  vx: number;
  vy: number;
  opacity: number;
}

const BRAND_COLORS = [
  "#F59E0B", // Solar Gold
  "#FBBF24", // Light Gold
  "#065F46", // Tahfidz Emerald
  "#10B981", // Bright Emerald
  "#0F172A", // Slate Obsidian
  "#38BDF8", // Sky Accent
];

export function ConfettiCelebration({ durationMs = 3500 }: { durationMs?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 60 dynamic confetti particles
    const initialParticles: Particle[] = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: 50 + (Math.random() * 20 - 10), // spawn near center
      y: 40,
      size: Math.random() * 8 + 6,
      color: BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)],
      rotation: Math.random() * 360,
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -12 - 4,
      opacity: 1,
    }));

    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * 0.4,
            y: p.y + p.vy * 0.4,
            vy: p.vy + 0.35, // gravity
            rotation: p.rotation + 8,
            opacity: Math.max(0, p.opacity - 0.015),
          }))
          .filter((p) => p.opacity > 0 && p.y < 120)
      );
    }, 25);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setParticles([]);
    }, durationMs);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [durationMs]);

  if (particles.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.6}px`,
            backgroundColor: p.color,
            borderRadius: "2px",
            transform: `rotate(${p.rotation}deg)`,
            opacity: p.opacity,
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}
