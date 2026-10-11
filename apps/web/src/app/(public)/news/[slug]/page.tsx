import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  User,
  ArrowLeft,
  Tag,
  Sparkles,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { getArticleBySlug, fallbackArticles } from "@/lib/content";
import { ArticleShareWidget } from "@/components/common/ArticleShareWidget";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | SD Al-Birru",
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
    `${article.title} - Baca selengkapnya warta resmi SD Al-Birru Sukabumi:`
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
    <article className="py-16 md:py-28 lg:py-36 bg-white dark:bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* Editorial Top Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Navigasi Jejak News"
          className="mb-10 flex items-center gap-2 text-xs font-mono text-slate-500"
        >
          <Link
            href="/news"
            className="group inline-flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-400 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft aria-hidden="true" className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>KEMBALI KE SEMUA WARTA</span>
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400 truncate max-w-xs">{article.categoryLabel}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Main Article Content (lg:col-span-8) */}
          <div className="lg:col-span-8">
            {/* Meta Tags & Reading Estimator */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <span className="px-3.5 py-1.5 rounded-none text-[11px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200/60 uppercase">
                {article.categoryLabel}
              </span>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Calendar aria-hidden="true" className="size-3.5 text-slate-400" />
                <time dateTime={article.publishedDate}>{article.formattedDate}</time>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Clock aria-hidden="true" className="size-3.5 text-slate-400" />
                <span>3 MENIT BACA</span>
              </div>
            </div>

            {/* Title - Single Primary H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]">
              {article.title}
            </h1>

            {/* Author Byline */}
            <div className="mt-8 pb-8 border-b border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div
                  aria-hidden="true"
                  className="size-11 rounded-none bg-slate-100 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300"
                >
                  <User className="size-5" />
                </div>
                <address className="not-italic">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-50">{article.author}</p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Humas &amp; Tim Redaksi SD Al-Birru
                  </p>
                </address>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-emerald-700 font-mono bg-emerald-50 px-3 py-1.5 rounded-none border border-emerald-200/60">
                <ShieldCheck aria-hidden="true" className="size-3.5" />
                <span>DIVERIFIKASI RESMI</span>
              </div>
            </div>

            {/* Lead Summary Callout as Semantic Blockquote */}
            <blockquote
              cite={`https://sdalbirru.sch.id/news/${article.slug}`}
              className="my-10 p-8 sm:p-10 rounded-none bg-[#FDFDFB] dark:bg-slate-950 border-l-4 border-amber-500 border-y border-r border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-base sm:text-lg font-medium leading-relaxed italic shadow-2xs"
            >
              <p>&quot;{article.summary}&quot;</p>
            </blockquote>

            {/* Article Body Paragraphs with Generous Spacing */}
            <div className="space-y-8 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {article.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "first-letter:text-5xl first-letter:font-black first-letter:text-slate-950 dark:text-slate-50 first-letter:mr-2" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags & Interactive Share Widget */}
            <footer className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Tags Semantic List */}
              <div className="flex items-center gap-2">
                <Tag aria-hidden="true" className="size-4 text-slate-400 mr-1" />
                <ul aria-label="Topik terkait warta" className="flex flex-wrap items-center gap-2 list-none p-0" role="list">
                  {article.tags.map((tag, idx) => (
                    <li key={idx}>
                      <span className="px-3.5 py-1.5 rounded-none bg-slate-100 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium block">
                        #{tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Component: Share to WhatsApp & Copy Link */}
              <ArticleShareWidget title={article.title} shareText={shareText} />
            </footer>
          </div>

          {/* Sidebar with Semantic Aside & H2 Landmark */}
          <aside
            aria-label="Informasi Pelengkap &amp; News Terkait"
            className="lg:col-span-4 space-y-10 sticky top-28"
          >
            {/* Admissions Action Widget */}
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.14)"
              borderColor="rgba(245, 158, 11, 0.3)"
              className="p-8 sm:p-9 rounded-none bg-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden"
            >
              <BorderBeam size={220} duration={12} colorFrom="#f59e0b" colorTo="#10b981" />

              <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-none uppercase tracking-wider">
                Admissions 2026/2027
              </span>

              <h2 className="text-xl font-black mt-4 leading-snug tracking-tight">
                Penerimaan Students Baru Telah Dibuka
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Mendidik generasi Qur&apos;ani berakhlak mulia dengan rasio ideal 1:15.
                Kuota gelombang I dibatasi 2 kelas.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/contact"
 className="flex items-center justify-center gap-2 w-full py-3.5 rounded-none bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-2xs transition-all hover:scale-[1.01]"
                >
                  <Sparkles aria-hidden="true" className="size-4" />
                  <span>Form Registration &amp; Konsultasi</span>
                </Link>

                <a
                  href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20saya%20tertarik%20mendaftar%20PPDB%20setelah%20membaca%20warta%20sekolah."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-none border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs transition-colors"
                >
                  <span>Chat WhatsApp Committee</span>
                  <ArrowUpRight aria-hidden="true" className="size-3.5 text-slate-400" />
                </a>
              </div>
            </SpotlightCard>

            {/* Related Articles in SpotlightCard */}
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.08)"
              className="p-8 rounded-none bg-[#FDFDFB] dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-2xs"
            >
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-700 mb-5">
                <h2 className="text-sm font-bold text-slate-900 dark:text-slate-50 font-mono uppercase tracking-wider">
                  WARTA LAINNYA
                </h2>
                <span className="text-[10px] font-mono text-slate-400">ARSIP</span>
              </div>

              <ul aria-label="News Terkait Lainnya" className="space-y-5 list-none p-0" role="list">
                {otherArticles.map((other) => (
                  <li key={other.id} className="group border-b border-slate-100 dark:border-slate-800 last:border-0 pb-4 last:pb-0">
                    <article>
                      <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/50">
                        {other.categoryLabel}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-50 group-hover:text-amber-700 transition-colors line-clamp-2 mt-2">
                        <Link href={`/news/${other.slug}`}>{other.title}</Link>
                      </h3>
                      <time
                        dateTime={other.publishedDate}
                        className="text-[10px] font-mono text-slate-400 mt-1.5 block"
                      >
                        {other.formattedDate}
                      </time>
                    </article>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </aside>
        </div>
      </div>
    </article>
  );
}
