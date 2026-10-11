"use client";

import React from "react";
import {
  Target,
  Shield,
  Compass,
  Cpu,
  Feather,
  Languages,
  Calendar,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";
import { cn } from "@/lib/utils";

interface ExtracurricularItem {
  code: string;
  title: string;
  category: string;
  schedule: string;
  description: string;
  icon: React.ElementType;
  glow: string;
  borderColor: string;
  featured?: boolean;
}

const extracurriculars: ExtracurricularItem[] = [
  {
    code: "EKS // 01",
    title: "Panahan Tradisional (Archery Sunnah)",
    category: "Olahraga Sunnah",
    schedule: "Setiap Sabtu Pagi",
    description:
      "Melatih konsentrasi, ketenangan emosi, kekuatan postur bahu, dan keselarasan fokus students sesuai sunnah Rasulullah ﷺ dengan bantalan target panahan standar aman.",
    icon: Target,
    glow: "rgba(245, 158, 11, 0.12)",
    borderColor: "rgba(245, 158, 11, 0.35)",
    featured: true,
  },
  {
    code: "EKS // 02",
    title: "Pencak Silat / Tapak Suci",
    category: "Bela Diri & Karakter",
    schedule: "Setiap Kamis Sore",
    description:
      "Membentuk postur tubuh yang tangguh, kebugaran kardio, serta menanamkan etika ksatria dan perlindungan diri tanpa kesombongan.",
    icon: Shield,
    glow: "rgba(16, 185, 129, 0.1)",
    borderColor: "rgba(16, 185, 129, 0.35)",
  },
  {
    code: "EKS // 03",
    title: "Sains Cilik & Robotik Dasar",
    category: "Teknologi & Kreativitas",
    schedule: "Setiap Selasa Sore",
    description:
      "Eksperimen sains aplikatif yang mengasyikkan, perakitan mekanika sederhana, dan pengenalan algoritma logika pemecahan masalah.",
    icon: Cpu,
    glow: "rgba(168, 85, 247, 0.1)",
    borderColor: "rgba(168, 85, 247, 0.35)",
  },
  {
    code: "EKS // 04",
    title: "Pramuka Islam Terpadu (SIT)",
    category: "Kepemimpinan & Alam",
    schedule: "Setiap Jumat Siang",
    description:
      "Latihan kepanduan bernafaskan Islam: tali-temali, navigasi arah kiblat, sandi morse, cinta kelestarian alam, dan kemah ibadah.",
    icon: Compass,
    glow: "rgba(14, 165, 233, 0.1)",
    borderColor: "rgba(14, 165, 233, 0.35)",
  },
  {
    code: "EKS // 05",
    title: "Seni Kaligrafi Khat & Tilawah",
    category: "Seni Islam & Estetika",
    schedule: "Setiap Rabu Sore",
    description:
      "Mengasah kehalusan rasa estetika melalui kaidah penulisan huruf Al-Qur'an (khat naskhi/riq'ah) serta seni lagu tilawah Al-Qur'an.",
    icon: Feather,
    glow: "rgba(244, 63, 94, 0.1)",
    borderColor: "rgba(244, 63, 94, 0.35)",
  },
  {
    code: "EKS // 06",
    title: "Bilingual Public Speaking Club",
    category: "Bahasa & Percakapan",
    schedule: "Setiap Senin Sore",
    description:
      "Membangun rasa percaya diri students dalam berpidato, mendongeng, dan berdialog santai dalam Bahasa Arab dan Bahasa Inggris sederhana.",
    icon: Languages,
    glow: "rgba(245, 158, 11, 0.1)",
    borderColor: "rgba(245, 158, 11, 0.35)",
  },
];

export function ExtracurricularSection() {
  return (
    <section
      aria-labelledby="extracurricular-heading"
      className="py-28 md:py-36 lg:py-44 bg-[#FDFDFB] dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-700/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-16 md:mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs text-slate-800 dark:text-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
            <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
            <span>PENGEMBANGAN // BAKAT &amp; MINAT SANTRI</span>
          </div>
          <h2
            id="extracurricular-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]"
          >
            Extracurriculars Pilihan &amp; Olahraga Sunnah
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Menumbuhkan ketangkasan fisik, ketajaman konsentrasi, serta kepemimpinan students
            di bawah asuhan pelatih dan asatidz berpengalaman.
          </p>
        </ScrollReveal>

        {/* Semantic Extracurricular Grid */}
        <ul
          aria-labelledby="extracurricular-heading"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 items-stretch list-none p-0"
          role="list"
        >
          {extracurriculars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li
                key={idx}
                className={cn("flex", item.featured && "md:col-span-2 lg:col-span-2")}
              >
                <motion.article
                  aria-labelledby={`ekskul-${idx}-title`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="flex-1 flex"
                >
                  <SpotlightCard
                    spotlightColor={item.glow}
                    borderColor={item.borderColor}
                    className="p-8 sm:p-9 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-xl transition-all flex-1 flex flex-col justify-between relative group rounded-none"
                  >
                    {item.featured && (
                      <BorderBeam size={220} duration={12} colorFrom="#f59e0b" colorTo="#10b981" />
                    )}

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-slate-400">
                            {item.code}
                          </span>
                          <span className="inline-block px-3 py-1 rounded-none text-[11px] font-semibold bg-slate-100 text-slate-700 dark:text-slate-300 font-mono">
                            {item.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                          <Calendar aria-hidden="true" className="size-3.5 text-slate-400" />
                          <span>{item.schedule}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div
                          aria-hidden="true"
                          className="size-13 rounded-none bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform shadow-2xs"
                        >
                          <Icon className="size-6.5" />
                        </div>
                        <h3
                          id={`ekskul-${idx}-title`}
                          className="text-lg sm:text-xl font-bold text-slate-950 dark:text-slate-50 group-hover:text-amber-800 transition-colors leading-snug"
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <footer className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <div className="flex items-center gap-1.5 text-amber-700 font-semibold">
                        <Sparkles aria-hidden="true" className="size-3.5 text-amber-500" />
                        <span>Pelatih Bersertifikasi Resmi</span>
                      </div>
                      <span className="text-slate-400">KUOTA TERJADWAL</span>
                    </footer>
                  </SpotlightCard>
                </motion.article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
