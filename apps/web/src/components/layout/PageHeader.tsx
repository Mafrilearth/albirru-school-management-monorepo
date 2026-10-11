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
import { Badge } from "@/components/ui/badge";
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
        "relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-muted/30 border-b border-border",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Kicker Pill */}
        <Badge
          variant="outline"
          className="gap-2 px-3.5 py-1 mb-5 text-xs font-medium rounded-full"
        >
          <span>{kicker}</span>
        </Badge>

        {/* High-Contrast Editorial Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.15] max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Quick Badges */}
        {badges && badges.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3 text-xs">
            {badges.map((b, idx) => {
              const Icon = b.iconName ? ICON_MAP[b.iconName] : null;
              return (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="gap-1.5 px-3 py-1.5 font-normal text-xs"
                >
                  {Icon && <Icon className="size-3.5 text-primary shrink-0" />}
                  <span>{b.label}</span>
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
