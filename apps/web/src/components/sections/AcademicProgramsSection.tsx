"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Book, Target } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const programs = [
  {
    code: "PROG // 01",
    title: "Kurikulum Merdeka Terpadu",
    desc: "Mengintegrasikan standar nasional pendidikan dengan nilai-nilai keislaman. Menekankan pada nalar kritis sains, proyek penguatan profil Pelajar Pancasila, dan pembentukan karakter akhlakul karimah sejak dini.",
    icon: BookOpen,
    link: "/programs#kurikulum",
  },
  {
    code: "PROG // 02",
    title: "Tahfidzul Qur'an Mutqin",
    desc: "Target hafalan mutqin minimal 3 Juz bersanad (Juz 30, 29, 28) selama 6 tahun pendidikan. Menggunakan metode tajwid standar dan pembiasaan murajaah harian yang ketat namun menyenangkan.",
    icon: Book,
    link: "/programs#tahfidz",
  },
  {
    code: "PROG // 03",
    title: "Pengembangan Minat & Bakat",
    desc: "Fasilitas ekstrakurikuler komprehensif mulai dari Pemrograman & Robotika, Panahan, Bela Diri (Pencak Silat), hingga Klub Bahasa Inggris untuk mempersiapkan siswa bersaing di era globalisasi.",
    icon: Target,
    link: "/programs#ekstrakurikuler",
  },
];

export function AcademicProgramsSection() {
  return (
    <section aria-labelledby="programs-heading" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
                <span className="size-1.5 rounded-none bg-emerald-500 animate-pulse" />
                <span>KURIKULUM // AKADEMIK</span>
              </div>
              <h2 id="programs-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 dark:text-slate-50 tracking-tight leading-tight">
                Program Pendidikan <br className="hidden sm:block" /> Unggulan &amp; Holistik
              </h2>
            </div>
            
            <div className="shrink-0">
              <Link
                href="/programs"
                className="group inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold px-6 h-12 rounded-none text-xs sm:text-sm transition-all shadow-2xs"
              >
                <span>Lihat Seluruh Program</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Architectural Grid */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-200 dark:bg-slate-800 gap-[1px] border border-slate-200 dark:border-slate-800 relative">
            {programs.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <article
                  key={idx}
                  aria-labelledby={`prog-title-${idx}`}
                  className="bg-white dark:bg-slate-900 p-8 sm:p-10 flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-colors group h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="size-14 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 transition-transform group-hover:scale-110">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        {prog.code}
                      </span>
                    </div>
                    
                    <h3 id={`prog-title-${idx}`} className="text-xl font-bold text-slate-950 dark:text-slate-50 leading-snug mb-4">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <Link
                      href={prog.link}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider group/link"
                    >
                      <span>Pelajari Silabus</span>
                      <ArrowRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
