"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
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

      {/* Removed conflicting background dots to allow GlobalGrid to shine clearly */}

      {/* Upper Footer - School Credibility & Value Proposition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 relative z-10">
        <h2 className="sr-only">Navigasi Kaki &amp; Informasi Kontak School</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Column 1: School Identity & Mission (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <BrandLogo />
            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              Integrated Islamic Primary School Tahfidzul Qur&apos;an yang mengintegrasikan
              keluhuran adab, hafalan Al-Qur&apos;an mutqin minimal 3 juz bersanad, serta
              keunggulan literasi sains dan teknologi masa depan di Sukabumi.
            </p>

            {/* Accreditation & Quality Badges */}
            <div className="flex flex-wrap gap-2.5 mt-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-amber-600 dark:text-amber-400 font-mono">
                <ShieldCheck aria-hidden="true" className="size-3.5 text-amber-600 dark:text-amber-400" />
                <span>NPSN // RESMI TERDAFTAR</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                <Award aria-hidden="true" className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>KURIKULUM MERDEKA + TAHFIDZ</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <nav aria-label="Navigasi Kaki" className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-slate-900 dark:text-white text-xs font-mono font-bold tracking-wider uppercase">
              NAVIGASI UTAMA
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400 list-none p-0" role="list">
              {[
                { label: "Home", href: "/" },
                { label: "About & Sejarah", href: "/about" },
                { label: "Program & Facilities", href: "/programs" },
                { label: "News & News", href: "/news" },
                { label: "Gallery Foto", href: "/gallery" },
                { label: "Kontak & Lokasi", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group text-xs sm:text-sm"
                  >
                    <ChevronRight aria-hidden="true" className="size-3 text-slate-600 dark:text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Program Unggulan (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-slate-900 dark:text-white text-xs font-mono font-bold tracking-wider uppercase">
              PROGRAM UNGGULAN
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 list-none p-0" role="list">
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true" className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0" />
                <span>Tahfidz Al-Qur&apos;an Target 3 Juz Mutqin Bersanad</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true" className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0" />
                <span>Pembiasaan Sholat Berjamaah &amp; Adab Harian</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true" className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0" />
                <span>Bilingual Percakapan Arab-Inggris Dasar</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true" className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0" />
                <span>Sains Terapan &amp; Logika Koding Kreatif</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden="true" className="size-1.5 rounded-none bg-amber-400 mt-2 shrink-0" />
                <span>Panahan Sunnah &amp; Bela Diri Students</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-slate-900 dark:text-white text-xs font-mono font-bold tracking-wider uppercase">
              KONTAK &amp; LAYANAN
            </h3>
            <address className="not-italic flex flex-col gap-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="size-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">Jl. Selabintana Km. 5, Warnasari, Sukabumi</span>
              </div>

              <div className="flex items-center justify-between gap-2 bg-slate-50 dark:bg-slate-900/80 p-3 rounded-none border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Phone aria-hidden="true" className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-mono text-xs text-slate-900 dark:text-white">0812-3456-7890</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                  title="Salin nomor WhatsApp"
                >
                  {copiedPhone ? (
                    <>
                      <Check aria-hidden="true" className="size-3 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy aria-hidden="true" className="size-3" />
                      <span>Salin</span>
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
                  <p className="text-slate-700 dark:text-slate-300">Senin – Jumat: 07.30 – 15.00 WIB</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">Sabtu: Perjanjian Khusus Admissions</p>
                </div>
              </div>

              {/* Direct WhatsApp Fast Chat */}
              <a
                href="https://wa.me/6281234567890?text=Halo%20Admin%20SD%20Al-Birru,%20saya%20ingin%20konsultasi%20pendaftaran%20sekolah."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-none bg-emerald-700 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md shadow-emerald-950 hover:scale-[1.02]"
              >
                <MessageCircle className="size-4" />
                <span>Konsultasi Cepat via WhatsApp</span>
                <ExternalLink className="size-3 opacity-80" />
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar with Mobile Dock Safe Clearance */}
      <div className="border-t border-slate-200 dark:border-slate-900 bg-slate-50/80 dark:bg-black/70 pt-7 pb-20 sm:pb-7 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} SD Al-Birru Sukabumi. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About School
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Peta Lokasi
            </Link>
            <Link
              href="/admin"
              className="text-amber-500 hover:text-amber-400 font-bold transition-colors"
            >
              Portal Login Teachers / CMS
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

