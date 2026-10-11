import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  ShieldCheck,
  Sparkles,
  Tag,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleShareWidget } from "@/components/common/ArticleShareWidget";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fallbackArticles, getArticleBySlug } from "@/lib/content";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return fallbackArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | SD Al-Birru",
    };
  }

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: `/news/${article.slug}`,
      publishedTime: article.publishedDate,
      authors: [article.author],
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherArticles = fallbackArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  const shareText = encodeURIComponent(
    `${article.title} - Baca berita resmi SD Al-Birru Sukabumi:`,
  );

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "SD Al-Birru Sukabumi",
      url: "https://sdalbirru.sch.id",
      logo: {
        "@type": "ImageObject",
        url: "https://sdalbirru.sch.id/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sdalbirru.sch.id/news/${article.slug}`,
    },
    keywords: article.tags.join(", "),
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sdalbirru.sch.id",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "News",
        item: "https://sdalbirru.sch.id/news",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://sdalbirru.sch.id/news/${article.slug}`,
      },
    ],
  };

  return (
    <article className="py-12 md:py-20 lg:py-28 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Navigasi Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs text-muted-foreground"
        >
          <Link
            href="/news"
            className="group inline-flex items-center gap-1.5 font-medium hover:text-foreground transition-colors"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-3.5 group-hover:-translate-x-1 transition-transform"
            />
            <span>Kembali ke Berita</span>
          </Link>
          <span className="text-muted-foreground/60">/</span>
          <span className="text-foreground truncate max-w-xs font-medium">
            {article.categoryLabel}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary">{article.categoryLabel}</Badge>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar aria-hidden="true" className="size-3.5" />
                <time dateTime={article.publishedDate}>
                  {article.formattedDate}
                </time>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock aria-hidden="true" className="size-3.5" />
                <span>3 Menit Baca</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              {article.title}
            </h1>

            {/* Author Byline */}
            <div className="mt-6 pb-6 border-b border-border flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
                >
                  <User className="size-5" />
                </div>
                <address className="not-italic">
                  <p className="text-sm font-semibold text-foreground">
                    {article.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tim Humas &amp; Publikasi SD Al-Birru
                  </p>
                </address>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                <ShieldCheck aria-hidden="true" className="size-3.5" />
                <span className="font-medium">Terverifikasi Resmi</span>
              </div>
            </div>

            {/* Lead Summary Callout */}
            <blockquote
              cite={`https://sdalbirru.sch.id/news/${article.slug}`}
              className="my-8 p-6 rounded-lg bg-muted/40 border-l-4 border-primary text-foreground text-base sm:text-lg font-medium leading-relaxed italic"
            >
              <p>&quot;{article.summary}&quot;</p>
            </blockquote>

            {/* Article Body Paragraphs */}
            <div className="flex flex-col gap-6 text-foreground/90 text-base leading-relaxed">
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tags & Interactive Share Widget */}
            <footer className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Tags List */}
              <div className="flex items-center gap-2">
                <Tag
                  aria-hidden="true"
                  className="size-4 text-muted-foreground mr-1"
                />
                <ul
                  aria-label="Topik terkait artikel"
                  className="flex flex-wrap items-center gap-1.5 list-none p-0"
                >
                  {article.tags.map((tag, idx) => (
                    <li key={idx}>
                      <Badge variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share Widget */}
              <ArticleShareWidget title={article.title} shareText={shareText} />
            </footer>
          </div>

          {/* Sidebar */}
          <aside
            aria-label="Informasi Tambahan &amp; Berita Terkait"
            className="lg:col-span-4 flex flex-col gap-8 sticky top-24"
          >
            {/* Admissions Action Widget */}
            <Card className="border-border bg-card shadow-sm p-6 sm:p-7">
              <Badge variant="default" className="mb-3">
                SPMB 2026/2027
              </Badge>

              <h2 className="text-lg font-bold text-foreground leading-snug">
                Penerimaan Peserta Didik Baru Telah Dibuka
              </h2>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Membina generasi Qur&apos;ani berakhlak mulia dengan rasio ideal
                1:15. Kuota Gelombang I dibatasi hanya untuk 2 rombel.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  className={cn(buttonVariants(), "w-full gap-2")}
                >
                  <Sparkles aria-hidden="true" className="size-4" />
                  <span>Daftar Sekarang (Online)</span>
                </Link>

                <a
                  href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20saya%20tertarik%20dengan%20informasi%20SPMB."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full",
                  )}
                >
                  <span>Hubungi WhatsApp SPMB</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 ml-1.5 text-muted-foreground"
                  />
                </a>
              </div>
            </Card>

            {/* Related Articles */}
            <Card className="border-border bg-card shadow-sm">
              <CardHeader className="pb-3 border-b border-border">
                <CardTitle className="text-sm font-semibold text-foreground">
                  Berita Lainnya
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-4">
                <ul
                  aria-label="Berita Terkait Lainnya"
                  className="flex flex-col gap-4 list-none p-0"
                >
                  {otherArticles.map((other) => (
                    <li
                      key={other.id}
                      className="border-b border-border last:border-0 pb-3 last:pb-0"
                    >
                      <article>
                        <Badge variant="outline" className="text-[10px] mb-1">
                          {other.categoryLabel}
                        </Badge>
                        <h3 className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                          <Link href={`/news/${other.slug}`}>
                            {other.title}
                          </Link>
                        </h3>
                        <time
                          dateTime={other.publishedDate}
                          className="text-[11px] text-muted-foreground mt-1 block"
                        >
                          {other.formattedDate}
                        </time>
                      </article>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </article>
  );
}
