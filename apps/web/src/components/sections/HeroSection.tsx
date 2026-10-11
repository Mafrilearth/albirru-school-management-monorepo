"use client";

import React from "react";
import Link from "next/link";
import { Compass, Sparkles, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-transparent border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Industrial Modern Headline & Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Tagline */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 shadow-none text-xs font-semibold text-emerald-700 dark:text-emerald-400 tracking-widest uppercase mb-6"
            >
              <Sparkles aria-hidden="true" className="size-3 text-emerald-500" />
              <span>Penerimaan Siswa Baru TP 2026/2027 Dibuka</span>
            </div>

            {/* High-Impact Headline */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-tight uppercase"
            >
              Membentuk Karakter, <br className="hidden sm:block" /> Membina Ilmu, Membangun Integritas.
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
              Sekolah Dasar Al-Birru menyelenggarakan kurikulum dasar nasional terintegrasi nilai Islam di Bandung yang berfokus pada pembiasaan adab disiplin, nalar analitis, dan keunggulan budi pekerti.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button render={<Link href="/admission" />} nativeButton={false} className="flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 h-12 rounded-none text-sm border-0 uppercase tracking-widest shadow-none transition-colors">
                <span>Daftarkan Siswa Sekarang</span>
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button render={<Link href="/programs" />} nativeButton={false} variant="outline" className="flex items-center justify-center bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-900 dark:text-slate-100 font-bold px-8 h-12 rounded-none text-sm border border-slate-200 dark:border-slate-800 uppercase tracking-widest shadow-none transition-colors">
                <FileText className="mr-2 size-4" />
                <span>Unduh Brosur Informasi</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Blueprint Card */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <Card className="rounded-none border border-slate-200 dark:border-slate-800 shadow-none p-0 overflow-hidden relative bg-white dark:bg-slate-950">
              <CardContent className="aspect-[4/3] p-6 flex flex-col justify-between relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-slate-600 dark:text-slate-400 uppercase font-mono">
                    Metrik Kinerja Operasional Sekolah
                  </span>
                  <Badge variant="outline" className="rounded-none border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 font-mono text-[10px] gap-2 uppercase font-bold px-2 py-0.5 shadow-none">
                    <span aria-hidden="true" className="size-2 rounded-none bg-emerald-500" />
                    Peringkat A (Unggul)
                  </Badge>
                </div>

                <div className="relative z-10 my-auto text-center py-6">
                  <div className="size-16 rounded-none bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-900/50 mx-auto flex items-center justify-center mb-4 shadow-none">
                    <Compass aria-hidden="true" className="size-8 text-amber-600 dark:text-amber-500" />
                  </div>
                  <p className="text-base font-bold text-slate-900 dark:text-slate-50 uppercase tracking-tight">
                    Sekolah Dasar Al-Birru
                  </p>
                  <address className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-mono not-italic font-medium">
                    Status Akreditasi Institusi
                  </address>
                </div>
              </CardContent>
              
              <CardFooter className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono font-bold uppercase tracking-wider rounded-none">
                <span>Kepatuhan Presensi Siswa Harian</span>
                <span className="text-emerald-600 dark:text-emerald-500">98.4% Kehadiran Tepat Waktu</span>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Semantic Definition List for Tabular Metric Pairs (Exposed Grid Style) */}
        <dl className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-3 bg-slate-200 dark:bg-slate-800 gap-[1px] border-y border-slate-200 dark:border-slate-800 text-start relative rounded-none">
          <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 flex flex-col justify-center rounded-none">
            <dd className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-50 font-mono tracking-tight uppercase">
              15 : 1
            </dd>
            <dt className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-2 uppercase tracking-widest font-mono">
              Rasio Maksimum Pengajar & Siswa
            </dt>
          </div>

          <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 flex flex-col justify-center rounded-none">
            <dd className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-50 font-mono tracking-tight uppercase">
              A
            </dd>
            <dt className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-2 uppercase tracking-widest font-mono">
              Peringkat BAN-S/M
            </dt>
          </div>

          <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 flex flex-col justify-center rounded-none sm:col-span-2 md:col-span-1">
            <dd className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-50 font-mono tracking-tight uppercase">
              98.4%
            </dd>
            <dt className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-2 uppercase tracking-widest font-mono">
              Kehadiran Tepat Waktu
            </dt>
          </div>
        </dl>
      </div>
    </section>
  );
}
