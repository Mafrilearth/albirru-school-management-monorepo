import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CurriculumSection } from "@/components/sections/programs/CurriculumSection";
import { ExtracurricularSection } from "@/components/sections/programs/ExtracurricularSection";
import { FacilitiesSection } from "@/components/sections/programs/FacilitiesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Program Curriculum & Facilities Kampus",
  description:
    "Pelajari rincian kurikulum tahfidzul qur'an 3 juz mutqin, kurikulum merdeka, 6 ekstrakurikuler pilihan (panahan, robotik, silat), serta sarana fasilitas modern di SD Al-Birru Sukabumi.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "Program Curriculum & Facilities Kampus | SD Al-Birru Sukabumi",
    description:
      "Harmoni Curriculum Merdeka, Tahfidz 3 Juz Mutqin, Extracurriculars Panahan Sunnah, dan Facilities Kampus Representatif di Sukabumi.",
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
      name: "Program & Facilities",
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
        kicker="AKADEMIK // STRUKTUR KURIKULUM & FASILITAS"
        title="Harmoni Curriculum Merdeka &amp; Tahfidz Bersanad"
        description="Membina kedalaman hafalan Al-Qur'an mutqin tanpa mengesampingkan nalar kritis sains, didukung 6 ekstrakurikuler unggulan dan fasilitas belajar representatif."
        badges={[
          { iconName: "book", label: "Target 3 Juz Mutqin & Tajwid" },
          { iconName: "trophy", label: "6 Extracurriculars Pilihan" },
          { iconName: "building", label: "Ruang Kelas Ber-AC & Lab Alam" },
        ]}
      />

      <CurriculumSection />
      <ExtracurricularSection />
      <FacilitiesSection />
      <CTASection
        kicker="KONSULTASI // KESIAPAN KURIKULUM ANANDA"
        title="Diskusikan Minat &amp; Potensi Unik Buah Hati"
        description="Tim kurikulum dan pendidik kami siap membantu memetakan gaya belajar serta kesiapan adaptasi ananda memasuki fase school dasar."
        primaryBtnText="Konsultasi Curriculum Sekarang"
        primaryBtnHref="/contact"
      />
    </>
  );
}
