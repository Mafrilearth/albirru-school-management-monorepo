"use client";

import {
  ArrowRight,
  BookOpen,
  Cpu,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProgramKey = "tahfidz" | "adab" | "sains" | "rasio";

interface ProgramDetail {
  id: ProgramKey;
  label: string;
  badge: string;
  icon: typeof BookOpen;
  title: string;
  subtitle: string;
  description: string;
  metrics: { name: string; status: string; percent: number }[];
  tags: string[];
  linkHref: string;
  theme: {
    accentText: string;
    borderAccent: string;
    badgeClass: string;
    iconBoxClass: string;
    progressBar: string;
    linkClass: string;
    activeTabBg: string;
    activeTabHover: string;
  };
}

const programsData: Record<ProgramKey, ProgramDetail> = {
  tahfidz: {
    id: "tahfidz",
    label: "Tahfidz",
    badge: "PROGRAM UNGGULAN",
    icon: BookOpen,
    title: "Program Tahfidzul Qur'an",
    subtitle: "Bimbingan Tahfidz & Talaqqi Berjenjang",
    description:
      "Bimbingan halaqah Al-Qur'an dengan metode talaqqi bertahap. Santri dibimbing secara intensif untuk menumbuhkan kecintaan membaca, menghafal, dan memahami Al-Qur'an sejak usia dini.",
    metrics: [
      {
        name: "TAHSIN & MAKHARIJUL HURUF",
        status: "BIMBINGAN AKTIF",
        percent: 90,
      },
      {
        name: "HAFALAN AL-QUR'AN BERJENJANG",
        status: "PEMBIASAAN HARIAN",
        percent: 80,
      },
      {
        name: "MUTABA'AH & EVALUASI BERKALA",
        status: "TERPANTAU RUTIN",
        percent: 85,
      },
    ],
    tags: ["Talaqqi Intensif", "Bimbingan Asatidz", "Mutaba'ah Harian"],
    linkHref: "/programs#tahfidz",
    theme: {
      accentText: "text-foreground",
      borderAccent: "",
      badgeClass: "border-border bg-muted/40 text-foreground",
      iconBoxClass: "bg-muted/40 border-border text-foreground",
      progressBar: "bg-emerald-600",
      linkClass: "text-foreground hover:underline",
      activeTabBg: "bg-foreground text-background",
      activeTabHover: "hover:text-foreground",
    },
  },
  adab: {
    id: "adab",
    label: "Adab",
    badge: "FONDASI FITRAH",
    icon: Heart,
    title: "Adab Sebelum Ilmu & 7 Kebiasaan Mulia",
    subtitle: "Internalisasi Karakter Islami Sejak Dini",
    description:
      "Penanaman tata krama harian melalui shalat dhuha dan dzuhur berjamaah tepat waktu, budaya 5S (Senyum, Salam, Sapa, Sopan, Santun), serta proyek bakti birrul walidain.",
    metrics: [
      {
        name: "KEDISIPLINAN SHALAT TEPAT WAKTU",
        status: "98.8% KONSISTEN",
        percent: 99,
      },
      {
        name: "PRAKTIK BUDAYA 5S BERADAB",
        status: "PEMBIASAAN HARIAN",
        percent: 95,
      },
      {
        name: "PROYEK BIRRUL WALIDAIN",
        status: "PEKAN BAKTI ORANG TUA",
        percent: 90,
      },
    ],
    tags: ["5S Beradab", "Shalat Berjamaah", "Bakti Orang Tua"],
    linkHref: "/programs#adab",
    theme: {
      accentText: "text-foreground",
      borderAccent: "",
      badgeClass: "border-border bg-muted/40 text-foreground",
      iconBoxClass: "bg-muted/40 border-border text-foreground",
      progressBar: "bg-emerald-600",
      linkClass: "text-foreground hover:underline",
      activeTabBg: "bg-foreground text-background",
      activeTabHover: "hover:text-foreground",
    },
  },
  sains: {
    id: "sains",
    label: "Sains",
    badge: "STEM & NALAR KRITIS",
    icon: Cpu,
    title: "Inkuiri Sains Alam & Junior Coding",
    subtitle: "Kurikulum Merdeka + Eksplorasi Sains Terbuka",
    description:
      "Pembelajaran tematik berbasis rasa ingin tahu alami santri. Mengintegrasikan observasi sains alam terbuka, logika algoritma komputasi awal, dan penalaran kritis aplikatif.",
    metrics: [
      { name: "PRAKTIKUM SAINS LAB ALAM", status: "2X / PEKAN", percent: 85 },
      {
        name: "COMPUTATIONAL THINKING & LOGIKA",
        status: "JUNIOR SCRATCH",
        percent: 80,
      },
      {
        name: "PORTOFOLIO PROYEK INKUIRI",
        status: "PAMERAN KARYA",
        percent: 90,
      },
    ],
    tags: ["Lab Terbuka", "Junior Coding", "Nalar Kritis"],
    linkHref: "/programs#sains",
    theme: {
      accentText: "text-foreground",
      borderAccent: "",
      badgeClass: "border-border bg-muted/40 text-foreground",
      iconBoxClass: "bg-muted/40 border-border text-foreground",
      progressBar: "bg-emerald-600",
      linkClass: "text-foreground hover:underline",
      activeTabBg: "bg-foreground text-background",
      activeTabHover: "hover:text-foreground",
    },
  },
  rasio: {
    id: "rasio",
    label: "Rasio",
    badge: "EKOSISTEM PERSONAL",
    icon: Users,
    title: "Lingkungan Belajar Ramah Anak",
    subtitle: "Pendampingan Intensif & Kelas Kondusif",
    description:
      "Pembelajaran yang berpusat pada perkembangan santri dengan bimbingan terarah oleh guru. Didukung suasana belajar yang aman, sarana ibadah memadai, dan iklim interaksi yang positif.",
    metrics: [
      {
        name: "PENDAMPINGAN GURU",
        status: "OPTIMAL & INTENSIF",
        percent: 95,
      },
      { name: "SUASANA KELAS KONDUSIF", status: "RAMAH ANAK", percent: 90 },
      {
        name: "SARANA PENDIDIKAN",
        status: "TERPADU & AMAN",
        percent: 85,
      },
    ],
    tags: ["Kelas Kondusif", "Pendampingan Personal", "Ramah Anak"],
    linkHref: "/programs#fasilitas",
    theme: {
      accentText: "text-foreground",
      borderAccent: "",
      badgeClass: "border-border bg-muted/40 text-foreground",
      iconBoxClass: "bg-muted/40 border-border text-foreground",
      progressBar: "bg-emerald-600",
      linkClass: "text-foreground hover:underline",
      activeTabBg: "bg-foreground text-background",
      activeTabHover: "hover:text-foreground",
    },
  },
};

/**
 * HeroProgramShowcase — the interactive program switcher card.
 * Kept as a client component because it uses useState/motion.
 * Separated from the hero headline so the LCP text renders instantly
 * in the server-rendered HTML without waiting for JS hydration.
 */
export function HeroProgramShowcase() {
  const [activeTab, setActiveTab] = useState<ProgramKey>("tahfidz");
  const activeProgram = programsData[activeTab];
  const ActiveIcon = activeProgram.icon;

  return (
    <div className="lg:col-span-5 relative mt-8 lg:mt-0">
      {/* Main Interactive Showcase Card with Pure Flat Swiss Bento Architecture */}
      <Card className="rounded-none border border-border bg-card shadow-none overflow-hidden relative">
        {/* Program Switcher Tabs */}
        <div className="p-1 border-b border-border bg-muted/30 grid grid-cols-2 sm:grid-cols-4 gap-1 relative font-mono">
          {(["tahfidz", "adab", "sains", "rasio"] as const).map((key) => {
            const item = programsData[key];
            const Icon = item.icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={cn(
                  "relative flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer select-none rounded-none transition-colors active:scale-[0.98]",
                  isActive
                    ? "text-white font-bold"
                    : cn(
                        "text-muted-foreground hover:text-foreground hover:bg-muted/80",
                        item.theme.activeTabHover,
                      ),
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="heroTabActiveBg"
                    className={cn(
                      "absolute inset-0 rounded-none z-0",
                      item.theme.activeTabBg,
                    )}
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                    }}
                  />
                )}
                <Icon className="size-3.5 shrink-0 relative z-10" />
                <span className="truncate relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Panel with Smooth Spring Crossfade */}
        <CardContent className="p-6 sm:p-7 min-h-[360px] flex flex-col justify-between">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div
                  className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none font-mono text-[10px] font-bold uppercase tracking-widest border",
                    activeProgram.theme.badgeClass,
                  )}
                >
                  <Sparkles className="size-3" />
                  <span>{activeProgram.badge}</span>
                </div>
                <div
                  className={cn(
                    "size-8 rounded-none border flex items-center justify-center shadow-none",
                    activeProgram.theme.iconBoxClass,
                  )}
                >
                  <ActiveIcon className="size-4" />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  {activeProgram.title}
                </h2>
                <p
                  className={cn(
                    "mt-1 font-mono text-xs uppercase tracking-wider font-bold",
                    activeProgram.theme.accentText,
                  )}
                >
                  {activeProgram.subtitle}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {activeProgram.description}
                </p>
              </div>

              {/* Metric Indicators with Crisp Mathematical Gauges */}
              <div className="rounded-none border border-border bg-muted/20 p-3.5 flex flex-col gap-2.5">
                {activeProgram.metrics.map((metric) => (
                  <div
                    key={metric.name}
                    className="flex flex-col gap-1 text-[11px]"
                  >
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-muted-foreground text-[10px] uppercase tracking-wider">
                        {metric.name}
                      </span>
                      <span className="font-bold text-foreground text-[10px]">
                        {metric.status}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-none overflow-hidden">
                      <motion.div
                        className={cn(
                          "h-full rounded-none",
                          activeProgram.theme.progressBar,
                        )}
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.percent}%` }}
                        transition={{
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Program Tags */}
              <div className="flex flex-wrap gap-1.5 font-mono">
                {activeProgram.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-none border border-border bg-background text-[10px] text-muted-foreground uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Footer Action */}
          <div className="pt-4 border-t border-border flex items-center justify-between text-xs mt-3 font-mono">
            <span className="text-muted-foreground text-[10px] uppercase tracking-wider">
              Program Unggulan
            </span>
            <Link
              href={activeProgram.linkHref}
              className={cn(
                "font-bold flex items-center gap-1 uppercase tracking-wider text-[11px] active:translate-x-0.5 transition-all",
                activeProgram.theme.linkClass,
              )}
            >
              <span>Pelajari Rincian</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
