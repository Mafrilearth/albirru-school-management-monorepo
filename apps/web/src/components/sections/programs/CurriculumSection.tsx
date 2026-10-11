"use client";

import React, { useState } from "react";
import {
  BookMarked,
  BookOpen,
  Heart,
  Globe2,
  CheckCircle2,
  Sparkles,
  Award,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";
import { appleSpring, appleTapHaptic } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface CurriculumPillar {
  id: string;
  code: string;
  title: string;
  icon: React.ElementType;
  badge: string;
  description: string;
  target: string;
  schedule: string;
  highlights: string[];
}

const pillars: CurriculumPillar[] = [
  {
    id: "tahfidz",
    code: "KUR // 01",
    title: "Curriculum Tahfidzul Qur'an",
    icon: BookMarked,
    badge: "Keunggulan Khas",
    description:
      "Program hafalan Al-Qur'an intensif dengan metode Talaqqi dan Muroja'ah mandiri. Menekankan ketepatan makharijul huruf, tajwid bersanad, dan pemahaman makna ayat pilihan.",
    target: "Target Lulusan: Minimal 3 Juz Mutqin (Juz 30, 29, 28) + 40 Hadits Pilihan",
    schedule: "Senin – Jumat | 07.15 – 08.45 WIB (Halaqah Pagi)",
    highlights: [
      "Metode Talaqqi harian bersama asatidz pemegang sanad Al-Qur'an",
      "Setoran hafalan baru (ziyadah) dan pengulangan terprogram (muroja'ah)",
      "Buku mutaba'ah harian yang terhubung langsung dengan wali students",
      "Ujian Tasmi' sekali duduk per juz disaksikan orang tua",
      "Wisuda Akbar Tahfidz dengan sertifikasi syahadah resmi kelulusan",
    ],
  },
  {
    id: "merdeka",
    code: "KUR // 02",
    title: "Curriculum Merdeka Nasional",
    icon: BookOpen,
    badge: "Standar Kemdikdasmen",
    description:
      "Menerapkan struktur Curriculum Merdeka yang fleksibel dan berfokus pada materi esensial, pengembangan karakter Pancasila, serta kompetensi literasi dan numerasi siswa secara mendalam.",
    target: "Target Capaian: Kemandirian Nalar Kritis & Penguasaan Konseptual Sains",
    schedule: "Senin – Kamis | 09.00 – 14.15 WIB (Pembelajaran Tematik)",
    highlights: [
      "Pembelajaran diferensiasi yang menghargai keunikan kecepatan belajar anak",
      "Projek P5 bertema kelestarian alam, adab sosial, dan rekayasa teknologi sederhana",
      "Praktikum sains terapan di laboratorium alam school",
      "Asesmen diagnostik berkala tanpa pembebanan ranking kaku",
      "Pengembangan literasi bedah buku cerita anak setiap pekan",
    ],
  },
  {
    id: "adab",
    code: "KUR // 03",
    title: "Pembiasaan Adab & Karakter",
    icon: Heart,
    badge: "Kultivasi Akhlak",
    description:
      "Pendidikan adab sebelum ilmu. Menanamkan 7 kebiasaan shalih harian agar nilai-nilai Islam mendarah daging dalam tingkah laku students sehari-hari baik di school maupun di rumah.",
    target: "Target Capaian: Akhlakul Karimah, Mandiri, dan Berbakti kepada Orang Tua",
    schedule: "Sepanjang Hari Belajar (Budaya Hidup School)",
    highlights: [
      "Pelaksanaan Sholat Dhuha harian dan Sholat Dzuhur berjamaah tepat waktu",
      "Praktek adab harian: adab makan, adab berteman, adab kepada orang tua & teachers",
      "Gerakan Budaya 5S (Senyum, Salam, Sapa, Sopan, Santun) di gerbang",
      "Infaq & Sedekah Subuh pekanan untuk mengasah empati sosial",
      "Pekan Kemandirian ibadah dan pembinaan kedisiplinan positif",
    ],
  },
  {
    id: "bahasa",
    code: "KUR // 04",
    title: "Bahasa & Literasi Digital",
    icon: Globe2,
    badge: "Wawasan Global",
    description:
      "Membekali students dengan kemampuan komunikasi dwibahasa (Arab - Inggris) dasar yang aplikatif, serta pengenalan logika algoritma komputer sejak usia dini.",
    target: "Target Capaian: Percakapan Harian Aktif & Melek Digital Sehat",
    schedule: "Terintegrasi dalam Halaqah Bahasa & Praktikum Komputer",
    highlights: [
      "Arabic Day & English Day tematik dengan kosakata lingkungan students",
      "Pengenalan dasar komputasi dan pemecahan masalah (coding unplugged)",
      "Pemanfaatan media multimedia untuk visualisasi materi sains",
      "Edukasi etika digital dan bahaya ketergantungan gawai pada anak",
      "Lomba pidato 3 bahasa dan storytelling pada pekan ekspresi students",
    ],
  },
];

export function CurriculumSection() {
  const [activeTab, setActiveTab] = useState<string>("tahfidz");
  const selectedPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const Icon = selectedPillar.icon;

  return (
    <section
      aria-labelledby="curriculum-heading"
      className="py-28 md:py-36 lg:py-44 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-700/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-16 md:mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-slate-100 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
            <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
            <span>AKADEMIK // STRUKTUR SILABUS TERINTEGRASI</span>
          </div>
          <h2
            id="curriculum-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]"
          >
            Sinergi Curriculum Merdeka &amp; Kepesantrenan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Dirancang secara holistik agar students tidak hanya kokoh dalam hafalan Al-Qur&apos;an,
            namun juga unggul secara akademik dan lincah bernalar sains.
          </p>
        </ScrollReveal>

        {/* WAI-ARIA Sliding Tab Bar */}
        <div
          role="tablist"
          aria-label="Pilihan Pilar Curriculum Unggulan"
          className="flex flex-wrap items-center gap-2.5 p-2 rounded-none bg-slate-100/90 border border-slate-200/80 dark:border-slate-700/80 max-w-4xl mb-16"
        >
          {pillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                role="tab"
                id={`curriculum-tab-${pillar.id}`}
                aria-selected={isActive}
                aria-controls={`curriculum-panel-${pillar.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(pillar.id)}
                className={cn(
                  "relative flex items-center gap-2.5 px-5 py-3 rounded-none text-xs sm:text-sm font-bold transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                  isActive ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-50"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-curriculum-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-none bg-slate-950 shadow-md"
                  />
                )}
                <PillarIcon
                  aria-hidden="true"
                  className={cn(
                    "size-4.5 relative z-10 transition-colors",
                    isActive ? "text-amber-400" : "text-slate-400"
                  )}
                />
                <span className="relative z-10">{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Blueprint Frame with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPillar.id}
            role="tabpanel"
            id={`curriculum-panel-${selectedPillar.id}`}
            aria-labelledby={`curriculum-tab-${selectedPillar.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.08)"
              className="p-8 sm:p-12 lg:p-16 bg-[#FDFDFB] dark:bg-slate-950 shadow-2xs hover:shadow-xl transition-all relative rounded-none"
            >
              <BorderBeam size={240} duration={12} colorFrom="#f59e0b" colorTo="#10b981" />

              <article
                aria-labelledby={`pillar-title-${selectedPillar.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10"
              >
                {/* Left Column: Description, Badge & Schedule */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        aria-hidden="true"
                        className="size-16 rounded-none bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-2xs"
                      >
                        <Icon className="size-8" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider font-mono">
                          {`${selectedPillar.code} // ${selectedPillar.badge}`}
                        </span>
                        <h3
                          id={`pillar-title-${selectedPillar.id}`}
                          className="text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug"
                        >
                          {selectedPillar.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                      {selectedPillar.description}
                    </p>
                  </div>

                  {/* Operational Rhythm Widget: Semantic Definition List */}
                  <dl className="mt-10 space-y-3.5">
                    <div className="p-5 rounded-none bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex items-start gap-3.5">
                      <Clock aria-hidden="true" className="size-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <dt className="block text-[11px] font-bold text-slate-400 uppercase font-mono tracking-wider">
                          Waktu Operasional
                        </dt>
                        <dd className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                          {selectedPillar.schedule}
                        </dd>
                      </div>
                    </div>

                    <div className="p-5 rounded-none bg-amber-50/80 border border-amber-200/80 flex items-start gap-3.5">
                      <Award aria-hidden="true" className="size-5 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <dt className="block text-[11px] font-bold text-amber-900 uppercase font-mono tracking-wider">
                          Standar Capaian
                        </dt>
                        <dd className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-50 mt-0.5">
                          {selectedPillar.target}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                {/* Right Column: Key Strategy Highlights */}
                <div className="lg:col-span-7">
                  <h4
                    id={`strategy-heading-${selectedPillar.id}`}
                    className="text-sm font-bold text-slate-950 dark:text-slate-50 uppercase tracking-wider font-mono mb-5 flex items-center gap-2"
                  >
                    <Sparkles aria-hidden="true" className="size-4.5 text-amber-500" />
                    <span>STRATEGI &amp; AKTIVITAS PEMBELAJARAN:</span>
                  </h4>

                  <ul
                    aria-labelledby={`strategy-heading-${selectedPillar.id}`}
                    className="space-y-3.5 list-none p-0"
                    role="list"
                  >
                    {selectedPillar.highlights.map((item, idx) => (
                      <li key={idx}>
                        <motion.div
                          whileHover={{ x: 4, transition: { duration: 0.2 } }}
                          className="flex items-start gap-4 p-5 rounded-none bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:border-slate-300 dark:border-slate-600 transition-all group"
                        >
                          <CheckCircle2
                            aria-hidden="true"
                            className="size-5 text-emerald-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                          />
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            {item}
                          </p>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

