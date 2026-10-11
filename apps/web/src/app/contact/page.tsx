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
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
        kicker="SECRETARIAT &amp; ADMISSIONS"
        title="Contact the Committee &amp; Visit Our Campus"
        description="We warmly welcome you and are ready to assist you in discussing the future of your child's education at SD Al-Birru Sukabumi."
        badges={[
          { iconName: "map-pin", label: "Cicantayan, Kab. Sukabumi" },
          { iconName: "clock", label: "Monday–Friday: 07:30 AM – 03:00 PM" },
          { iconName: "phone", label: "Fast-Response Admissions Team" },
        ]}
      />

      {/* Main Section */}
      <section
        aria-labelledby="contact-section-heading"
        className="py-16 md:py-24 bg-background relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-section-heading" className="sr-only">
            Contact Information &amp; Consultation Form
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Contact Cards, Protocols & Map Preview (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Info Card */}
              <ScrollReveal direction="up" delay={0.1}>
                <Card className="p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      Secretariat &amp; Admissions
                    </h3>
                    <Badge variant="secondary">Info</Badge>
                  </div>

                  <address className="not-italic flex flex-col gap-5 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3.5">
                      <div
                        aria-hidden="true"
                        className="size-10 rounded-lg bg-muted border border-border flex items-center justify-center text-primary shrink-0"
                      >
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Campus Address
                        </h4>
                        <p className="mt-0.5 leading-relaxed text-xs sm:text-sm">
                          Kp. Cisande RT 006/002, Desa Cijalingan, Kec.
                          Cicantayan, Kabupaten Sukabumi, Jawa Barat 43155,
                          Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div
                        aria-hidden="true"
                        className="size-10 rounded-lg bg-muted border border-border flex items-center justify-center text-primary shrink-0"
                      >
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Phone &amp; WhatsApp
                        </h4>
                        <p className="mt-0.5 text-xs sm:text-sm">
                          Front Office: (0266) 123-456
                        </p>
                        <p className="text-primary font-medium text-xs sm:text-sm mt-0.5">
                          WhatsApp: 0812-3456-7890
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div
                        aria-hidden="true"
                        className="size-10 rounded-lg bg-muted border border-border flex items-center justify-center text-primary shrink-0"
                      >
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Official Email
                        </h4>
                        <p className="mt-0.5 text-xs sm:text-sm">
                          info@sdalbirru.sch.id
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div
                        aria-hidden="true"
                        className="size-10 rounded-lg bg-muted border border-border flex items-center justify-center text-primary shrink-0"
                      >
                        <Clock className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Office Hours
                        </h4>
                        <p className="mt-0.5 text-xs sm:text-sm">
                          Monday – Friday: 07:30 AM – 03:00 PM
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Saturday: By Appointment
                        </p>
                      </div>
                    </div>
                  </address>

                  {/* Direct WhatsApp Callout */}
                  <div className="pt-4 border-t border-border">
                    <Button
                      render={
                        <a
                          href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20saya%20ingin%20konsultasi%20langsung%20via%20WhatsApp."
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      nativeButton={false}
                      className="w-full gap-2 font-medium"
                    >
                      <MessageCircle aria-hidden="true" className="size-4" />
                      <span>Chat with Admissions Committee</span>
                      <ExternalLink
                        aria-hidden="true"
                        className="size-3.5 opacity-80"
                      />
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>

              {/* Visit Protocol Card */}
              <ScrollReveal direction="up" delay={0.15}>
                <Card className="p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarCheck
                        aria-hidden="true"
                        className="size-4 text-primary"
                      />
                      <h3
                        id="visit-protocols-heading"
                        className="text-xs font-semibold text-foreground uppercase tracking-wider"
                      >
                        Campus Visit Protocol
                      </h3>
                    </div>
                    <Badge variant="outline">Tour</Badge>
                  </div>

                  <ol
                    aria-labelledby="visit-protocols-heading"
                    className="flex flex-col gap-3 list-none p-0"
                  >
                    {visitProtocols.map((item, idx) => (
                      <li
                        key={idx}
                        className="p-3.5 rounded-lg bg-muted/40 border border-border flex items-start gap-3"
                      >
                        <Badge
                          variant="secondary"
                          className="font-mono text-xs shrink-0"
                        >
                          {item.step}
                        </Badge>
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Card>
              </ScrollReveal>

              {/* Map Preview Card */}
              <ScrollReveal direction="up" delay={0.2}>
                <Card className="p-6 sm:p-8 shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      id="campus-map-heading"
                      className="text-xs font-semibold text-foreground uppercase tracking-wider"
                    >
                      Location Map
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-emerald-600 border-emerald-200"
                    >
                      Active
                    </Badge>
                  </div>

                  <figure
                    aria-labelledby="campus-map-heading"
                    className="relative h-44 w-full rounded-lg bg-muted border border-border overflow-hidden flex flex-col items-center justify-center text-center p-6"
                  >
                    <MapPin
                      aria-hidden="true"
                      className="size-8 text-primary mb-2 relative z-10"
                    />
                    <p className="text-sm font-semibold text-foreground relative z-10">
                      SD Al-Birru Tahfidzul Qur&apos;an Sukabumi
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 relative z-10">
                      Kp. Cisande RT 006/002, Desa Cijalingan, Kec. Cicantayan,
                      Kab. Sukabumi
                    </p>
                    <Button
                      render={
                        <a
                          href="https://maps.google.com/?q=Kp.+Cisande+Cijalingan+Cicantayan+Sukabumi"
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      nativeButton={false}
                      variant="outline"
                      size="sm"
                      className="mt-3 gap-1.5"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink
                        aria-hidden="true"
                        className="size-3.5 text-muted-foreground"
                      />
                    </Button>
                  </figure>

                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck
                      aria-hidden="true"
                      className="size-4 text-emerald-600 shrink-0"
                    />
                    <span>
                      Organized parking &amp; eco-friendly learning environment
                    </span>
                  </div>
                </Card>
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
