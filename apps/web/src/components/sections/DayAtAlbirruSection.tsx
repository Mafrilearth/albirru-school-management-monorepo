"use client";

import {
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  Sun,
  UserCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

/**
 * DayAtAlbirruSection — Continuous Chronological Timeline Rail
 * Architecture: Out-of-the-Box Architectural Daily Journal (Zero Repetitive Card Boxes)
 * Standards:
 * - Continuous horizontal schedule runway with connected active nodes.
 * - Open typographic journal layout with giant time watermarks.
 * - Tactile active feedback with spring transitions.
 */
export function DayAtAlbirruSection() {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const scheduleSlots = useMemo(
    () => [
      {
        id: "dhuha",
        time: t.routine.slot1Time,
        step: t.routine.slot1Step,
        title: t.routine.slot1Title,
        subtitle: t.routine.slot1Subtitle,
        description: t.routine.slot1Description,
        values: t.routine.slot1Values,
        mentor: t.routine.slot1Mentor,
        icon: Sun,
      },
      {
        id: "tahfidz",
        time: t.routine.slot2Time,
        step: t.routine.slot2Step,
        title: t.routine.slot2Title,
        subtitle: t.routine.slot2Subtitle,
        description: t.routine.slot2Description,
        values: t.routine.slot2Values,
        mentor: t.routine.slot2Mentor,
        icon: BookOpen,
      },
      {
        id: "thematic",
        time: t.routine.slot3Time,
        step: t.routine.slot3Step,
        title: t.routine.slot3Title,
        subtitle: t.routine.slot3Subtitle,
        description: t.routine.slot3Description,
        values: t.routine.slot3Values,
        mentor: t.routine.slot3Mentor,
        icon: Sparkles,
      },
      {
        id: "dzuhur",
        time: t.routine.slot4Time,
        step: t.routine.slot4Step,
        title: t.routine.slot4Title,
        subtitle: t.routine.slot4Subtitle,
        description: t.routine.slot4Description,
        values: t.routine.slot4Values,
        mentor: t.routine.slot4Mentor,
        icon: Clock,
      },
      {
        id: "literacy",
        time: t.routine.slot5Time,
        step: t.routine.slot5Step,
        title: t.routine.slot5Title,
        subtitle: t.routine.slot5Subtitle,
        description: t.routine.slot5Description,
        values: t.routine.slot5Values,
        mentor: t.routine.slot5Mentor,
        icon: BookOpen,
      },
      {
        id: "dismissal",
        time: t.routine.slot6Time,
        step: t.routine.slot6Step,
        title: t.routine.slot6Title,
        subtitle: t.routine.slot6Subtitle,
        description: t.routine.slot6Description,
        values: t.routine.slot6Values,
        mentor: t.routine.slot6Mentor,
        icon: Sun,
      },
    ],
    [t],
  );

  const activeSlot = scheduleSlots[selectedIdx] || scheduleSlots[0];
  const IconComponent = activeSlot.icon;

  return (
    <section
      id="routine"
      aria-labelledby="routine-heading"
      className="w-full relative py-16 sm:py-20 lg:py-24 bg-card/40 border-b border-border overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border border-border bg-background text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
            <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
            <span>{t.routine.badge}</span>
          </div>

          <h2
            id="routine-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
          >
            {t.routine.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.routine.subtitle}
          </p>
        </div>

        {/* Connected Horizontal Timeline Rail */}
        <div className="relative mb-8">
          {/* Background Connecting Rail Line */}
          <div className="hidden lg:block absolute top-1/2 inset-x-8 h-px bg-border -translate-y-1/2 z-0" />

          {/* Stepper Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 relative z-10">
            {scheduleSlots.map((slot, idx) => {
              const isSelected = selectedIdx === idx;
              const SlotIcon = slot.icon;

              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={cn(
                    "p-4 rounded-lg text-start cursor-pointer transition-all duration-200 border relative overflow-hidden active:scale-[0.98] flex flex-col justify-between h-28",
                    isSelected
                      ? "border-amber-500 bg-background shadow-none"
                      : "border-border bg-background/60 hover:bg-background hover:border-foreground/30 text-muted-foreground",
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className={cn(
                        "size-7 rounded-md flex items-center justify-center transition-colors",
                        isSelected
                          ? "bg-amber-400 text-slate-950 font-bold"
                          : "bg-muted/60 text-muted-foreground",
                      )}
                    >
                      <SlotIcon className="size-3.5" />
                    </div>
                    <span
                      className={cn(
                        "font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border",
                        isSelected
                          ? "border-amber-500/40 text-amber-500 bg-amber-400/10"
                          : "border-border text-muted-foreground bg-muted/30",
                      )}
                    >
                      {slot.step}
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-xs font-bold text-foreground">
                      {slot.time}
                    </span>
                    <span className="block text-xs font-medium text-muted-foreground truncate mt-0.5">
                      {slot.title}
                    </span>
                  </div>

                  {/* Top Active Indicator Pip */}
                  {isSelected && (
                    <motion.div
                      layoutId="routine-node-pip"
                      className="absolute top-0 inset-x-0 h-1 bg-amber-500"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* The Open Journal Canvas (Zero Nested Box Repetition) */}
        <div className="rounded-lg border border-border bg-background p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-none">
          {/* Subtle Ambient Giant Time Watermark */}
          <div className="absolute right-6 -bottom-6 font-mono font-black text-7xl sm:text-9xl text-muted/30 select-none pointer-events-none tracking-tighter">
            {activeSlot.step}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlot.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10"
            >
              {/* Left Column: Activity Journal Info (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-500 shrink-0">
                    <IconComponent className="size-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-wider">
                        {activeSlot.time}
                      </span>
                      <span className="text-muted-foreground/40">•</span>
                      <span className="font-mono text-xs text-muted-foreground uppercase">
                        Sesi {activeSlot.step} dari 06
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mt-0.5">
                      {activeSlot.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base font-semibold text-foreground/90 leading-relaxed">
                  {activeSlot.subtitle}
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {activeSlot.description}
                </p>

                {/* Values & Character Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeSlot.values.map((val) => (
                    <div
                      key={val}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-muted/40 text-xs font-mono font-medium text-foreground hover:border-foreground/30 hover:bg-muted/80 transition-colors"
                    >
                      <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Teacher Mentorship Logbook (4 Columns) */}
              <div className="lg:col-span-4 rounded-lg border border-border bg-muted/30 p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground uppercase tracking-wider">
                  <UserCheck className="size-4 text-amber-500 shrink-0" />
                  <span>{t.routine.mentorshipBadge}</span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {activeSlot.mentor}
                </p>

                <div className="pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground uppercase">
                  <span>{t.routine.ecosystemLabel}</span>
                  <span className="font-bold text-amber-500">
                    {t.routine.integratedGuidance}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
