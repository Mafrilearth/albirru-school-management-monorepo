"use client";

import React from "react";

import {
  ShieldCheck,
  BookOpen,
  Users,
  Trophy,
  Building2,
  Newspaper,
  Calendar,
  Camera,
  Sparkles,
  HeartHandshake,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  shield: ShieldCheck,
  book: BookOpen,
  users: Users,
  trophy: Trophy,
  building: Building2,
  newspaper: Newspaper,
  calendar: Calendar,
  camera: Camera,
  sparkles: Sparkles,
  heart: HeartHandshake,
  "map-pin": MapPin,
  clock: Clock,
  phone: Phone,
} as const;

export type PageHeaderIconName = keyof typeof ICON_MAP;

export interface PageHeaderBadge {
  iconName?: PageHeaderIconName;
  label: string;
}

export interface PageHeaderProps {
  kicker: string;
  title: string;
  description: string;
  badges?: PageHeaderBadge[];
  className?: string;
}

export function PageHeader({
  kicker,
  title,
  description,
  badges,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 bg-[#FDFDFB] dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-700/80",
        className
      )}
    >
      {/* Removed conflicting background dots to allow GlobalGrid to shine clearly */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Monospace Kicker Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs text-[11px] font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase mb-6">
          <span className="size-1.5 rounded-none bg-amber-500" />
          <span>{kicker}</span>
        </div>

        {/* High-Contrast Editorial Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12] max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
          {description}
        </p>

        {/* Architectural Quick Badges */}
        {badges && badges.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-slate-700 dark:text-slate-300 font-mono">
            {badges.map((b, idx) => {
              const Icon = b.iconName ? ICON_MAP[b.iconName] : null;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 shadow-2xs font-medium hover:border-slate-300 dark:border-slate-600 transition-colors"
                >
                  {Icon && <Icon className="size-3.5 text-amber-600 shrink-0" />}
                  <span>{b.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
