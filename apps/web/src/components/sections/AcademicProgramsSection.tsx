"use client";

import { ArrowRight, Book, BookOpen, Target } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Kurikulum Nasional & Standar Terpadu",
    badge: "Akademik Terpadu",
    desc: "Harmonisasi Kurikulum Merdeka nasional dengan nilai-nilai Islam mendalam. Menekankan nalar kritis sains, adab harian, dan pembentukan profil pelajar berkarakter mulia.",
    icon: BookOpen,
    link: "/programs#curriculum",
  },
  {
    title: "Tahfidzul Qur'an Mutqin Bersanad",
    badge: "Target 3 Juz Mutqin",
    desc: "Pembelajaran intensif tahfidz dengan sanad talaqqi Hafs 'an 'Ashim. Menargetkan kelulusan minimal 3 Juz (30, 29, 28) tuntas dengan ujian tasmi' sekali duduk dihadapan orang tua.",
    icon: Book,
    link: "/programs#tahfidz",
  },
  {
    title: "Pengembangan Minat, Bakat, & Sains",
    badge: "Holistic Talent",
    desc: "Ekstrakurikuler komprehensif mulai dari Junior Coding & Robotika, Panahan Sunnah, Tapak Suci, English & Arabic Club, hingga Laboratorium Eksplorasi Alam.",
    icon: Target,
    link: "/programs#extracurricular",
  },
];

export function AcademicProgramsSection() {
  return (
    <section
      id="academic-pillars"
      aria-labelledby="programs-heading"
      className="py-24 sm:py-32 lg:py-36 bg-background border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-18">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-border bg-muted/40 text-foreground">
                <span className="size-1.5 bg-primary" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  KURIKULUM UNGGULAN &amp; TAHFIDZ
                </span>
              </div>
              <h2
                id="programs-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]"
              >
                Program Akademik <br className="hidden sm:block" /> Holistik
                &amp; Berkelanjutan
              </h2>
            </div>

            <div className="shrink-0">
              <Button
                render={<Link href="/academics" />}
                nativeButton={false}
                variant="outline"
                className="gap-2 font-mono text-xs uppercase tracking-wider rounded-none shadow-none border-border hover:bg-foreground hover:text-background transition-colors"
              >
                <span>Lihat Seluruh Program</span>
                <ArrowRight data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Program Cards */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {programs.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="p-8 flex flex-col justify-between rounded-none border border-border hover:border-foreground/30 transition-colors bg-card/60 shadow-none relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-12 rounded-none bg-muted/40 border border-border flex items-center justify-center text-foreground shadow-none">
                        <Icon className="size-6" />
                      </div>
                      <span className="inline-flex px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider bg-muted/40 border border-border text-foreground font-bold">
                        {prog.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground leading-snug mb-3 tracking-tight">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-border">
                    <Link
                      href={prog.link}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-primary hover:text-foreground transition-colors"
                    >
                      <span>Lihat Silabus Lengkap</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
