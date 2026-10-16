"use client";

import { ArrowRight, Calendar, ChevronRight, Newspaper } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
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
    title: "Ujian Tasmi' Al-Qur'an: Santri Tuntaskan Hafalan Mutqin",
    slug: "grand-tahfidz-graduation-cohort-iv",
    category: "Prestasi",
    excerpt:
      "Santri menyelesaikan ujian tasmi' Al-Qur'an sekali duduk di hadapan dewan asatidz dan orang tua sebagai bentuk evaluasi mutqin hafalan.",
    date: "28 September 2026",
    isoDate: "2026-09-28",
  },
  {
    id: "2",
    title: "Eksplorasi Sains & Laboratorium Alam: Pengamatan Ekosistem Terbuka",
    slug: "science-and-nature-educational-visit",
    category: "Kegiatan",
    excerpt:
      "Pembelajaran tematik luar kelas di kebun sekolah. Santri mengamati langsung keanekaragaman flora dan fauna serta mempraktikkan metode observasi dasar.",
    date: "15 September 2026",
    isoDate: "2026-09-15",
  },
  {
    id: "3",
    title: "Penerimaan Peserta Didik Baru (PPDB) TA 2026/2027 Resmi Dibuka",
    slug: "admissions-2026-2027-phase-1-open",
    category: "Pengumuman",
    excerpt:
      "Pendaftaran calon santri baru SD Al-Birru telah dibuka. Dapatkan informasi kurikulum, proses observasi ramah anak, dan jadwal pendaftaran.",
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
      className="w-full bg-background border-b border-border"
    >
      {/* Header Cell — Full Width in Grid */}
      <div className="w-full p-6 sm:p-10 lg:p-12 border-b border-border flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
            Warta &amp; Informasi
          </span>
          <h2
            id="latest-news-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
            style={{ textWrap: "balance" }}
          >
            Kabar Sekolah &amp; Kegiatan Santri
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Dokumentasi agenda tahfidzul Qur&apos;an, kegiatan belajar, dan
            informasi kelembagaan resmi SD Al-Birru Sukabumi.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 font-mono">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 p-1 bg-muted/30 rounded-none border border-border">
            {categories.map((cat) => {
              const isCatActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer rounded-none transition-colors select-none",
                    isCatActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <Button
            render={<Link href="/news" />}
            nativeButton={false}
            variant="outline"
            size="sm"
            className="gap-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-none border-border hover:border-foreground bg-transparent active:scale-[0.98] transition-all px-4 py-2 shadow-none"
          >
            <span>Semua Berita</span>
            <ChevronRight data-icon="inline-end" className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* Articles Grid — Flush in Grid with 1px Shared Dividing Borders */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-card divide-y md:divide-y-0 md:divide-x divide-border">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 flex flex-col justify-between bg-card hover:bg-muted/10 transition-colors"
            >
              <div>
                {/* Visual Article Icon Box */}
                <div className="relative aspect-[16/10] w-full rounded-none bg-muted/20 border border-border mb-5 flex flex-col items-center justify-center text-muted-foreground">
                  <div className="size-10 rounded-none bg-muted/40 border border-border flex items-center justify-center text-foreground mb-2 shadow-none">
                    <Newspaper className="size-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Dokumentasi Sekolah
                  </span>
                </div>

                {/* Category & Date */}
                <div className="flex items-center justify-between gap-2 mb-3 font-mono text-[11px]">
                  <span className="px-2 py-0.5 rounded-none border border-border bg-muted/30 text-foreground font-bold uppercase tracking-wider text-[10px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="size-3 text-muted-foreground" />
                    <time dateTime={article.isoDate}>{article.date}</time>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-foreground hover:underline transition-colors line-clamp-2 leading-snug">
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
                <Link
                  href={`/news/${article.slug}`}
                  className="font-bold text-foreground hover:underline flex items-center gap-1.5 uppercase tracking-wider text-[11px] active:translate-x-0.5 transition-all"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="size-3" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
