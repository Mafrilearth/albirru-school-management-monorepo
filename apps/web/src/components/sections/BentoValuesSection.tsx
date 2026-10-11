"use client";

import { ArrowRight, BookMarked, Cpu, Heart, Sparkles } from "lucide-react";
import Link from "next/link";

import { BorderBeam } from "@/components/common/BorderBeam";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function BentoValuesSection() {
  return (
    <section
      aria-labelledby="bento-values-heading"
      className="py-28 md:py-36 lg:py-44 bg-transparent border-b border-slate-200/70 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 shadow-2xs text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-5">
            <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
            <span>CURRICULUM // 4 INTEGRATED PILLARS</span>
          </div>
          <h2
            id="bento-values-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]"
          >
            Holistic Learning Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">
            An educational structure harmonizing spiritual depth of the Holy
            Qur&apos;an, noble character building, and critical scientific
            reasoning.
          </p>
        </div>

        {/* Exposed 1px Structural Grid (Hairline Grid System) */}
        <div className="relative">
          {/* Corner Crosshairs / Registration Marks */}
          <div className="absolute -top-1.5 -left-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />
          <div className="absolute -top-1.5 -right-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />
          <div className="absolute -bottom-1.5 -left-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />
          <div className="absolute -bottom-1.5 -right-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />

          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-200 dark:bg-slate-800 gap-[1px] border border-slate-200 dark:border-slate-800">
            {/* Pillar 01: Tahfidzul Qur'an (Span 7) */}
            <article
              aria-labelledby="pillar-01-title"
              className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-12 flex flex-col justify-between relative group overflow-hidden"
            >
              <BorderBeam
                size={220}
                duration={12}
                colorFrom="#f59e0b"
                colorTo="#334155"
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                    PILLAR 01
                  </span>
                  <BookMarked className="size-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3
                  id="pillar-01-title"
                  className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug"
                >
                  Certified Sanad Talaqqi &amp; Self-Directed Muroja&apos;ah
                </h3>
                <p className="mt-5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Students receive personalized instruction during morning
                  halaqah sessions to master makharijul huruf and accurate
                  tajweed rules. Memorization is evaluated through open
                  single-sitting tasmi&apos; examinations witnessed by parents.
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  <Badge
                    variant="outline"
                    className="bg-slate-900 border-slate-800 text-slate-300 font-mono rounded-none"
                  >
                    Certified Sanad Teachers
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-slate-900 border-slate-800 text-slate-300 font-mono rounded-none"
                  >
                    Single-Sitting Tasmi&apos;
                  </Badge>
                </div>
              </div>
              <div className="mt-12 pt-6 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                <span className="text-xs text-slate-400 font-mono">
                  Target: Juz 30, 29, 28
                </span>
                <Link
                  href="/programs"
                  className="text-xs font-bold text-slate-300 hover:text-amber-400 flex items-center gap-1.5 transition-colors group/link font-mono uppercase"
                >
                  <span>Syllabus</span>
                  <ArrowRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>

            {/* Pillar 02: Adab & Akhlak (Span 5) */}
            <article
              aria-labelledby="pillar-02-title"
              className="lg:col-span-5 bg-white dark:bg-slate-950 p-8 sm:p-12 flex flex-col justify-between group hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                    PILLAR 02
                  </span>
                  <Heart className="size-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3
                  id="pillar-02-title"
                  className="text-xl sm:text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug"
                >
                  Habit-Forming &amp; 7 Virtuous Habits
                </h3>
                <div className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                  Daily congregational Dhuha and Zuhr prayers,{" "}
                  <HoverCard>
                    <HoverCardTrigger className="underline decoration-dashed decoration-slate-400 underline-offset-4 cursor-help font-bold text-slate-900 dark:text-slate-100">
                      the 5S Culture
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="w-80 p-4 rounded-none border-slate-800"
                      side="top"
                    >
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                          <Heart className="size-4" /> Smile, Greet, Welcome,
                          Polite, Courteous
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Daily etiquette practiced consistently by all students
                          and instructors.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  , as well as social empathy projects through weekly charity
                  and filial devotion (birrul walidain).
                </div>
              </div>
              <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500 uppercase">
                <span>Adab Precedes Formal Knowledge</span>
              </div>
            </article>

            {/* Pillar 03: Inkuiri Sains & Komputasi (Span 5) */}
            <article
              aria-labelledby="pillar-03-title"
              className="lg:col-span-5 bg-white dark:bg-slate-950 p-8 sm:p-12 flex flex-col justify-between group hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                    PILLAR 03
                  </span>
                  <Cpu className="size-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3
                  id="pillar-03-title"
                  className="text-xl sm:text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug"
                >
                  Scientific Inquiry &amp; Junior Coding Logic
                </h3>
                <p className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                  Active inquiry-based learning integrating applied open-air
                  science experiments, algorithmic computational thinking, and
                  technology literacy.
                </p>
              </div>
              <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500 uppercase">
                <span>Sharpening creative problem solving</span>
              </div>
            </article>

            {/* Pillar 04: Ekosistem School Sehat (Span 7) */}
            <article
              aria-labelledby="pillar-04-title"
              className="lg:col-span-7 bg-white dark:bg-slate-950 p-8 sm:p-12 flex flex-col justify-between group hover:bg-lime-50 dark:hover:bg-lime-950/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                    PILLAR 04
                  </span>
                  <Sparkles className="size-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3
                  id="pillar-04-title"
                  className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug"
                >
                  Limited Class Ratios &amp; Wholesome Campus Ecosystem
                </h3>
                <p className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                  Strict caps of at most 20 students per class ensure personal
                  emotional connection and individualized developmental
                  attention. Supported by air-conditioned classrooms, dedicated
                  school mosque, library, and secure playgrounds.
                </p>
              </div>
              <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono uppercase">
                  Max 20 students per class
                </span>
                <Link
                  href="/programs"
                  className="text-xs font-bold text-slate-900 dark:text-slate-50 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1.5 transition-colors group/link font-mono uppercase"
                >
                  <span>Facilities</span>
                  <ArrowRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
