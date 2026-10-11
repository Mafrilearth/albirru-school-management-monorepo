"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookMarked, Heart, Cpu, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

export function BentoValuesSection() {
  return (
    <section aria-labelledby="bento-values-heading" className="py-28 md:py-36 lg:py-44 bg-transparent border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 shadow-2xs text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-5">
            <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
            <span>KURIKULUM // 4 PILAR TERPADU</span>
          </div>
          <h2 id="bento-values-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]">
            Kerangka Pembelajaran Holistik
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">
            Struktur pengajaran yang memadukan kedalaman spiritual Al-Qur&apos;an, keluhuran adab,
            dan kelincahan nalar sains secara terukur.
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
            <article aria-labelledby="pillar-01-title" className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-12 flex flex-col justify-between relative group overflow-hidden">
              <BorderBeam size={220} duration={12} colorFrom="#f59e0b" colorTo="#334155" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                    PILAR 01
                  </span>
                  <BookMarked className="size-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 id="pillar-01-title" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                  Metode Talaqqi Bersanad &amp; Muroja&apos;ah Mandiri
                </h3>
                <p className="mt-5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Students dibimbing secara intensif dalam halaqah pagi untuk menguasai makharijul huruf
                  dan kaidah tajwid yang benar. Evaluasi hafalan dilakukan melalui ujian tasmi&apos;
                  terbuka per juz disaksikan langsung oleh orang tua.
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  <Badge variant="outline" className="bg-slate-900 border-slate-800 text-slate-300 font-mono rounded-none">
                    Talaqqi Asatidz Bersanad
                  </Badge>
                  <Badge variant="outline" className="bg-slate-900 border-slate-800 text-slate-300 font-mono rounded-none">
                    Tasmi&apos; Sekali Duduk
                  </Badge>
                </div>
              </div>
              <div className="mt-12 pt-6 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                <span className="text-xs text-slate-400 font-mono">Target: Juz 30, 29, 28</span>
                <Link
                  href="/programs"
                  className="text-xs font-bold text-slate-300 hover:text-amber-400 flex items-center gap-1.5 transition-colors group/link font-mono uppercase"
                >
                  <span>Silabus</span>
                  <ArrowRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>

            {/* Pillar 02: Adab & Akhlak (Span 5) */}
            <article aria-labelledby="pillar-02-title" className="lg:col-span-5 bg-white dark:bg-slate-950 p-8 sm:p-12 flex flex-col justify-between group hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                    PILAR 02
                  </span>
                  <Heart className="size-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 id="pillar-02-title" className="text-xl sm:text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug">
                  Habit-Forming &amp; 7 Kebiasaan Shalih
                </h3>
                <div className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                  Pembiasaan sholat dhuha dan dzuhur berjamaah,{" "}
                  <HoverCard>
                    <HoverCardTrigger className="underline decoration-dashed decoration-slate-400 underline-offset-4 cursor-help font-bold text-slate-900 dark:text-slate-100">
                      kultur 5S
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4 rounded-none border-slate-800" side="top">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                          <Heart className="size-4" /> Senyum, Salam, Sapa, Sopan, Santun
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Adab harian yang wajib diterapkan oleh seluruh students dan asatidz.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  , serta latihan kepedulian sosial melalui infaq pekanan dan
                  projek bakti orang tua (birrul walidain).
                </div>
              </div>
              <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500 uppercase">
                <span>Adab mendahului Ilmu Formal</span>
              </div>
            </article>

            {/* Pillar 03: Inkuiri Sains & Komputasi (Span 5) */}
            <article aria-labelledby="pillar-03-title" className="lg:col-span-5 bg-white dark:bg-slate-950 p-8 sm:p-12 flex flex-col justify-between group hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                    PILAR 03
                  </span>
                  <Cpu className="size-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 id="pillar-03-title" className="text-xl sm:text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug">
                  Inkuiri Sains &amp; Logika Koding Cilik
                </h3>
                <p className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                  Pembelajaran aktif berbasis Curriculum Merdeka yang memadukan eksplorasi praktikum
                  sains di laboratorium alam, pengenalan algoritma computational thinking, dan literasi
                  teknologi.
                </p>
              </div>
              <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500 uppercase">
                <span>Mengasah daya cipta masalah</span>
              </div>
            </article>

            {/* Pillar 04: Ekosistem School Sehat (Span 7) */}
            <article aria-labelledby="pillar-04-title" className="lg:col-span-7 bg-white dark:bg-slate-950 p-8 sm:p-12 flex flex-col justify-between group hover:bg-lime-50 dark:hover:bg-lime-950/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                    PILAR 04
                  </span>
                  <Sparkles className="size-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 id="pillar-04-title" className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug">
                  Rasio Terbatas &amp; Ekosistem Pembelajaran Sehat
                </h3>
                <p className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                  Pembatasan kuota kelas maksimal 20 students memastikan kedekatan emosional dan
                  pemantauan perkembangan unik setiap anak. Didukung ruang kelas ber-AC,
                  masjid representatif, perpustakaan baca, dan arena bermain terbuka yang aman.
                </p>
              </div>
              <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono uppercase">Maksimal 20 students/kelas</span>
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

