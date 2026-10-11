import {
  CalendarCheck,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Contact, Location & Admissions Consultation",
  description:
    "Contact the Admissions committee of SD Al-Birru Sukabumi. Inquire about our tahfidz curriculum, tuition and registration details, schedule a campus tour, and view campus location.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact, Location & Admissions Consultation | SD Al-Birru Sukabumi",
    description:
      "Contact the secretariat and Admissions committee of SD Al-Birru Sukabumi. Consult directly via WhatsApp or schedule an on-campus tour.",
    url: "/contact",
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
      name: "Contact & Location",
      item: "https://sdalbirru.sch.id/contact",
    },
  ],
};

const visitProtocols = [
  {
    step: "01",
    title: "Confirm Appointment",
    desc: "Notify us of your arrival plans via WhatsApp at least 1 day prior so our welcoming team can assist you optimally.",
  },
  {
    step: "02",
    title: "Bring Prospective Student",
    desc: "Let your child experience the comfortable classrooms, mosque, and serene Al-Birru learning environment.",
  },
  {
    step: "03",
    title: "In-Person Consultation",
    desc: "Engage in an in-depth dialogue regarding our 3-juz tahfidz goals, your child's developmental readiness, and transparent tuition.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader
        kicker="SECRETARIAT // INQUIRIES & KONSULTASI"
        title="Contact the Committee &amp; Visit Our Campus"
        description="We warmly welcome you and are ready to assist you in discussing the future of your child's education at SD Al-Birru Sukabumi."
        badges={[
          { iconName: "map-pin", label: "Jl. Selabintana Km. 5 Sukabumi" },
          { iconName: "clock", label: "Monday–Friday: 07:30 AM – 03:00 PM" },
          { iconName: "phone", label: "Fast-Response Admissions Team" },
        ]}
      />

      {/* Main Section with Generous Padding */}
      <section
        aria-labelledby="contact-section-heading"
        className="py-24 md:py-32 lg:py-40 bg-[#FDFDFB] dark:bg-slate-950 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-section-heading" className="sr-only">
            Contact Information &amp; Consultation Form
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            {/* Left Column: Contact Cards, Protocols & Map Preview (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Info Card with SpotlightCard */}
              <ScrollReveal direction="up" delay={0.1}>
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.08)"
                  className="p-8 sm:p-9 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-none bg-amber-500 animate-pulse" />
                      <h3 className="text-xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
                        Secretariat &amp; Admissions Services
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      INFO // 01
                    </span>
                  </div>

                  <address className="not-italic space-y-6 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-start gap-4">
                      <div
                        aria-hidden="true"
                        className="size-11 rounded-none bg-slate-100 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0 shadow-2xs"
                      >
                        <MapPin className="size-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-50">
                          Campus Address
                        </h4>
                        <p className="mt-1 leading-relaxed text-xs sm:text-sm">
                          Jl. Selabintana Km. 5, Warnasari, Kec. Sukabumi,
                          Kabupaten Sukabumi, Jawa Barat 43151, Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        aria-hidden="true"
                        className="size-11 rounded-none bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs"
                      >
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-50">
                          Phone &amp; WhatsApp
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm font-mono">
                          Front Office Hotline: (0266) 123-456
                        </p>
                        <p className="text-emerald-700 font-bold text-xs sm:text-sm font-mono mt-0.5">
                          WhatsApp Support: 0812-3456-7890
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        aria-hidden="true"
                        className="size-11 rounded-none bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-700 shrink-0 shadow-2xs"
                      >
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-50">
                          Official Email
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm font-mono">
                          info@sdalbirru.sch.id
                        </p>
                        <p className="text-slate-500 text-xs font-mono mt-0.5">
                          ppdb@sdalbirru.sch.id
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        aria-hidden="true"
                        className="size-11 rounded-none bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-700 shrink-0 shadow-2xs"
                      >
                        <Clock className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-50">
                          Admissions &amp; Administration Office Hours
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm font-mono">
                          Monday – Friday: 07:30 AM – 03:00 PM
                        </p>
                        <p className="text-xs text-slate-500 font-mono mt-0.5">
                          Saturday: 08:00 AM – 12:00 PM (By Appointment)
                        </p>
                      </div>
                    </div>
                  </address>

                  {/* Direct WhatsApp Callout */}
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20saya%20ingin%20konsultasi%20langsung%20via%20WhatsApp."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-none bg-emerald-700 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-2xs transition-all hover:scale-[1.01]"
                    >
                      <MessageCircle aria-hidden="true" className="size-4.5" />
                      <span>Fast Chat with Admissions Committee</span>
                      <ExternalLink
                        aria-hidden="true"
                        className="size-3.5 opacity-80"
                      />
                    </a>
                  </div>
                </SpotlightCard>
              </ScrollReveal>

              {/* Visit Protocol Blueprint Card */}
              <ScrollReveal direction="up" delay={0.15}>
                <div className="rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-8 shadow-2xs">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <CalendarCheck
                        aria-hidden="true"
                        className="size-4.5 text-amber-600"
                      />
                      <h3
                        id="visit-protocols-heading"
                        className="text-xs font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wider font-mono"
                      >
                        CAMPUS VISIT PROTOCOL
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      TOUR
                    </span>
                  </div>

                  <ol
                    aria-labelledby="visit-protocols-heading"
                    className="space-y-3.5 list-none p-0"
                  >
                    {visitProtocols.map((item, idx) => (
                      <li
                        key={idx}
                        className="p-4 rounded-none bg-[#FDFDFB] dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-start gap-3.5"
                      >
                        <span className="text-xs font-mono font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-none">
                          {item.step}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-50">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>

              {/* Map Preview Container with SpotlightCard */}
              <ScrollReveal direction="up" delay={0.2}>
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.08)"
                  className="rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-8 shadow-2xs overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-5">
                    <h3
                      id="campus-map-heading"
                      className="text-xs font-mono font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wider"
                    >
                      CAMPUS LOCATION MAP
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-none border border-emerald-200/60 font-bold">
                      ACTIVE COORDINATES
                    </span>
                  </div>

                  {/* Styled Map Embed Mockup */}
                  <figure
                    aria-labelledby="campus-map-heading"
                    className="relative h-48 w-full rounded-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col items-center justify-center text-center p-6"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"
                    />
                    <MapPin
                      aria-hidden="true"
                      className="size-8 text-amber-500 mb-2 relative z-10"
                    />
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-50 relative z-10">
                      SD Al-Birru Tahfidzul Qur&apos;an Sukabumi
                    </p>
                    <address className="not-italic text-xs text-slate-500 mt-1 relative z-10 font-mono">
                      Jl. Selabintana Km. 5, Warnasari, Sukabumi
                    </address>
                    <a
                      href="https://maps.google.com/?q=Sukabumi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 dark:bg-slate-800 shadow-2xs transition-colors relative z-10"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink
                        aria-hidden="true"
                        className="size-3.5 text-slate-400"
                      />
                    </a>
                  </figure>

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <ShieldCheck
                      aria-hidden="true"
                      className="size-4 text-emerald-700 shrink-0"
                    />
                    <span>
                      Organized parking &amp; clean, eco-friendly learning
                      environment
                    </span>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            </div>

            {/* Right Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" delay={0.15}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
