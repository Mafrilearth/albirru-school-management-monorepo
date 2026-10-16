"use client";

import {
  ArrowRight,
  BookOpen,
  Calendar,
  ImageIcon,
  Search,
  Tag,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import type { Article } from "@/lib/content";
import { cn } from "@/lib/utils";

interface NewsArchiveGridProps {
  articles: Article[];
}

const categories = [
  { id: "all", label: "Semua Kategori" },
  { id: "tahfidz", label: "Tahfidz & Keislaman" },
  { id: "achievements", label: "Prestasi Siswa" },
  { id: "activities", label: "Kegiatan Sekolah" },
  { id: "announcements", label: "Pengumuman Resmi" },
];

export function NewsArchiveGrid({ articles }: NewsArchiveGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return articles.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = filteredArticles[0];
  const regularArticles = filteredArticles.slice(1);

  return (
    <div className="flex flex-col gap-10 md:gap-12">
      <h2 id="news-archive-heading" className="sr-only">
        Arsip &amp; Indeks Berita Sekolah
      </h2>

      {/* Search & Category Filter Bar */}
      <div className="border border-border bg-card/60 p-4 sm:p-6 rounded-none relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Buttons */}
          <div
            role="group"
            aria-label="Filter Kategori Berita"
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider rounded-none border transition-colors cursor-pointer",
                    isActive
                      ? "bg-foreground text-background border-foreground font-bold"
                      : "bg-background border-border text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
            />
            <Input
              type="text"
              placeholder="Cari berita..."
              aria-label="Cari berita berdasarkan kata kunci"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 text-xs rounded-none border-border font-mono"
            />
          </div>
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="flex flex-col gap-10">
          {/* Featured Headline Article */}
          {featuredArticle && !searchQuery && selectedCategory === "all" && (
            <motion.article
              aria-labelledby="featured-headline-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="border border-border bg-card/60 rounded-none relative group hover:border-foreground/30 transition-colors overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-6 sm:p-8 lg:p-10">
                  {/* Left Column: Image Placeholder */}
                  <div className="lg:col-span-5">
                    <figure className="aspect-[16/10] w-full rounded-none bg-muted/40 flex flex-col items-center justify-center text-muted-foreground border border-border relative">
                      <ImageIcon
                        aria-hidden="true"
                        className="size-10 text-muted-foreground/60 mb-1"
                      />
                      <figcaption className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                        Berita Utama
                      </figcaption>
                    </figure>
                  </div>

                  {/* Right Column: Editorial Headline */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider bg-muted/40 border border-border text-foreground font-bold">
                          {featuredArticle.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                          <Calendar
                            aria-hidden="true"
                            className="size-3.5 text-primary"
                          />
                          <time dateTime={featuredArticle.publishedDate}>
                            {featuredArticle.formattedDate}
                          </time>
                        </div>
                      </div>

                      <h3
                        id="featured-headline-title"
                        className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground hover:text-primary transition-colors tracking-tight leading-snug"
                      >
                        <Link href={`/news/${featuredArticle.slug}`}>
                          {featuredArticle.title}
                        </Link>
                      </h3>

                      <p className="mt-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {featuredArticle.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4">
                      <address className="not-italic flex items-center gap-2 text-xs text-muted-foreground font-mono">
                        <User
                          aria-hidden="true"
                          className="size-3.5 text-muted-foreground"
                        />
                        <span>Oleh: {featuredArticle.author}</span>
                      </address>

                      <Link
                        href={`/news/${featuredArticle.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors"
                      >
                        <span>Baca Selengkapnya</span>
                        <ArrowRight aria-hidden="true" className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Regular Articles List */}
          <ul
            aria-label="Daftar Berita Sekolah"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 list-none p-0"
          >
            {(searchQuery || selectedCategory !== "all"
              ? filteredArticles
              : regularArticles
            ).map((article, idx) => (
              <li key={article.id} className="flex">
                <motion.article
                  aria-labelledby={`article-${article.id}-title`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: idx * 0.04,
                  }}
                  className="flex-1 flex"
                >
                  <div className="flex-1 flex flex-col justify-between border border-border bg-card/60 rounded-none hover:border-foreground/30 transition-colors relative group">
                    <div>
                      {/* Image Placeholder */}
                      <figure className="relative aspect-[16/10] w-full bg-muted/40 flex flex-col items-center justify-center text-muted-foreground border-b border-border">
                        <ImageIcon
                          aria-hidden="true"
                          className="size-8 text-muted-foreground/60 mb-1"
                        />
                        <figcaption className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                          Dokumentasi
                        </figcaption>
                      </figure>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 mb-3 font-mono">
                          <span className="inline-flex px-2 py-0.5 text-[10px] uppercase tracking-wider bg-muted/40 border border-border text-foreground font-bold">
                            {article.categoryLabel}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar
                              aria-hidden="true"
                              className="size-3 text-primary"
                            />
                            <time dateTime={article.publishedDate}>
                              {article.formattedDate}
                            </time>
                          </div>
                        </div>

                        <h3
                          id={`article-${article.id}-title`}
                          className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug tracking-tight"
                        >
                          <Link href={`/news/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>

                        <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-border flex items-center justify-between font-mono text-xs">
                      <Link
                        href={`/news/${article.slug}`}
                        className="font-bold text-primary hover:text-foreground flex items-center gap-1 group/link"
                      >
                        <span>Baca Selengkapnya</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="size-3 group-hover/link:translate-x-0.5 transition-transform"
                        />
                      </Link>

                      <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Tag aria-hidden="true" className="size-3" />
                        <span>{article.tags[0]}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center border border-border bg-card/60 rounded-none">
          <BookOpen
            aria-hidden="true"
            className="size-12 text-muted-foreground mx-auto mb-3"
          />
          <h3 className="text-lg font-bold text-foreground">
            Tidak ada berita yang sesuai pencarian
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-sm mx-auto leading-relaxed">
            Silakan coba kata kunci pencarian lain atau pilih kategori berita
            yang berbeda.
          </p>
        </div>
      )}
    </div>
  );
}
