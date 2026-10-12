"use client";

import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Newspaper,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface ArticlePreview {
  id: string;
  title: string;
  slug: string;
  category: string;
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

export function LatestNewsPreview() {
  return (
    <section
      aria-labelledby="latest-news-heading"
      className="py-20 md:py-28 lg:py-32 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal
          direction="up"
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div className="max-w-xl">
            <Badge
              variant="outline"
              className="gap-2 px-3.5 py-1 mb-5 text-xs font-semibold rounded-full border-primary/30 text-primary bg-primary/5"
            >
              <span>PUBLIKASI RESMI</span>
            </Badge>
            <h2
              id="latest-news-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight"
            >
              Warta Terkini &amp; Prestasi
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Dokumentasi aktivitas santri, agenda tahfidz Al-Qur&apos;an, dan
              pengumuman kelembagaan resmi SD Al-Birru Sukabumi.
            </p>
          </div>

          <Button
            render={<Link href="/news" />}
            nativeButton={false}
            variant="outline"
            className="gap-2 font-semibold self-start md:self-auto"
          >
            <span>Seluruh Berita &amp; Artikel</span>
            <ChevronRight data-icon="inline-end" />
          </Button>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fallbackArticles.map((article) => (
            <Card
              key={article.id}
              className="p-6 sm:p-7 flex flex-col justify-between rounded-3xl border border-border hover:border-primary/40 transition-all hover:shadow-lg group overflow-hidden bg-card/90 shadow-xs"
            >
              <div>
                {/* Image Placeholder */}
                <div className="relative aspect-[16/10] w-full rounded-2xl bg-muted/60 border border-border/80 mb-6 flex flex-col items-center justify-center text-muted-foreground overflow-hidden group-hover:border-primary/30 transition-colors">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Newspaper className="size-6" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    Dokumentasi SD Al-Birru
                  </span>
                </div>

                {/* Category & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge
                    variant="secondary"
                    className="font-semibold text-xs text-primary bg-primary/10 border border-primary/20"
                  >
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="size-3 text-primary" />
                    <time dateTime={article.isoDate}>{article.date}</time>
                  </div>
                </div>

                {/* Title */}
                <h3
                  id={`article-preview-title-${article.id}`}
                  className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug"
                >
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Action */}
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs">
                <Link
                  href={`/news/${article.slug}`}
                  className="font-semibold text-primary hover:underline flex items-center gap-1.5"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <span className="text-muted-foreground flex items-center gap-1 text-[11px]">
                  <Sparkles className="size-3 text-primary" />
                  <span>3 MENIT</span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
