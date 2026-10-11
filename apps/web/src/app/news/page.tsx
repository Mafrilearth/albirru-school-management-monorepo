import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { NewsArchiveGrid } from "@/components/sections/news/NewsArchiveGrid";
import { getArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "News, Achievements & School Announcements",
  description:
    "Stay informed with the latest updates on student learning activities, major tahfidz events, official Admissions announcements, and competition achievements at SD Al-Birru Sukabumi.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "News, Achievements & School Announcements | SD Al-Birru Sukabumi",
    description:
      "Student learning dynamics, tahfidz & science accomplishments, and official announcements from SD Al-Birru Sukabumi.",
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
      name: "News & Articles",
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
        kicker="PUBLICATIONS // NEWS & ACHIEVEMENTS"
        title="Campus Dynamics &amp; Student Achievements"
        description="Official coverage of classroom activities, tahfidz and science tournament accolades, alongside vital announcements for SD Al-Birru guardians."
        badges={[
          { iconName: "newspaper", label: "Verified Official News" },
          { iconName: "trophy", label: "Achievement Documentation" },
          { iconName: "calendar", label: "Events & Academic Calendar" },
        ]}
      />

      <section
        aria-labelledby="news-archive-heading"
        className="py-24 md:py-32 lg:py-40 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsArchiveGrid articles={articles} />
        </div>
      </section>

      <CTASection
        kicker="ADMISSIONS // MERIT & REGULAR TRACKS"
        title="Support Your Child's Talents with SD Al-Birru"
        description="Special recognition tracks available for children with Al-Qur'an memorization or talent achievements. Inquire about remaining class cohort capacity."
        primaryBtnText="Consult Admissions Tracks"
        primaryBtnHref="/contact"
      />
    </>
  );
}
