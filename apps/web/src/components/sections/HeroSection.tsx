"use client";

import { Award, BookOpen, MessageCircle, Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/lib/i18n/context";

/**
 * Hero Section
 * Architecture: Uniform Functional Minimalism on an 8px Modular Scale
 * Standards:
 * - Vertical Padding: py-16 sm:py-20 lg:py-24 (uniform across all sections).
 * - Action Targets: Consistent 48px height (h-12) with 8px radius (rounded-lg).
 * - Image Overlay Badges: Top-4 left-4 positioning, 12px mono font, amber accent.
 */
export function HeroSection() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(t.admissions.whatsappMessage);
    window.open(
      `https://wa.me/6281234567890?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-background border-b border-border"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Focused Lead Content (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Status Indicator Badge */}
            <div className="squircle inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-border bg-muted/60 text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.hero.badgeStatus}</span>
            </div>

            {/* Display Headline */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
            >
              {t.hero.title}
            </h1>

            {/* Value Proposition Description */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Action Buttons: Standardized 48px Height */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                type="button"
                onClick={handleWhatsAppClick}
                className="squircle h-12 px-7 font-bold text-sm bg-primary hover:bg-amber-500 text-slate-950 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-none"
              >
                <MessageCircle className="size-4 shrink-0 transition-transform duration-150 group-hover:rotate-6" />
                <span>{t.hero.primaryAction}</span>
              </Button>

              <Button
                variant="outline"
                render={<a href="#curriculum" />}
                nativeButton={false}
                className="squircle h-12 px-7 font-bold text-sm border-border hover:bg-muted hover:border-foreground/30 active:scale-[0.98] text-foreground transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-none"
              >
                <BookOpen className="size-4 text-muted-foreground shrink-0" />
                <span>{t.hero.secondaryAction}</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Consistent Media Cluster (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            {/* Primary Video Showcase Card */}
            <div className="squircle relative group border border-border bg-card overflow-hidden hover:border-foreground/30 transition-colors duration-200 shadow-none">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/campus/hero-showcase.jpg"
                  alt="Al-Birru Primary School Campus Life"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Standardized Image Badge */}
                <div className="squircle absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-amber-400">
                  <span>{t.hero.videoBadge}</span>
                </div>

                {/* Centered Play Trigger */}
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  aria-label={t.hero.videoWatchAction}
                  className="squircle absolute inset-0 m-auto size-14 bg-amber-400 hover:bg-amber-500 text-slate-950 flex items-center justify-center transition-all duration-200 transform group-hover:scale-105 active:scale-95 cursor-pointer shadow-none"
                >
                  <Play className="size-6 fill-current translate-x-0.5" />
                </button>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="font-bold truncate">
                    {t.hero.videoTitle}
                  </span>
                  <span className="text-zinc-300 ml-2 shrink-0">
                    {t.hero.videoDuration}
                  </span>
                </div>
              </div>
            </div>

            {/* Authentic Achievement Card */}
            <div className="squircle group border border-border bg-card p-6 flex items-center gap-4 hover:border-foreground/30 hover:bg-muted/20 transition-all duration-200 ease-out shadow-none">
              <div className="squircle relative size-16 shrink-0 overflow-hidden border border-border bg-muted">
                <Image
                  src="/images/achievements/regis-yasir-al-jabbar.png"
                  alt={t.hero.achievementStudent}
                  fill
                  sizes="64px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>

              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider truncate">
                    {t.hero.achievementBadge}
                  </span>
                  <Award className="size-4 text-amber-500 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200 ease-out" />
                </div>
                <p className="text-base font-bold text-foreground truncate mt-0.5">
                  {t.hero.achievementStudent}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {t.hero.achievementCompetition}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-slate-950 border-border text-white">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900">
            <DialogTitle className="text-sm font-bold font-mono tracking-tight text-white">
              {t.hero.videoTitle}
            </DialogTitle>
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center">
            <Image
              src="/images/campus/hero-showcase.jpg"
              alt="Video Preview"
              fill
              className="object-cover opacity-80"
            />
            <div className="relative z-10 flex flex-col items-center gap-3 text-center p-6 bg-slate-950/80 backdrop-blur-md rounded-lg border border-white/10 max-w-md">
              <div className="size-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Play className="size-5 fill-current translate-x-0.5" />
              </div>
              <p className="text-sm font-bold text-white">
                {t.hero.videoTitle}
              </p>
              <p className="text-xs text-zinc-300">
                {t.hero.videoModalDescription}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
