import type { Metadata } from "next";
import { AdmissionsForm } from "@/components/forms/AdmissionsForm";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Admissions Registration 2026",
  description:
    "New student admissions registration form for SD Al-Birru Sukabumi Academic Year 2026/2027.",
  alternates: {
    canonical: "/admissions",
  },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        kicker="ADMISSIONS 2026 // WAVE 1"
        title="New Student Registration Form"
        description="The first step toward cultivating a Qur'anic generation with noble character and scientific excellence. Limited capacity maintained to preserve an optimal 1:15 ratio."
        badges={[
          { iconName: "map-pin", label: "Limited Seats Available" },
          { iconName: "clock", label: "24/7 Online Registration" },
        ]}
      />

      <section
        aria-labelledby="ppdb-form-section"
        className="py-24 md:py-32 lg:py-40 bg-[#FDFDFB] dark:bg-slate-950 relative"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="ppdb-form-section" className="sr-only">
            Registration Form
          </h2>
          <AdmissionsForm />
        </div>
      </section>
    </>
  );
}
