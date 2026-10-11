"use client";

import {
  Award,
  Check,
  ChevronRight,
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
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      {/* Top Hairline Gradient Beam */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/50 via-emerald-500/50 to-transparent" />

      {/* Upper Footer - School Credibility & Value Proposition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 relative z-10">
        <h2 className="sr-only">
          Footer Navigation &amp; School Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Column 1: School Identity & Mission (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <BrandLogo />
            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              Integrated Islamic Primary School Tahfidzul Qur&apos;an
              integrating noble character (adab), minimum 3 mutqin juz
              Al-Qur&apos;an memorization with sanad, alongside science and
              future technology literacy in Sukabumi.
            </p>

            {/* Accreditation & Quality Badges */}
            <div className="flex flex-wrap gap-2.5 mt-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-amber-600 dark:text-amber-400 font-mono">
                <ShieldCheck
                  aria-hidden="true"
                  className="size-3.5 text-amber-600 dark:text-amber-400"
                />
                <span>NPSN // OFFICIALLY REGISTERED</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                <Award
                  aria-hidden="true"
                  className="size-3.5 text-emerald-600 dark:text-emerald-400"
                />
                <span>MERDEKA CURRICULUM + TAHFIDZ</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <nav
            aria-label="Footer Navigation"
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <h3 className="text-slate-900 dark:text-white text-xs font-mono font-bold tracking-wider uppercase">
              MAIN NAVIGATION
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400 list-none p-0">
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
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group text-xs sm:text-sm"
                  >
                    <ChevronRight
                      aria-hidden="true"
                      className="size-3 text-slate-600 dark:text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Program Unggulan (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-slate-900 dark:text-white text-xs font-mono font-bold tracking-wider uppercase">
              SIGNATURE PROGRAMS
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 list-none p-0">
              <li className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0"
                />
                <span>
                  Tahfidzul Qur&apos;an 3 Mutqin Juz Target with Sanad
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0"
                />
                <span>Daily Congregational Prayers &amp; Practical Adab</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0"
                />
                <span>Basic Arabic &amp; English Bilingual Communication</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0"
                />
                <span>Applied Science &amp; Creative Computational Logic</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0"
                />
                <span>Sunnah Archery &amp; Student Martial Arts</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-slate-900 dark:text-white text-xs font-mono font-bold tracking-wider uppercase">
              CONTACT &amp; SUPPORT
            </h3>
            <address className="not-italic flex flex-col gap-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin
                  aria-hidden="true"
                  className="size-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0"
                />
                <span className="leading-relaxed">
                  Jl. Selabintana Km. 5, Warnasari, Sukabumi
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 bg-slate-50 dark:bg-slate-900/80 p-3 rounded-none border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Phone
                    aria-hidden="true"
                    className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0"
                  />
                  <span className="font-mono text-xs text-slate-900 dark:text-white">
                    0812-3456-7890
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                  title="Copy WhatsApp Number"
                >
                  {copiedPhone ? (
                    <>
                      <Check
                        aria-hidden="true"
                        className="size-3 text-emerald-400"
                      />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy aria-hidden="true" className="size-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <a
                  href="mailto:info@sdalbirru.sch.id"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-mono text-xs"
                >
                  info@sdalbirru.sch.id
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="size-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <div className="font-mono text-xs">
                  <p className="text-slate-700 dark:text-slate-300">
                    Monday – Friday: 07:30 AM – 03:00 PM
                  </p>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Saturday: By Admissions Appointment
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Fast Chat */}
              <a
                href="https://wa.me/6281234567890?text=Hello%20Al-Birru%20Admin,%20I%20would%20like%20to%20inquire%20about%20school%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-none bg-emerald-700 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md shadow-emerald-950 hover:scale-[1.02]"
              >
                <MessageCircle className="size-4" />
                <span>Quick WhatsApp Consultation</span>
                <ExternalLink className="size-3 opacity-80" />
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar with Mobile Dock Safe Clearance */}
      <div className="border-t border-slate-200 dark:border-slate-900 bg-slate-50/80 dark:bg-black/70 pt-7 pb-20 sm:pb-7 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} SD Al-Birru Sukabumi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="hover:text-slate-300 transition-colors"
            >
              About School
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-300 transition-colors"
            >
              Location Map
            </Link>
            <Link
              href="/admin"
              className="text-amber-500 hover:text-amber-400 font-bold transition-colors"
            >
              Faculty / CMS Portal Login
            </Link>
          </div>
        </div>
      </div>

      {/* Massive Brand Typography */}
      <div
        aria-hidden="true"
        className="w-full overflow-hidden pointer-events-none select-none relative z-0 text-center"
      >
        <span className="block text-[18vw] md:text-[22vw] leading-none font-black tracking-tighter text-slate-100 dark:text-slate-900 uppercase translate-y-[20%]">
          ALBIRRU
        </span>
      </div>
    </footer>
  );
}
