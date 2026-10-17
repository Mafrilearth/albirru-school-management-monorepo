"use client";

import { Award, BookOpen, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

/**
 * Accreditation Strip Component
 * Architecture: Swiss Typographic Gauge (Edge-to-Edge Line Grid, Zero Card Boxes)
 * Standards:
 * - High-impact typography: Oversized metrics with monospace coordinates.
 * - Tactile hover: Ambient amber line glow and micro-shift.
 * - Flat topology: 1px divider lines, zero box-shadows.
 */
export function AccreditationStrip() {
  const { t } = useLanguage();

  const metrics = [
    {
      id: "accreditation",
      code: "01 // BAN-PDM",
      label: t.metrics.accreditationLabel,
      value: t.metrics.accreditationValue,
      icon: Award,
    },
    {
      id: "npsn",
      code: "02 // KEMENDIKBUD",
      label: t.metrics.npsnLabel,
      value: t.metrics.npsnValue,
      icon: ShieldCheck,
    },
    {
      id: "ratio",
      code: "03 // FITRAH RATIO",
      label: t.metrics.ratioLabel,
      value: t.metrics.ratioValue,
      icon: Users,
    },
    {
      id: "tahfidz",
      code: "04 // SANAD MUTQIN",
      label: t.metrics.tahfidzLabel,
      value: t.metrics.tahfidzValue,
      icon: BookOpen,
    },
  ];

  return (
    <section
      aria-label="Statutory Metrics"
      className="w-full border-b border-border bg-card/60 backdrop-blur-sm relative"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className="group relative flex flex-col justify-between p-6 sm:p-8 hover:bg-muted/40 transition-colors duration-200 overflow-hidden"
              >
                {/* Top Coordinate Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/80 group-hover:text-amber-500 transition-colors">
                    [{item.code}]
                  </span>
                  <div className="size-8 rounded-md bg-muted/40 border border-border flex items-center justify-center text-muted-foreground group-hover:text-amber-500 group-hover:border-amber-400/40 transition-all duration-200">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                </div>

                {/* Metric Value & Label */}
                <div>
                  <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-foreground group-hover:text-amber-500 transition-colors duration-200">
                    {item.value}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>

                {/* Active Hairline Accent Indicator on Hover */}
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-transparent group-hover:bg-amber-400 transition-colors duration-200" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
