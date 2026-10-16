import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FacultyGridSection } from "@/components/sections/about/FacultyGridSection";
import { HistoryTimelineSection } from "@/components/sections/about/HistoryTimelineSection";
import { VisionMissionSection } from "@/components/sections/about/VisionMissionSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Profile & School Identity",
  description:
    "Discover the vision, mission, BIRRU core values, distinguished faculty, and history of Al-Birru Primary School Sukabumi.",
  alternates: {
    canonical: "/profile",
  },
  openGraph: {
    title: "Profile & School Identity | Al-Birru Primary School",
    description:
      "Discover the vision, mission, BIRRU core values, distinguished faculty, and history of Al-Birru Primary School Sukabumi.",
    url: "/profile",
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
      name: "Profile",
      item: "https://sdalbirru.sch.id/profile",
    },
  ],
};

export default function ProfilePage() {
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
          { iconName: "shield", label: "Officially Registered School" },
          {
            iconName: "book",
            label: "Merdeka Curriculum + Signature Al-Birru",
          },
          { iconName: "users", label: "100% Bachelor's & Master's Faculty" },
        ]}
      />

      <div className="w-full max-w-7xl mx-auto border-x border-border">
        <VisionMissionSection />
        <HistoryTimelineSection />
        <FacultyGridSection />
        <CTASection
          kicker="CONSULTATION // ACADEMICS & TAHFIDZ"
          title="Would You Like to Experience Our Campus Directly?"
          description="Schedule a campus visit to SD Al-Birru to experience morning tahfidz halaqahs, classroom dynamics, and our school facilities firsthand."
          primaryBtnText="Schedule a Campus Tour"
          primaryBtnHref="/services"
        />
      </div>
    </>
  );
}
