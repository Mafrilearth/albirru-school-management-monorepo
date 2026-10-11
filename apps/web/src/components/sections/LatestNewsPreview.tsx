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
      "Grand Tahfidz Graduation Cohort IV: 35 Students Complete Tasmi' Examination",
    slug: "grand-tahfidz-graduation-cohort-iv",
    category: "Achievements",
    excerpt:
      "A total of 35 students successfully completed their Qur'anic memorization exams with top honors, witnessed by parents and the academic council.",
    date: "September 28, 2026",
    isoDate: "2026-09-28",
  },
  {
    id: "2",
    title:
      "Science & Nature Educational Visit: Students Explore Applied Ecosystems",
    slug: "science-and-nature-educational-visit",
    category: "Activities",
    excerpt:
      "Integrated environmental learning. Students directly explored flora and fauna biodiversity in natural open-air habitats.",
    date: "September 15, 2026",
    isoDate: "2026-09-15",
  },
  {
    id: "3",
    title: "New Student Admissions (PPDB) 2026/2027 Phase I Officially Open",
    slug: "admissions-2026-2027-phase-1-open",
    category: "Announcements",
    excerpt:
      "New student enrollment is now open with strict quota limits of 2 classrooms to preserve an ideal 1:15 mentorship ratio.",
    date: "September 01, 2026",
    isoDate: "2026-09-01",
  },
];

export function LatestNewsPreview() {
  return (
    <section
      aria-labelledby="latest-news-heading"
      className="py-20 md:py-28 lg:py-36 bg-background border-b border-border"
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
              className="gap-2 px-3.5 py-1 mb-5 text-xs font-medium rounded-full"
            >
              <span>OFFICIAL PUBLICATIONS</span>
            </Badge>
            <h2
              id="latest-news-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
            >
              Latest News &amp; Achievements
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Documentation of student activities, Qur&apos;an memorization
              milestones, and official school announcements from SD Al-Birru.
            </p>
          </div>

          <Button
            render={<Link href="/news" />}
            nativeButton={false}
            variant="outline"
            className="gap-2 font-medium self-start md:self-auto"
          >
            <span>All News &amp; Events</span>
            <ChevronRight className="size-4" />
          </Button>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fallbackArticles.map((article) => (
            <Card
              key={article.id}
              className="p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >
              <div>
                {/* Image Placeholder */}
                <div className="relative aspect-[16/10] w-full rounded-lg bg-muted border border-border mb-6 flex flex-col items-center justify-center text-muted-foreground overflow-hidden">
                  <Newspaper className="size-8 mb-2 opacity-60" />
                  <span className="text-xs font-medium">Documentation</span>
                </div>

                {/* Category & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="secondary" className="font-normal text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
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
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                <Link
                  href={`/news/${article.slug}`}
                  className="font-medium text-primary hover:underline flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <span className="text-muted-foreground flex items-center gap-1 text-[11px]">
                  <Sparkles className="size-3" />
                  <span>3 MIN</span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
