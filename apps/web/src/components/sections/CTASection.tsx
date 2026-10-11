"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BorderBeam } from "@/components/common/BorderBeam";
import { Button } from "@/components/ui/button";

export interface CTASectionProps {
  kicker?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
}

export function CTASection({
  kicker = "Penerimaan Siswa Baru TA 2026/2027",
  title = "Siapkan Fondasi Terbaik untuk Masa Depan Ananda",
  description = "Kuota dibatasi maksimal 2 kelas (40 siswa) demi menjamin perhatian personal dan mutu bimbingan tahfidz yang optimal. Konsultasikan minat dan kesiapan ananda bersama tim kami.",
  primaryBtnText = "Formulir Konsultasi Pendaftaran",
  primaryBtnHref = "/contact",
}: CTASectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="py-28 md:py-36 lg:py-44 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" scale={0.98}>
          <div className="relative group">
            {/* Corner Crosshairs */}
            <div className="absolute -top-1.5 -left-1.5 size-3 border border-amber-500 z-20 bg-[#FDFDFB] dark:bg-slate-950" />
            <div className="absolute -top-1.5 -right-1.5 size-3 border border-amber-500 z-20 bg-[#FDFDFB] dark:bg-slate-950" />
            <div className="absolute -bottom-1.5 -left-1.5 size-3 border border-amber-500 z-20 bg-[#FDFDFB] dark:bg-slate-950" />
            <div className="absolute -bottom-1.5 -right-1.5 size-3 border border-amber-500 z-20 bg-[#FDFDFB] dark:bg-slate-950" />

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
              <BorderBeam size={260} duration={14} colorFrom="#f59e0b" colorTo="#10b981" />
              {/* Removed conflicting background dots to allow GlobalGrid to shine clearly */}

              <div className="p-8 sm:p-12 md:p-16 max-w-4xl mx-auto text-center flex flex-col items-center relative z-10 w-full">
                {/* Top Monospace Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-amber-600 dark:text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-6">
                <span className="size-1.5 rounded-none bg-amber-500 dark:bg-amber-400 animate-pulse" />
                <span>{kicker}</span>
              </div>

              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]"
              >
                {title}
              </h2>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                {description}
              </p>

              {/* CTAs with generous touch targets & accessible contrast */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button render={<Link href={primaryBtnHref} />} nativeButton={false} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 h-13 rounded-none shadow-xs transition-all text-base group">
                  <span>{primaryBtnText}</span>
                  <ArrowRight aria-hidden="true" className="size-4.5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button 
                  render={<a href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20saya%20ingin%20konsultasi%20PPDB%20Tahun%20Ajaran%202026/2027." target="_blank" rel="noopener noreferrer" />} 
                  nativeButton={false} 
                  variant="outline" 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-7 h-13 rounded-none transition-all text-base group"
                >
                  <MessageCircle aria-hidden="true" className="size-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Chat WhatsApp Sekolah</span>
                </Button>
              </div>

              <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck aria-hidden="true" className="size-4 text-emerald-400 shrink-0" />
                <span>Konsultasi &amp; observasi awal ramah anak tanpa biaya tersembunyi</span>
              </div>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
