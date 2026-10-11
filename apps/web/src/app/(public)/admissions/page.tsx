import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdmissionsForm } from "@/components/forms/AdmissionsForm";

export const metadata: Metadata = {
  title: "Registration Admissions 2026",
  description:
    "Form registration Penerimaan Peserta Didik Baru (Admissions) SD Al-Birru Sukabumi Academic Year 2026/2027.",
  alternates: {
    canonical: "/admissions",
  },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        kicker="Admissions 2026 // GELOMBANG 1"
        title="Form Registration Students Baru"
        description="Langkah pertama mewujudkan generasi Qur'ani yang berakhlak mulia dan unggul dalam sains. Kuota sangat terbatas demi menjaga kualitas rasio 1:15."
        badges={[
          { iconName: "map-pin", label: "Kuota Terbatas" },
          { iconName: "clock", label: "Registration Online 24 Jam" },
        ]}
      />

      <section
        aria-labelledby="ppdb-form-section"
        className="py-24 md:py-32 lg:py-40 bg-[#FDFDFB] dark:bg-slate-950 relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="ppdb-form-section" className="sr-only">
            Form Registration
          </h2>
          <AdmissionsForm />
        </div>
      </section>
    </>
  );
}
