"use client";

import { ArrowRight, Book, BookOpen, Target } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const programs = [
  {
    title: "Integrated National Curriculum",
    desc: "Harmonizing national educational standards with Islamic values. Emphasizing critical scientific reasoning, student character projects, and early moral excellence.",
    icon: BookOpen,
    link: "/programs#curriculum",
  },
  {
    title: "Mutqin Tahfidzul Qur'an",
    desc: "Targeting certified memorization of at least 3 Mutqin Juz (Juz 30, 29, 28) over 6 primary school years using standard tajweed rules and enjoyable daily muroja'ah routines.",
    icon: Book,
    link: "/programs#tahfidz",
  },
  {
    title: "Talent & Passion Development",
    desc: "Comprehensive extracurricular offerings ranging from Coding & Robotics, Archery, Martial Arts (Pencak Silat), to English Club to equip students for global readiness.",
    icon: Target,
    link: "/programs#extracurricular",
  },
];

export function AcademicProgramsSection() {
  return (
    <section
      id="academic-pillars"
      aria-labelledby="programs-heading"
      className="py-20 md:py-28 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <Badge
                variant="outline"
                className="gap-1.5 px-3.5 py-1 mb-5 text-xs font-medium rounded-full"
              >
                <span>CURRICULUM &amp; ACADEMICS</span>
              </Badge>
              <h2
                id="programs-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
              >
                Flagship &amp; Holistic <br className="hidden sm:block" />{" "}
                Academic Programs
              </h2>
            </div>

            <div className="shrink-0">
              <Button
                render={<Link href="/programs" />}
                nativeButton={false}
                variant="outline"
                className="gap-2 font-medium"
              >
                <span>View All Programs</span>
                <ArrowRight className="size-4" />
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
                  className="p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground leading-snug mb-3">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border">
                    <Button
                      render={<Link href={prog.link} />}
                      nativeButton={false}
                      variant="ghost"
                      size="sm"
                      className="gap-2 p-0 h-auto font-medium text-primary hover:bg-transparent hover:underline"
                    >
                      <span>Explore Syllabus</span>
                      <ArrowRight className="size-4" />
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
