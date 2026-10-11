import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { VisionMissionSection } from "@/components/sections/about/VisionMissionSection";
import { HistoryTimelineSection } from "@/components/sections/about/HistoryTimelineSection";
import { FacultyGridSection } from "@/components/sections/about/FacultyGridSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About & Sejarah School",
  description:
    "Mengenal visi, misi, nilai-nilai BIRRU, dewan pengajar, dan sejarah berdirinya SD Al-Birru Tahfidzul Qur'an Sukabumi sebagai Sahabat Pendidikan Anak.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About & Sejarah School | SD Al-Birru Sukabumi",
    description:
      "Mengenal visi, misi, nilai-nilai BIRRU, dewan pengajar, dan sejarah berdirinya SD Al-Birru Tahfidzul Qur'an Sukabumi.",
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
        kicker="KAMPUS // PROFIL RESMI"
        title="Mengenal SD Al-Birru Lebih Dekat"
        description="Menelusuri cita-cita luhur, filosofi nama, dan dedikasi para pendidik yang berkomitmen melahirkan generasi Qur'ani berakhlak mulia dan berwawasan masa depan."
        badges={[
          { iconName: "shield", label: "NPSN Terdaftar Resmi" },
          { iconName: "book", label: "Curriculum Merdeka + Khas Al-Birru" },
          { iconName: "users", label: "100% Pengajar Berkualifikasi S1/S2" },
        ]}
      />

      <VisionMissionSection />
      <HistoryTimelineSection />
      <FacultyGridSection />
      <CTASection
        kicker="KONSULTASI // AKADEMIK & TAHFIDZ"
        title="Ingin Mengenal Lebih Dekat Lingkungan Kami?"
        description="Jadwalkan agenda kunjungan silaturahmi langsung ke kampus SD Al-Birru untuk melihat dinamika halaqah tahfidz dan fasilitas school."
        primaryBtnText="Jadwalkan Kunjungan Kampus"
        primaryBtnHref="/contact"
      />
    </>
  );
}
