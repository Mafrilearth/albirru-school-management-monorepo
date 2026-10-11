import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { CurriculumSection } from "@/components/sections/programs/CurriculumSection";
import { ExtracurricularSection } from "@/components/sections/programs/ExtracurricularSection";
import { FacilitiesSection } from "@/components/sections/programs/FacilitiesSection";

export const metadata: Metadata = {
  title: "Academic Curriculum & Campus Facilities",
  description:
    "Explore our 3 mutqin juz tahfidzul qur'an curriculum, national Merdeka curriculum, 6 signature extracurriculars (archery, robotics, martial arts), and modern campus facilities at SD Al-Birru Sukabumi.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "Academic Curriculum & Campus Facilities | SD Al-Birru Sukabumi",
    description:
      "Harmonizing the Merdeka Curriculum, 3 Mutqin Juz Tahfidz, Sunnah Archery Extracurriculars, and State-of-the-Art Campus Facilities in Sukabumi.",
    url: "/programs",
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
      name: "Programs & Facilities",
      item: "https://sdalbirru.sch.id/programs",
    },
  ],
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader
        kicker="ACADEMICS // CURRICULUM STRUCTURE & FACILITIES"
        title="Harmonizing Merdeka Curriculum &amp; Certified Tahfidz"
        description="Fostering deep Al-Qur'an memorization with verified sanad without compromising critical scientific reasoning, supported by 6 signature extracurriculars and state-of-the-art facilities."
        badges={[
          { iconName: "book", label: "Target 3 Mutqin Juz & Tajweed" },
          { iconName: "trophy", label: "6 Signature Extracurriculars" },
          {
            iconName: "building",
            label: "Air-Conditioned Classrooms & Nature Lab",
          },
        ]}
      />

      <CurriculumSection />
      <ExtracurricularSection />
      <FacilitiesSection />
      <CTASection
        kicker="CONSULTATION // STUDENT CURRICULUM READINESS"
        title="Discuss Your Child's Unique Interests &amp; Potential"
        description="Our curriculum team and educators are ready to help map your child's learning style and developmental readiness for primary school."
        primaryBtnText="Consult Curriculum Today"
        primaryBtnHref="/contact"
      />
    </>
  );
}
