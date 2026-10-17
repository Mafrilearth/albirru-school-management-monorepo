"use client";

import {
  BookOpen,
  CheckCircle2,
  Cpu,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

/**
 * CurriculumSection — Interactive 3-Pillar Morphing Stage
 * Architecture: Out-of-the-Box Architectural Canvas (Zero Static Bento Box Repetition)
 * Standards:
 * - Interactive Pillar Tabs (Adab, Tahfidz, Science) morphing the main visual stage.
 * - Dynamic photographic evidence & competency matrix.
 * - Mathematical Invariants: py-16 sm:py-20 lg:py-24, max-w-[1440px], 1px border.
 */
export function CurriculumSection() {
  const { t } = useLanguage();
  const [activePillar, setActivePillar] = useState<
    "adab" | "tahfidz" | "science"
  >("tahfidz");

  const pillars = useMemo(
    () => ({
      adab: {
        id: "adab",
        code: "PILAR 01 // FOUNDATION",
        title: t.curriculum.pillar1Title,
        subtitle: t.curriculum.pillar1Description,
        badge: t.curriculum.pillar1Badge,
        image: "/images/facilities/classroom.jpg",
        caption: t.curriculum.characterSchedule,
        icon: HeartHandshake,
        competencies: [
          "Budaya 5S (Senyum, Salam, Sapa, Sopan, Santun)",
          "Pembiasaan Salat Berjamaah & Rawatib",
          "Kemandirian & Adab Makan Sehat",
          "Tanggung Jawab Pribadi & Lingkungan",
        ],
        verification: "Bimbingan Karakter Terpadu",
      },
      tahfidz: {
        id: "tahfidz",
        code: "PILAR 02 // REVELATION",
        title: t.curriculum.pillar2Title,
        subtitle: t.curriculum.pillar2Description,
        badge: t.curriculum.pillar2Badge,
        image: "/images/facilities/prayer-hall.jpg",
        caption: t.curriculum.tahfidzSchedule,
        icon: BookOpen,
        competencies: [
          "Metode Talaqqi Intensif Makharijul Huruf",
          "Target Hafalan Mutqin Juz 30, 29, dan 28",
          "Ujian Tasmi' Terbuka Sekali Duduk",
          "Sanad Bacaan Bersambung Resmi",
        ],
        verification: t.curriculum.mentorStatus,
      },
      science: {
        id: "science",
        code: "PILAR 03 // DISCOVERY",
        title: t.curriculum.pillar3Title,
        subtitle: t.curriculum.pillar3Description,
        badge: t.curriculum.pillar3Badge,
        image: "/images/facilities/science-lab.jpg",
        caption: t.curriculum.scienceSchedule,
        icon: Cpu,
        competencies: [
          "Inkuiri Eksperimen Sains Lingkungan Terbuka",
          "Pengenalan Komputasi & Robotika Dasar",
          "Literasi Numerasi Matematika Kontekstual",
          "Penguatan Nalar Kritis Kurikulum Nasional",
        ],
        verification: "Standar Kemendikbud Terakreditasi",
      },
    }),
    [t],
  );

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section
      id="curriculum"
      aria-labelledby="curriculum-title"
      className="w-full py-16 sm:py-20 lg:py-24 border-b border-border bg-background relative overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border border-border bg-muted/60 text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
            <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
            <span>{t.curriculum.badge}</span>
          </div>

          <h2
            id="curriculum-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
          >
            {t.curriculum.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.curriculum.subtitle}
          </p>
        </div>

        {/* Interactive Pillar Architecture: Left Controller, Right Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Pillar Navigation (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-between">
            {(
              [
                { key: "adab", data: pillars.adab },
                { key: "tahfidz", data: pillars.tahfidz },
                { key: "science", data: pillars.science },
              ] as const
            ).map(({ key, data }) => {
              const isActive = activePillar === key;
              const Icon = data.icon;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActivePillar(key)}
                  className={cn(
                    "p-6 rounded-lg text-start transition-all duration-200 cursor-pointer flex flex-col justify-between border relative overflow-hidden active:scale-[0.98]",
                    isActive
                      ? "border-amber-500/50 bg-card shadow-none"
                      : "border-border bg-card/40 hover:bg-muted/50 hover:border-foreground/20 text-muted-foreground",
                  )}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-widest uppercase",
                        isActive
                          ? "text-amber-500 font-bold"
                          : "text-muted-foreground",
                      )}
                    >
                      {data.code}
                    </span>
                    <div
                      className={cn(
                        "size-8 rounded-md border flex items-center justify-center transition-colors",
                        isActive
                          ? "border-amber-500/40 bg-amber-400/10 text-amber-500"
                          : "border-border bg-muted/30 text-muted-foreground",
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3
                    className={cn(
                      "text-base sm:text-lg font-bold tracking-tight transition-colors",
                      isActive ? "text-foreground" : "text-foreground/80",
                    )}
                  >
                    {data.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {data.subtitle}
                  </p>

                  {/* Active Border Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="pillar-active-rail"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"
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

          {/* Right Column: Dynamic Stage Morphing with Photographic & Competency Matrix (8 Columns) */}
          <div className="lg:col-span-8 rounded-lg border border-border bg-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative shadow-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Media Showcase with Subtle Zoom & Lens Overlay */}
                <div className="relative aspect-video w-full rounded-md overflow-hidden bg-slate-950 border border-border/80 group">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Lens Eyebrow Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-amber-400">
                    <CurrentIcon className="size-3.5" />
                    <span>{current.badge}</span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-4 inset-x-4 text-white text-xs font-mono flex items-center justify-between">
                    <span>{current.caption}</span>
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider">
                      SD Al-Birru Verified
                    </span>
                  </div>
                </div>

                {/* Content Breakdown & Competency Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-2">
                  <div>
                    <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-wider block mb-1">
                      {current.code}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                      {current.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {current.subtitle}
                    </p>
                  </div>

                  {/* Competency Checklist */}
                  <div className="flex flex-col gap-2.5 rounded-lg border border-border bg-muted/20 p-5">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground uppercase tracking-wider mb-1">
                      <Sparkles className="size-3.5 text-amber-500 shrink-0" />
                      <span>Matriks Capaian Santri:</span>
                    </div>
                    {current.competencies.map((comp) => (
                      <div
                        key={comp}
                        className="flex items-center gap-2 text-xs text-foreground/90 font-medium"
                      >
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                    <div className="mt-2 pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase">
                      <span>Verifikasi</span>
                      <span className="font-bold text-amber-500">
                        {current.verification}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
