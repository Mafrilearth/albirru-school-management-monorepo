"use client";

import { ArrowRight, Book, BookOpen, Target } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
      className="py-20 md:py-28 bg-background border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <Badge
                variant="outline"
                className="gap-1.5 px-3.5 py-1 mb-5 text-xs font-semibold rounded-full border-primary/30 text-primary bg-primary/5"
              >
                <span>KURIKULUM &amp; PROGRAM UNGGULAN</span>
              </Badge>
              <h2
                id="programs-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight"
              >
                Program Akademik <br className="hidden sm:block" /> Holistik
                &amp; Berkelanjutan
              </h2>
            </div>

            <div className="shrink-0">
              <Button
                render={<Link href="/programs" />}
                nativeButton={false}
                variant="outline"
                className="gap-2 font-semibold"
              >
                <span>Lihat Seluruh Program</span>
                <ArrowRight data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Program Cards */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 flex flex-col justify-between rounded-3xl border border-border hover:border-primary/40 transition-all hover:shadow-lg bg-card/90 shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                        <Icon className="size-6" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {prog.badge}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-foreground leading-snug mb-3">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-border">
                    <Button
                      render={<Link href={prog.link} />}
                      nativeButton={false}
                      variant="ghost"
                      size="sm"
                      className="gap-2 p-0 h-auto font-semibold text-primary hover:bg-transparent hover:underline"
                    >
                      <span>Lihat Silabus Lengkap</span>
                      <ArrowRight data-icon="inline-end" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
