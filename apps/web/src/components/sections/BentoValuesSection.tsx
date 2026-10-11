"use client";

import { ArrowRight, BookMarked, Cpu, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function BentoValuesSection() {
  return (
    <section
      aria-labelledby="bento-values-heading"
      className="py-20 md:py-28 lg:py-36 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="gap-2 px-3.5 py-1 mb-5 text-xs font-medium rounded-full"
          >
            <span>4 INTEGRATED PILLARS</span>
          </Badge>
          <h2
            id="bento-values-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
          >
            Holistic Learning Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            An educational structure harmonizing spiritual depth of the Holy
            Qur&apos;an, noble character building, and critical scientific
            reasoning.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Pillar 01: Tahfidzul Qur'an (Span 7) */}
          <Card className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge variant="secondary">Pillar 01</Badge>
                <BookMarked className="size-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight leading-snug">
                Certified Sanad Talaqqi &amp; Self-Directed Muroja&apos;ah
              </h3>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Students receive personalized instruction during morning halaqah
                sessions to master makharijul huruf and accurate tajweed rules.
                Memorization is evaluated through open single-sitting
                tasmi&apos; examinations witnessed by parents.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="outline">Certified Sanad Teachers</Badge>
                <Badge variant="outline">Single-Sitting Tasmi&apos;</Badge>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>Target: Juz 30, 29, 28</span>
              <Link
                href="/programs"
                className="font-medium text-primary hover:underline flex items-center gap-1.5"
              >
                <span>Syllabus</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </Card>

          {/* Pillar 02: Adab & Akhlak (Span 5) */}
          <Card className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge variant="secondary">Pillar 02</Badge>
                <Heart className="size-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-snug">
                Habit-Forming &amp; 7 Virtuous Habits
              </h3>
              <div className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Daily congregational Dhuha and Zuhr prayers,{" "}
                <HoverCard>
                  <HoverCardTrigger className="underline decoration-dashed underline-offset-4 cursor-help font-semibold text-foreground">
                    the 5S Culture
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4" side="top">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                        <Heart className="size-4 text-primary" /> Smile, Greet,
                        Welcome, Polite, Courteous
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Daily etiquette practiced consistently by all students
                        and instructors.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                , as well as social empathy projects through weekly charity and
                filial devotion (birrul walidain).
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-border text-xs text-muted-foreground">
              <span>Adab Precedes Formal Knowledge</span>
            </div>
          </Card>

          {/* Pillar 03: Inkuiri Sains & Komputasi (Span 5) */}
          <Card className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge variant="secondary">Pillar 03</Badge>
                <Cpu className="size-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-snug">
                Scientific Inquiry &amp; Junior Coding Logic
              </h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Active inquiry-based learning integrating applied open-air
                science experiments, algorithmic computational thinking, and
                technology literacy.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border text-xs text-muted-foreground">
              <span>Sharpening creative problem solving</span>
            </div>
          </Card>

          {/* Pillar 04: Ekosistem School Sehat (Span 7) */}
          <Card className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge variant="secondary">Pillar 04</Badge>
                <Sparkles className="size-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight leading-snug">
                Limited Class Ratios &amp; Wholesome Campus Ecosystem
              </h3>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Strict caps of at most 20 students per class ensure personal
                emotional connection and individualized developmental attention.
                Supported by air-conditioned classrooms, dedicated school
                mosque, library, and secure playgrounds.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>Max 20 students per class</span>
              <Link
                href="/programs"
                className="font-medium text-primary hover:underline flex items-center gap-1.5"
              >
                <span>Facilities</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
