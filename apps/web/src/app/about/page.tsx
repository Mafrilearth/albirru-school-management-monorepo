import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FacultyGridSection } from "@/components/sections/about/FacultyGridSection";
import { HistoryTimelineSection } from "@/components/sections/about/HistoryTimelineSection";
import { VisionMissionSection } from "@/components/sections/about/VisionMissionSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About & School History",
  description:
    "Discover the vision, mission, BIRRU core values, distinguished faculty, and history of Al-Birru Primary School Sukabumi.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About & School History | Al-Birru Primary School",
    description:
      "Discover the vision, mission, BIRRU core values, distinguished faculty, and history of Al-Birru Primary School Sukabumi.",
    url: "/about",
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
      name: "About School",
      item: "https://sdalbirru.sch.id/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader
        kicker="CAMPUS // OFFICIAL PROFILE"
        title="Discover SD Al-Birru"
        description="Exploring our noble aspirations, institutional philosophy, and dedicated educators committed to nurturing a Qur'anic generation with noble character and future-ready horizons."
        badges={[
          { iconName: "shield", label: "Officially Registered NPSN" },
          {
            iconName: "book",
            label: "Merdeka Curriculum + Signature Al-Birru",
          },
          { iconName: "users", label: "100% Bachelor's & Master's Faculty" },
        ]}
      />

      <VisionMissionSection />
      <HistoryTimelineSection />
      <FacultyGridSection />
      <CTASection
        kicker="CONSULTATION // ACADEMICS & TAHFIDZ"
        title="Would You Like to Experience Our Campus Directly?"
        description="Schedule a campus visit to SD Al-Birru to experience morning tahfidz halaqahs, classroom dynamics, and our school facilities firsthand."
        primaryBtnText="Schedule a Campus Tour"
        primaryBtnHref="/contact"
      />
    </>
  );
}
