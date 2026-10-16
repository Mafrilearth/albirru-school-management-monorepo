"use client";

import {
  BookOpen,
  Building2,
  Calendar,
  Camera,
  Clock,
  HeartHandshake,
  MapPin,
  Newspaper,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
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
        "relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 bg-muted/20 border-b border-border",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Monospace Architectural Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-border bg-background/90 text-foreground">
          <span className="size-1.5 bg-primary" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            // {kicker}
          </span>
        </div>

        {/* High-Contrast Editorial Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.12] max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Quick Monospace Badges */}
        {badges && badges.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs">
            {badges.map((b, idx) => {
              const Icon = b.iconName ? ICON_MAP[b.iconName] : null;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider bg-background border border-border text-foreground"
                >
                  {Icon && <Icon className="size-3 text-primary shrink-0" />}
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
