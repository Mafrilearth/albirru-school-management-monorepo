"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, ChevronRight, Newspaper, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { Badge } from "@/components/ui/badge";

export interface ArticlePreview {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  isoDate: string;
  code: string;
}

export const fallbackArticles: ArticlePreview[] = [
  {
    id: "1",
    title: "Gebyar Wisuda Tahfidz Angkatan Ke-IV: 35 Students Tuntaskan Ujian Tasmi'",
    slug: "gebyar-wisuda-tahfidz-angkatan-iv",
    category: "Prestasi",
    code: "WRT // 01",
    excerpt:
      "Sebanyak 35 students berhasil mengkhatamkan ujian hafalan Al-Qur'an dengan predikat Jayyid Jiddan disaksikan orang tua dan dewan asatidz.",
    date: "28 September 2026",
    isoDate: "2026-09-28",
  },
  {
    id: "2",
    title: "Kunjungan Edukasi Sains & Alam: Students Belajar Ekosistem Terapan",
    slug: "kunjungan-edukasi-sains-dan-alam",
    category: "Kegiatan",
    code: "WRT // 02",
    excerpt:
      "Tadabbur alam terpadu Curriculum Merdeka. Para students mengamati keanekaragaman flora dan fauna secara langsung di alam terbuka.",
    date: "15 September 2026",
    isoDate: "2026-09-15",
  },
  {
    id: "3",
    title: "Penerimaan Peserta Didik Baru (Admissions) 2026/2027 Phase I Dibuka",
    slug: "sosialisasi-ppdb-2026-2027-gelombang-1",
    category: "Pengumuman",
    code: "WRT // 03",
    excerpt:
      "Registration students baru telah dibuka dengan kuota terbatas maksimal 2 kelas demi menjaga kualitas rasio pendampingan 1:15.",
    date: "01 September 2026",
    isoDate: "2026-09-01",
  },
];

export function LatestNewsPreview() {
  return (
    <section aria-labelledby="latest-news-heading" className="py-28 md:py-36 lg:py-44 bg-transparent border-b border-slate-200/80 dark:border-slate-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with ScrollReveal */}
        <ScrollReveal
          direction="up"
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider mb-5 shadow-2xs">
              <span className="size-1.5 rounded-none bg-slate-400 dark:bg-slate-500 animate-pulse" />
              <span>WARTA // PUBLIKASI RESMI</span>
            </div>
            <h2 id="latest-news-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]">
              Kabar &amp; Prestasi Terkini
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Dokumentasi kegiatan students, prestasi hafalan Al-Qur&apos;an, dan pengumuman resmi SD Al-Birru.
            </p>
          </div>

          <Link
            href="/news"
            className="group inline-flex items-center gap-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold self-start md:self-auto rounded-none px-6 h-12 text-xs sm:text-sm transition-all hover:scale-[1.01] active:scale-[0.99] focus-visible:ring-4 focus-visible:ring-slate-200 outline-none shadow-2xs"
          >
            <span>Semua News &amp; Agenda</span>
            <ChevronRight className="size-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>

        {/* Clean Editorial Cards Grid with Structural 1px Exposed Grid */}
        <div className="relative mt-8">
          {/* Corner Crosshairs */}
          <div className="absolute -top-1.5 -left-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />
          <div className="absolute -top-1.5 -right-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />
          <div className="absolute -bottom-1.5 -left-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />
          <div className="absolute -bottom-1.5 -right-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
            {fallbackArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                aria-labelledby={`article-preview-title-${article.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="bg-white dark:bg-slate-950 p-7 sm:p-8 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors flex flex-col justify-between group"
              >
                <div>
                  {/* Clean Geometric Image Placeholder Container */}
                  <div className="relative aspect-[16/10] w-full rounded-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-6 flex flex-col items-center justify-center text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors overflow-hidden">
                    <div className="size-13 rounded-none bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 group-hover:scale-105 transition-all mb-2 shadow-2xs">
                      <Newspaper className="size-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      Dokumentasi Foto
                    </span>
                  </div>

                  {/* Category, Code & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-slate-400">
                        {article.code}
                      </span>
                      <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-wider rounded-none">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Calendar className="size-3 text-slate-400" />
                      <time dateTime={article.isoDate}>{article.date}</time>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 id={`article-preview-title-${article.id}`} className="text-lg sm:text-xl font-bold text-slate-950 dark:text-slate-50 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/news/${article.slug}`}>{article.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Action with micro-arrow */}
                <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-xs font-bold text-slate-900 dark:text-slate-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-slate-400 outline-none uppercase font-mono group/btn"
                  >
                    <span>Baca News</span>
                    <ArrowRight className="size-3.5 text-slate-400 group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <Sparkles className="size-3 text-slate-400" />
                    <span>3 MIN</span>
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
