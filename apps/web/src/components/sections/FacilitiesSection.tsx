"use client";

import { Compass, Maximize2, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

/**
 * FacilitiesSection — Architectural Campus Monograph
 * Architecture: Out-of-the-Box Architectural Showcase (Zero Repetitive Card Grids)
 * Standards:
 * - Interactive Campus Masterplan Zone Selector.
 * - Cinematic full-width architectural frame with blueprint specs telemetry.
 * - Thumbnail tour navigation with smooth motion cross-fading.
 */
export function FacilitiesSection() {
  const { t } = useLanguage();
  const [selectedZone, setSelectedZone] = useState(0);

  const zones = useMemo(
    () => [
      {
        id: "prayer-hall",
        code: "ZONA 01 // SPIRITUAL",
        title: t.facilities.facility1Title,
        description: t.facilities.facility1Description,
        tag: t.facilities.facility1Tag,
        specs: t.facilities.prayerHallSpecs,
        image: "/images/facilities/prayer-hall.jpg",
        highlight: "Pusat Pembiasaan Salat Tepat Waktu & Halaqah Al-Qur'an",
      },
      {
        id: "classroom",
        code: "ZONA 02 // COGNITIVE",
        title: t.facilities.facility2Title,
        description: t.facilities.facility2Description,
        tag: t.facilities.facility2Tag,
        specs: t.facilities.classroomSpecs,
        image: "/images/facilities/classroom.jpg",
        highlight:
          "Pencahayaan Alami Optimal & Sirkulasi Udara Terstandarisasi",
      },
      {
        id: "science-lab",
        code: "ZONA 03 // INNOVATION",
        title: t.facilities.facility3Title,
        description: t.facilities.facility3Description,
        tag: t.facilities.facility3Tag,
        specs: t.facilities.scienceLabSpecs,
        image: "/images/facilities/science-lab.jpg",
        highlight: "Laboratorium Komputasi Interaktif & Eksperimen Sains",
      },
      {
        id: "sports-outdoor",
        code: "ZONA 04 // PHYSICAL",
        title: t.facilities.facility4Title,
        description: t.facilities.facility4Description,
        tag: t.facilities.facility4Tag,
        specs: t.facilities.sportsFieldSpecs,
        image: "/images/facilities/sports-outdoor.jpg",
        highlight:
          "Sarana Olahraga Panahan Sunnah & Ruang Terbuka Hijau Bebas Polusi",
      },
    ],
    [t],
  );

  const activeZone = zones[selectedZone] || zones[0];

  return (
    <section
      id="facilities"
      aria-labelledby="facilities-title"
      className="w-full py-16 sm:py-20 lg:py-24 border-b border-border bg-background relative overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border border-border bg-muted/60 text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.facilities.badge}</span>
            </div>

            <h2
              id="facilities-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
            >
              {t.facilities.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.facilities.subtitle}
            </p>
          </div>

          {/* Institutional Maintenance Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border border-border bg-card font-mono text-xs text-muted-foreground shrink-0">
            <Sparkles className="size-4 text-amber-500" />
            <span>{t.facilities.maintenanceLabel}:</span>
            <span className="font-bold text-foreground">
              {t.facilities.maintenanceStatus}
            </span>
          </div>
        </div>

        {/* Masterplan Zone Selector Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {zones.map((zone, idx) => {
            const isSelected = selectedZone === idx;
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setSelectedZone(idx)}
                className={cn(
                  "p-4 rounded-lg text-start transition-all duration-200 border cursor-pointer relative overflow-hidden active:scale-[0.98]",
                  isSelected
                    ? "border-amber-500/60 bg-card shadow-none"
                    : "border-border bg-muted/20 hover:bg-muted/50 hover:border-foreground/20 text-muted-foreground",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-widest uppercase block mb-1",
                    isSelected
                      ? "text-amber-500 font-bold"
                      : "text-muted-foreground",
                  )}
                >
                  {zone.code}
                </span>
                <span className="text-xs sm:text-sm font-bold text-foreground truncate block">
                  {zone.title}
                </span>

                {/* Bottom Active Indicator Line */}
                {isSelected && (
                  <motion.div
                    layoutId="zone-active-indicator"
                    className="absolute bottom-0 inset-x-0 h-1 bg-amber-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Cinematic Architectural Frame */}
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8 overflow-hidden shadow-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Media Viewport (7 Columns) */}
              <div className="lg:col-span-7 relative aspect-video w-full rounded-md overflow-hidden bg-slate-950 border border-border/80 group">
                <Image
                  src={activeZone.image}
                  alt={activeZone.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Lens Telemetry */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-amber-400">
                  <Compass className="size-3.5" />
                  <span>{activeZone.tag}</span>
                </div>

                {/* Bottom Blueprint Telemetry */}
                <div className="absolute bottom-4 inset-x-4 text-white text-xs font-mono flex items-center justify-between">
                  <span className="truncate pr-2">{activeZone.specs}</span>
                  <span className="text-[10px] text-white/60 uppercase font-mono shrink-0">
                    KAMPUS CICANTAYAN
                  </span>
                </div>
              </div>

              {/* Architectural Description & Telemetry Breakdown (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest block mb-1">
                    {activeZone.code}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    {activeZone.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {activeZone.description}
                  </p>
                </div>

                {/* Environment Blueprint Specifications */}
                <div className="rounded-lg border border-border bg-muted/20 p-5 flex flex-col gap-3 font-mono">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider">
                    <Maximize2 className="size-3.5 text-amber-500 shrink-0" />
                    <span>Spesifikasi Lingkungan Belajar:</span>
                  </div>
                  <p className="text-xs text-foreground/90 font-medium font-sans leading-relaxed">
                    {activeZone.highlight}
                  </p>
                  <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground uppercase">
                    <span>Standar Kelaikan</span>
                    <span className="font-bold text-emerald-500">
                      Higienis &amp; Ramah Anak
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
