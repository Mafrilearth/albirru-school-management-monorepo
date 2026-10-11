import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { NewsArchiveGrid } from "@/components/sections/news/NewsArchiveGrid";
import { CTASection } from "@/components/sections/CTASection";
import { getArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "News, Prestasi & Pengumuman School",
  description:
    "Ikuti informasi terkini seputar kegiatan belajar students, agenda tahfidz akbar, pengumuman resmi Admissions, dan dokumentasi kejuaraan SD Al-Birru Sukabumi.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "News, Prestasi & Pengumuman School | SD Al-Birru Sukabumi",
    description:
      "Dinamika aktivitas belajar students, capaian prestasi tahfidz dan sains, serta pengumuman resmi SD Al-Birru Sukabumi.",
    url: "/news",
  },
};

const breadcrumbSchema = {
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
      name: "News & News",
      item: "https://sdalbirru.sch.id/news",
    },
  ],
};

export default async function NewsPage() {
  const articles = await getArticles();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader
        kicker="PUBLIKASI // WARTA & PRESTASI"
        title="Dinamika Kampus &amp; Kabar Prestasi Students"
        description="Dokumentasi resmi liputan aktivitas belajar, capaian kejuaraan tahfidz &amp; sains, serta pengumuman penting bagi wali students SD Al-Birru."
        badges={[
          { iconName: "newspaper", label: "News Resmi Terverifikasi" },
          { iconName: "trophy", label: "Dokumentasi Prestasi" },
          { iconName: "calendar", label: "Agenda & Kalender Akademik" },
        ]}
      />

      <section aria-labelledby="news-archive-heading" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsArchiveGrid articles={articles} />
        </div>
      </section>

      <CTASection
        kicker="PENERIMAAN // JALUR PRESTASI & REGULER"
        title="Dukung Bakat Ananda Bersama SD Al-Birru"
        description="Tersedia jalur apresiasi bagi ananda yang memiliki hafalan Al-Qur'an atau prestasi minat bakat. Konsultasikan kuota rombel yang tersedia."
        primaryBtnText="Konsultasi Jalur Masuk"
        primaryBtnHref="/contact"
      />
    </>
  );
}
