import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { GalleryViewer } from "@/components/sections/gallery/GalleryViewer";
import { getGalleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photo Gallery & Student Activities",
  description:
    "Photo documentation of tahfidzul qur'an activities, traditional archery, science experiments, and grand student graduation at SD Al-Birru Sukabumi.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Photo Gallery & Student Activities | SD Al-Birru Sukabumi",
    description:
      "Visual record of learning activities, Al-Qur'an tahfidz, and daily student character cultivation at SD Al-Birru Sukabumi.",
    url: "/gallery",
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
      name: "Photo Gallery",
      item: "https://sdalbirru.sch.id/gallery",
    },
  ],
};

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader
        kicker="DOCUMENTATION // ACTIVITY ARCHIVES"
        title="Student Activities &amp; Daily Habits Gallery"
        description="Capturing the joy, Al-Qur'an recitation diligence, and interactive scientific exploration of our students in a secure, nurturing campus environment."
        badges={[
          { iconName: "camera", label: "Real Campus Photography" },
          { iconName: "sparkles", label: "Tahfidz & Academic Programs" },
          { iconName: "heart", label: "Child-Friendly Culture" },
        ]}
      />

      <section
        aria-labelledby="gallery-grid-heading"
        className="py-16 md:py-24 lg:py-32 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryViewer items={galleryItems} />
        </div>
      </section>

      <CTASection
        kicker="CAMPUS VISIT // CAMPUS ENVIRONMENT TOUR"
        title="Experience Our Learning Atmosphere Firsthand"
        description="Parents are warmly invited to visit our campus to observe our daily Al-Qur'an halaqahs and modern school facilities."
        primaryBtnText="Book a Campus Visit"
        primaryBtnHref="/contact"
      />
    </>
  );
}
