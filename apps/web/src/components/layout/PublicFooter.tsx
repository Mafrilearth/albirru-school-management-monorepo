"use client";

import {
  Award,
  Check,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PublicFooter() {
  const currentYear = new Date().getFullYear();
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText("081234567890");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer className="border-t border-border bg-background text-muted-foreground relative overflow-hidden">
      {/* Upper Footer - School Credibility & Value Proposition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <h2 className="sr-only">
          Footer Navigation &amp; School Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: School Identity & Mission (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <BrandLogo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Integrated Islamic Primary School Tahfidzul Qur&apos;an
              integrating noble character (adab), minimum 3 mutqin juz
              Al-Qur&apos;an memorization with sanad, alongside science and
              future technology literacy in Sukabumi.
            </p>

            {/* Accreditation & Quality Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline" className="gap-1.5 font-normal">
                <ShieldCheck
                  aria-hidden="true"
                  className="size-3.5 text-primary"
                />
                <span>NPSN Registered</span>
              </Badge>
              <Badge variant="outline" className="gap-1.5 font-normal">
                <Award aria-hidden="true" className="size-3.5 text-primary" />
                <span>Merdeka Curriculum</span>
              </Badge>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <nav
            aria-label="Footer Navigation"
            className="lg:col-span-2 flex flex-col gap-3"
          >
            <h3 className="text-foreground text-sm font-semibold">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm list-none p-0">
              {[
                { label: "Home", href: "/" },
                { label: "About & History", href: "/about" },
                { label: "Programs & Facilities", href: "/programs" },
                { label: "News & Articles", href: "/news" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Contact & Location", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Program Unggulan (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-foreground text-sm font-semibold">
              Signature Programs
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm list-none p-0">
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-primary mt-2 shrink-0"
                />
                <span>Tahfidzul Qur&apos;an 3 Mutqin Juz with Sanad</span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-primary mt-2 shrink-0"
                />
                <span>Daily Congregational Prayers &amp; Practical Adab</span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-primary mt-2 shrink-0"
                />
                <span>Bilingual Communication (Arabic &amp; English)</span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-primary mt-2 shrink-0"
                />
                <span>Applied Science &amp; Computational Logic</span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-primary mt-2 shrink-0"
                />
                <span>Sunnah Archery &amp; Student Martial Arts</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-foreground text-sm font-semibold">
              Contact &amp; Support
            </h3>
            <address className="not-italic flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin
                  aria-hidden="true"
                  className="size-4 text-muted-foreground mt-0.5 shrink-0"
                />
                <span>Jl. Selabintana Km. 5, Warnasari, Sukabumi</span>
              </div>

              <div className="flex items-center justify-between gap-2 bg-muted/50 p-2.5 rounded-md border border-border">
                <div className="flex items-center gap-2">
                  <Phone
                    aria-hidden="true"
                    className="size-4 text-primary shrink-0"
                  />
                  <span className="text-foreground font-medium text-xs">
                    0812-3456-7890
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? (
                    <>
                      <Check
                        aria-hidden="true"
                        className="size-3 text-emerald-500"
                      />
                      <span className="text-emerald-500 font-medium">
                        Copied
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy aria-hidden="true" className="size-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground shrink-0" />
                <a
                  href="mailto:info@sdalbirru.sch.id"
                  className="hover:text-foreground transition-colors text-xs"
                >
                  info@sdalbirru.sch.id
                </a>
              </div>

              <div className="flex items-start gap-2 text-xs">
                <Clock className="size-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p>Monday – Friday: 07:30 AM – 03:00 PM</p>
                  <p className="text-muted-foreground/80 mt-0.5">
                    Saturday: By Appointment
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Consultation */}
              <Button
                render={
                  <a
                    href="https://wa.me/6281234567890?text=Hello%20Al-Birru%20Admin,%20I%20would%20like%20to%20inquire%20about%20school%20admissions."
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                size="sm"
                className="w-full mt-2 gap-2"
              >
                <MessageCircle className="size-4" />
                <span>Quick WhatsApp Consultation</span>
                <ExternalLink className="size-3 opacity-70" />
              </Button>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-border bg-muted/30 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} SD Al-Birru Sukabumi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="hover:text-foreground transition-colors"
            >
              About School
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Location Map
            </Link>
            <Link
              href="/admin"
              className="hover:text-foreground transition-colors"
            >
              Portal Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
