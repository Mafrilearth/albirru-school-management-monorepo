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
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <Card className="border-border bg-card p-4 sm:p-6 shadow-sm">
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
                <Button
                  key={cat.id}
                  type="button"
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="text-xs font-medium"
                >
                  {cat.label}
                </Button>
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
              className="pl-9 h-9 text-xs"
            />
          </div>
        </div>
      </Card>

      {filteredArticles.length > 0 ? (
        <div className="flex flex-col gap-10">
          {/* Featured Headline Article */}
          {featuredArticle && !searchQuery && selectedCategory === "all" && (
            <motion.article
              aria-labelledby="featured-headline-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-6 sm:p-8 lg:p-10">
                  {/* Left Column: Image Placeholder */}
                  <div className="lg:col-span-5">
                    <figure className="aspect-[16/10] w-full rounded-lg bg-muted flex flex-col items-center justify-center text-muted-foreground border border-border">
                      <ImageIcon
                        aria-hidden="true"
                        className="size-10 text-muted-foreground/60 mb-1"
                      />
                      <figcaption className="text-xs font-medium text-muted-foreground">
                        Berita Utama
                      </figcaption>
                    </figure>
                  </div>

                  {/* Right Column: Editorial Headline */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">
                          {featuredArticle.categoryLabel}
                        </Badge>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
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
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground hover:text-primary transition-colors tracking-tight leading-snug"
                      >
                        <Link href={`/news/${featuredArticle.slug}`}>
                          {featuredArticle.title}
                        </Link>
                      </h3>

                      <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {featuredArticle.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4">
                      <address className="not-italic flex items-center gap-2 text-xs text-muted-foreground">
                        <User
                          aria-hidden="true"
                          className="size-3.5 text-muted-foreground"
                        />
                        <span>Oleh: {featuredArticle.author}</span>
                      </address>

                      <Link
                        href={`/news/${featuredArticle.slug}`}
                        className={cn(buttonVariants({ size: "sm" }))}
                      >
                        <span>Baca Selengkapnya</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="size-3.5 ml-1.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
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
                    duration: 0.3,
                    delay: idx * 0.05,
                  }}
                  className="flex-1 flex"
                >
                  <Card className="flex-1 flex flex-col justify-between border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                    <div>
                      {/* Image Placeholder */}
                      <figure className="relative aspect-[16/10] w-full bg-muted flex flex-col items-center justify-center text-muted-foreground border-b border-border">
                        <ImageIcon
                          aria-hidden="true"
                          className="size-8 text-muted-foreground/60 mb-1"
                        />
                        <figcaption className="text-xs font-medium text-muted-foreground">
                          Foto Berita
                        </figcaption>
                      </figure>

                      {/* Content */}
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {article.categoryLabel}
                          </Badge>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar
                              aria-hidden="true"
                              className="size-3 text-muted-foreground"
                            />
                            <time dateTime={article.publishedDate}>
                              {article.formattedDate}
                            </time>
                          </div>
                        </div>

                        <CardTitle
                          id={`article-${article.id}-title`}
                          className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug"
                        >
                          <Link href={`/news/${article.slug}`}>
                            {article.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {article.summary}
                        </p>
                      </CardContent>
                    </div>

                    {/* Footer */}
                    <CardFooter className="pt-4 border-t border-border flex items-center justify-between">
                      <Link
                        href={`/news/${article.slug}`}
                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 group/link"
                      >
                        <span>Baca Selengkapnya</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="size-3 group-hover/link:translate-x-0.5 transition-transform"
                        />
                      </Link>

                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Tag aria-hidden="true" className="size-3" />
                        <span>{article.tags[0]}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.article>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /* Empty State */
        <Card className="p-12 text-center border-border bg-card">
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
        </Card>
      )}
    </div>
  );
}
