"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calendar,
  Search,
  ArrowRight,
  User,
  Tag,
  BookOpen,
  Sparkles,
  ImageIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "@/components/ui/input";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";
import { Article } from "@/lib/content";
import { cn } from "@/lib/utils";

interface NewsArchiveGridProps {
  articles: Article[];
}

const categories = [
  { id: "all", label: "Semua Kategori" },
  { id: "tahfidz", label: "Tahfidz & Keislaman" },
  { id: "prestasi", label: "Prestasi Students" },
  { id: "kegiatan", label: "News Kegiatan" },
  { id: "pengumuman", label: "Pengumuman Resmi" },
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
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = filteredArticles[0];
  const regularArticles = filteredArticles.slice(1);

  return (
    <div className="space-y-14 md:space-y-16">
      <h2 id="news-archive-heading" className="sr-only">Arsip &amp; Indeks News School</h2>

      {/* Search & Category Filter Bar */}
      <div
        role="search"
        aria-label="Pencarian dan Filter News"
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-7 rounded-none bg-[#FDFDFB] dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-2xs"
      >
        {/* Animated Category Pills with layoutId */}
        <div
          role="group"
          aria-label="Pilihan Kategori News"
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
                  "relative px-4 py-2.5 rounded-none text-xs font-bold transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-amber-500 font-mono",
                  isActive ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-50"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-news-category-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-none bg-slate-950 shadow-sm"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input Box */}
        <div className="relative w-full md:w-80">
          <Search aria-hidden="true" className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <Input
            type="text"
            placeholder="Search kata kunci berita..."
            aria-label="Search kata kunci berita"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 rounded-none border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-50 placeholder:text-slate-400 focus-visible:ring-amber-500 font-sans shadow-2xs"
          />
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="space-y-14">
          {/* Featured Headline Article (Wide Hero Card) */}
          {featuredArticle && !searchQuery && selectedCategory === "all" && (
            <motion.article
              aria-labelledby="featured-headline-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SpotlightCard
                spotlightColor="rgba(245, 158, 11, 0.1)"
                className="p-8 sm:p-12 lg:p-14 bg-slate-950 text-white border-slate-800 shadow-md relative overflow-hidden group rounded-none"
              >
                <BorderBeam size={240} duration={12} colorFrom="#f59e0b" colorTo="#10b981" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                  {/* Left Column: Image Placeholder */}
                  <div className="lg:col-span-5">
                    <figure className="aspect-[16/10] w-full rounded-none bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-slate-500 group-hover:bg-slate-850 transition-colors overflow-hidden">
                      <ImageIcon aria-hidden="true" className="size-12 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-300" />
                      <figcaption className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 font-mono">
                        Liputan Utama
                      </figcaption>
                    </figure>
                  </div>

                  {/* Right Column: Editorial Headline */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-none bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
                          {featuredArticle.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar aria-hidden="true" className="size-3.5 text-amber-500" />
                          <time dateTime={featuredArticle.publishedDate}>
                            {featuredArticle.formattedDate}
                          </time>
                        </div>
                      </div>

                      <h3
                        id="featured-headline-title"
                        className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-amber-400 transition-colors tracking-tight leading-snug"
                      >
                        <Link href={`/news/${featuredArticle.slug}`}>
                          {featuredArticle.title}
                        </Link>
                      </h3>

                      <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                        {featuredArticle.summary}
                      </p>
                    </div>

                    <footer className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                      <address className="not-italic flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <User aria-hidden="true" className="size-3.5 text-slate-500" />
                        <span>Oleh: {featuredArticle.author}</span>
                      </address>

                      <Link
                        href={`/news/${featuredArticle.slug}`}
 className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 h-11 rounded-none text-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>Baca News Lengkap</span>
                        <ArrowRight aria-hidden="true" className="size-3.5" />
                      </Link>
                    </footer>
                  </div>
                </div>
              </SpotlightCard>
            </motion.article>
          )}

          {/* Regular Articles Semantic List */}
          <ul
            aria-label="Register News School"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 list-none p-0"
            role="list"
          >
            {(searchQuery || selectedCategory !== "all"
              ? filteredArticles
              : regularArticles
            ).map((article, idx) => (
              <li key={article.id} className="flex">
                <motion.article
                  aria-labelledby={`article-${article.id}-title`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="flex-1 flex"
                >
                  <SpotlightCard
                    spotlightColor="rgba(245, 158, 11, 0.08)"
                    className="p-7 sm:p-8 bg-[#FDFDFB] dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-700 dark:bg-slate-900 shadow-2xs hover:shadow-xl transition-all flex-1 flex flex-col justify-between group rounded-none"
                  >
                    <div>
                      {/* Image Placeholder */}
                      <figure className="relative aspect-[16/10] w-full rounded-none bg-slate-100 border border-slate-200/80 dark:border-slate-700/80 mb-6 flex flex-col items-center justify-center text-slate-400 group-hover:bg-slate-150 transition-colors overflow-hidden">
                        <ImageIcon aria-hidden="true" className="size-8 text-slate-300 group-hover:scale-110 transition-transform duration-300" />
                        <figcaption className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 font-mono">
                          Foto News
                        </figcaption>
                      </figure>

                      {/* Meta Header */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <span className="inline-block px-2.5 py-0.5 rounded-none text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/60 font-mono">
                          {article.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                          <Calendar aria-hidden="true" className="size-3 text-slate-400" />
                          <time dateTime={article.publishedDate}>
                            {article.formattedDate}
                          </time>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        id={`article-${article.id}-title`}
                        className="text-lg sm:text-xl font-bold text-slate-950 dark:text-slate-50 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug"
                      >
                        <Link href={`/news/${article.slug}`}>{article.title}</Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed font-normal">
                        {article.summary}
                      </p>
                    </div>

                    {/* Read Action & Tags */}
                    <footer className="mt-8 pt-5 border-t border-slate-200/70 flex items-center justify-between">
                      <Link
                        href={`/news/${article.slug}`}
                        className="text-xs font-bold text-slate-900 dark:text-slate-50 group-hover:text-amber-700 transition-colors flex items-center gap-1.5 group/link"
                      >
                        <span>Baca Read More</span>
                        <ArrowRight aria-hidden="true" className="size-3.5 text-amber-600 group-hover/link:translate-x-1 transition-transform" />
                      </Link>

                      <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                        <Tag aria-hidden="true" className="size-3" />
                        <span>{article.tags[0]}</span>
                      </div>
                    </footer>
                  </SpotlightCard>
                </motion.article>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /* Empty State */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-20 text-center rounded-none bg-[#FDFDFB] dark:bg-slate-950 border border-slate-200 dark:border-slate-700"
        >
          <BookOpen aria-hidden="true" className="size-14 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
            Tidak ada warta yang sesuai pencarian
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
            Silakan coba kata kunci pencarian lain atau pilih kategori warta yang berbeda.
          </p>
        </motion.div>
      )}
    </div>
  );
}
