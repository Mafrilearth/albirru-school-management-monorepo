"use client";

import { Quote, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

/**
 * TestimonialsSection — Editorial Pull-Quote Showcase
 * Architecture: Out-of-the-Box Editorial Experience (Zero Cramped Card Boxes)
 * Standards:
 * - High-impact editorial pull-quote typography with giant quotation marks.
 * - Interactive parent selector with verified cohort tags.
 * - Tactile switching with smooth spring cross-fade animation.
 */
export function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = useMemo(
    () => [
      {
        id: "testimonial-1",
        quote: t.testimonials.parent1Quote,
        author: t.testimonials.parent1Author,
        role: t.testimonials.parent1Role,
        batch: t.testimonials.parent1Batch,
        code: "01 // ANGKATAN II",
        initial: "A",
      },
      {
        id: "testimonial-2",
        quote: t.testimonials.parent2Quote,
        author: t.testimonials.parent2Author,
        role: t.testimonials.parent2Role,
        batch: t.testimonials.parent2Batch,
        code: "02 // ANGKATAN III",
        initial: "R",
      },
      {
        id: "testimonial-3",
        quote: t.testimonials.parent3Quote,
        author: t.testimonials.parent3Author,
        role: t.testimonials.parent3Role,
        batch: t.testimonials.parent3Batch,
        code: "03 // ANGKATAN IV",
        initial: "F",
      },
    ],
    [t],
  );

  const active = testimonials[activeIdx] || testimonials[0];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full relative py-16 sm:py-20 lg:py-24 bg-card/30 border-b border-border overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border border-border bg-background text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
            <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
          >
            {t.testimonials.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Editorial Pull-Quote Frame (Zero Small Cluttered Boxes) */}
        <div className="rounded-lg border border-border bg-background p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-none">
          {/* Subtle Ambient Quote Mark in Background */}
          <div className="absolute right-8 top-6 text-muted/20 select-none pointer-events-none">
            <Quote className="size-32 sm:size-48 stroke-1" />
          </div>

          <div className="relative z-10 max-w-4xl">
            {/* Top Verification Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-muted/30 text-xs font-mono text-muted-foreground mb-8">
              <ShieldCheck className="size-3.5 text-emerald-500" />
              <span>TESTIMONI WALI SANTRI RESMI TERVERIFIKASI</span>
            </div>

            {/* Morphing Large Quote Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8"
              >
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground tracking-tight leading-relaxed italic">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                {/* Parent Profile Bar */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="size-12 rounded-lg border border-border shrink-0">
                    <AvatarFallback className="font-mono font-bold text-sm bg-amber-400/10 text-amber-500 rounded-lg">
                      {active.initial}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                      {active.author}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">
                      {active.role} •{" "}
                      <span className="text-amber-500 font-bold">
                        {active.batch}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Parent Switcher Rails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          {testimonials.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "p-4 rounded-lg text-start transition-all duration-200 border cursor-pointer relative overflow-hidden active:scale-[0.98] flex items-center justify-between",
                  isSelected
                    ? "border-amber-500 bg-background shadow-none"
                    : "border-border bg-background/50 hover:bg-background hover:border-foreground/20 text-muted-foreground",
                )}
              >
                <div>
                  <span
                    className={cn(
                      "font-mono text-[10px] tracking-widest uppercase block mb-0.5",
                      isSelected
                        ? "text-amber-500 font-bold"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.code}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground truncate block">
                    {item.author}
                  </span>
                </div>

                <div
                  className={cn(
                    "size-7 rounded-md border flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors",
                    isSelected
                      ? "border-amber-500/40 bg-amber-400 text-slate-950"
                      : "border-border bg-muted/30 text-muted-foreground",
                  )}
                >
                  {item.initial}
                </div>

                {/* Left Active Indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="parent-active-pill"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
