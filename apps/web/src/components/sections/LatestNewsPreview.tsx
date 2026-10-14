"use client";

import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Newspaper,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ArticlePreview {
  id: string;
  title: string;
  slug: string;
  category: "Prestasi" | "Kegiatan" | "Pengumuman";
  excerpt: string;
  date: string;
  isoDate: string;
}

export const fallbackArticles: ArticlePreview[] = [
  {
    id: "1",
    title:
      "Wisuda Akbar Tahfidz Angkatan IV: 35 Santri Tuntaskan Ujian Tasmi' Sekali Duduk",
    slug: "grand-tahfidz-graduation-cohort-iv",
    category: "Prestasi",
    excerpt:
      "Sebanyak 35 santri berhasil menuntaskan hafalan Al-Qur'an mutqin dengan predikat memuaskan, disaksikan langsung oleh orang tua dan dewan asatidz.",
    date: "28 September 2026",
    isoDate: "2026-09-28",
  },
  {
    id: "2",
    title:
      "Eksplorasi Sains & Laboratorium Alam: Santri Meneliti Ekosistem Terbuka",
    slug: "science-and-nature-educational-visit",
    category: "Kegiatan",
    excerpt:
      "Pembelajaran tematik terpadu luar ruangan. Santri mengamati langsung keanekaragaman flora dan fauna serta mempraktikkan metode ilmiah dasar.",
    date: "15 September 2026",
    isoDate: "2026-09-15",
  },
  {
    id: "3",
    title:
      "Penerimaan Siswa Baru SD Al-Birru TA 2026/2027 Gelombang I Resmi Dibuka",
    slug: "admissions-2026-2027-phase-1-open",
    category: "Pengumuman",
    excerpt:
      "Penerimaan santri baru dibuka dengan batas kuota ketat 2 rombel (maksimal 40 santri) guna mempertahankan rasio pendampingan ideal 1:15.",
    date: "01 September 2026",
    isoDate: "2026-09-01",
  },
];

const categories = ["Semua", "Prestasi", "Kegiatan", "Pengumuman"] as const;
type CategoryFilter = (typeof categories)[number];

export function LatestNewsPreview() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Semua");

  const filteredArticles =
    activeCategory === "Semua"
      ? fallbackArticles
      : fallbackArticles.filter(
          (article) => article.category === activeCategory,
        );

  return (
    <section
      aria-labelledby="latest-news-heading"
      className="py-20 sm:py-28 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary">
              <Sparkles className="size-3.5" />
              <span>PUBLIKASI &amp; WARTA KAMPUS</span>
            </div>
            <h2
              id="latest-news-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight"
            >
              Warta Terkini &amp; Prestasi Santri.
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Dokumentasi aktivitas santri, agenda tahfidz Al-Qur&apos;an, dan
              pengumuman kelembagaan resmi SD Al-Birru Sukabumi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Category Filter Pills with Spring Indicator */}
            <div className="flex items-center gap-1.5 p-1.5 bg-muted/40 rounded-full border border-border relative">
              {categories.map((cat) => {
                const isCatActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "relative px-4 py-1.5 text-xs font-medium cursor-pointer rounded-full transition-colors active:scale-[0.96]",
                      isCatActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {isCatActive && (
                      <motion.span
                        layoutId="newsActivePill"
                        className="absolute inset-0 bg-background rounded-full shadow-xs z-0"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>

            <Button
              render={<Link href="/news" />}
              nativeButton={false}
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs font-semibold rounded-full border-border hover:bg-muted active:scale-[0.97] transition-all px-4"
            >
              <span>Semua Berita</span>
              <ChevronRight data-icon="inline-end" className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* Dynamic Articles Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              >
                <Card className="h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-border/80 bg-card/90 backdrop-blur-xl shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-200 group">
                  <div>
                    {/* Visual Placeholder Block */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl bg-muted/40 border border-border/70 mb-5 flex flex-col items-center justify-center text-muted-foreground group-hover:border-primary/30 group-hover:scale-[1.01] transition-all duration-200 overflow-hidden">
                      <div className="size-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2 shadow-xs">
                        <Newspaper className="size-5" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        Dokumentasi Resmi Al-Birru
                      </span>
                    </div>

                    {/* Category Badge & Date */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-[11px] font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="size-3.5 text-primary" />
                        <time dateTime={article.isoDate}>{article.date}</time>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read Action Footer */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                    <Link
                      href={`/news/${article.slug}`}
                      className="font-semibold text-primary hover:underline flex items-center gap-1.5 active:translate-x-0.5 transition-transform"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="size-3.5" />
                    </Link>

                    <span className="text-muted-foreground text-[11px]">
                      3 Menit Baca
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
