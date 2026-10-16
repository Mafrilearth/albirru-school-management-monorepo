import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { DayAtAlbirruSection } from "@/components/sections/DayAtAlbirruSection";
import { ExtracurricularSection } from "@/components/sections/programs/ExtracurricularSection";

export const metadata: Metadata = {
  title: "Students & Character Cultivation",
  description:
    "Nurturing noble Qur'anic character, self-reliance, and outstanding achievement through 6 signature extracurriculars and daily worship habituation at SD Al-Birru Sukabumi.",
  alternates: {
    canonical: "/students",
  },
  openGraph: {
    title: "Students & Character Cultivation | SD Al-Birru Sukabumi",
    description:
      "Nurturing noble Qur'anic character, self-reliance, and outstanding achievement through 6 signature extracurriculars and daily worship habituation at SD Al-Birru Sukabumi.",
    url: "/students",
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
      name: "Students",
      item: "https://sdalbirru.sch.id/students",
    },
  ],
};

export default function StudentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader
        kicker="STUDENT LIFE // CHARACTER CULTIVATION & ACTIVITIES"
        title="Nurturing Noble Character, Resilience & Excellence"
        description="A holistic Qur'anic character ecosystem, daily Islamic habituation, 6 signature extracurriculars, and student leadership development at SD Al-Birru Sukabumi."
        badges={[
          { iconName: "sparkles", label: "Daily Adab & Sunnah Habituation" },
          { iconName: "trophy", label: "6 Signature Extracurriculars" },
          { iconName: "users", label: "1:15 Mentorship Ratio" },
        ]}
      />
      <div className="w-full max-w-7xl mx-auto border-x border-border">
        <DayAtAlbirruSection />
        <ExtracurricularSection />
        <CTASection />
      </div>
    </>
  );
}
