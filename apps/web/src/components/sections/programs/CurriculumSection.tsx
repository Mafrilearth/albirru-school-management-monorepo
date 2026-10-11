"use client";

import {
  Award,
  BookMarked,
  BookOpen,
  CheckCircle2,
  Clock,
  Globe2,
  Heart,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useState } from "react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CurriculumPillar {
  id: string;
  code: string;
  title: string;
  icon: React.ElementType;
  badge: string;
  description: string;
  target: string;
  schedule: string;
  highlights: string[];
}

const pillars: CurriculumPillar[] = [
  {
    id: "tahfidz",
    code: "CUR // 01",
    title: "Tahfidzul Qur'an Curriculum",
    icon: BookMarked,
    badge: "Signature Excellence",
    description:
      "Intensive Al-Qur'an memorization program using Talaqqi and self-directed Muroja'ah methods. Emphasizes makharijul huruf precision, certified sanad tajweed, and deep comprehension of selected verses.",
    target:
      "Graduate Target: Minimum 3 Mutqin Juz (Juz 30, 29, 28) + 40 Selected Hadiths",
    schedule: "Monday – Friday | 07:15 – 08:45 AM (Morning Halaqah)",
    highlights: [
      "Daily Talaqqi method guided by certified Al-Qur'an sanad teachers",
      "New memorization deposits (ziyadah) and structured review cycles (muroja'ah)",
      "Daily mutaba'ah tracking log directly accessible to student guardians",
      "Single-sitting Tasmi' examination per juz witnessed by parents",
      "Grand Tahfidz Graduation with official graduation syahadah certification",
    ],
  },
  {
    id: "merdeka",
    code: "KUR // 02",
    title: "National Merdeka Curriculum",
    icon: BookOpen,
    badge: "Ministry Standard",
    description:
      "Implements the flexible Merdeka Curriculum structure focusing on essential subject matter, Pancasila character development, and rigorous literacy and numeracy competencies.",
    target:
      "Achievement Target: Critical Thinking Independence & Conceptual Science Mastery",
    schedule: "Monday – Thursday | 09:00 AM – 02:15 PM (Thematic Learning)",
    highlights: [
      "Differentiated learning honoring each student's unique learning pace",
      "P5 interdisciplinary projects themed on environmental sustainability, social adab, and applied technology",
      "Applied science laboratory experiments in the school's outdoor nature lab",
      "Regular diagnostic assessments without rigid ranking pressure",
      "Weekly children's literature book club and literacy development",
    ],
  },
  {
    id: "adab",
    code: "KUR // 03",
    title: "Adab & Character Cultivation",
    icon: Heart,
    badge: "Moral Cultivation",
    description:
      "Cultivating adab before formal knowledge. Instilling 7 daily righteous habits so Islamic values become second nature in students' daily conduct at school and home.",
    target:
      "Achievement Target: Noble Character, Independence, and Devotion to Parents",
    schedule: "Full School Day (Living School Culture)",
    highlights: [
      "Daily Dhuha prayers and punctual congregational Dhuhr prayer",
      "Daily adab practice: dining etiquette, friendship adab, respect towards parents & teachers",
      "5S Culture Movement (Smile, Greet, Welcome, Polite, Courteous) at the entrance gates",
      "Weekly dawn charity (Infaq Subuh) to nurture empathy and social solidarity",
      "Independence Week for self-reliance in worship and positive discipline",
    ],
  },
  {
    id: "bahasa",
    code: "KUR // 04",
    title: "Languages & Digital Literacy",
    icon: Globe2,
    badge: "Global Perspective",
    description:
      "Equipping students with practical bilingual communication skills (Arabic and English), alongside foundational algorithmic thinking and computer literacy from an early age.",
    target:
      "Achievement Target: Active Daily Conversation & Healthy Digital Literacy",
    schedule: "Integrated across Language Halaqah & Computer Labs",
    highlights: [
      "Thematic Arabic Day & English Day using immersive vocabulary in student environments",
      "Foundational computational thinking and problem solving (unplugged coding)",
      "Multimedia integration for visualizing complex scientific concepts",
      "Digital ethics education and healthy screen time habits",
      "Trilingual speech contests and storytelling during Student Expression Week",
    ],
  },
];

export function CurriculumSection() {
  const [activeTab, setActiveTab] = useState<string>("tahfidz");
  const selectedPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const Icon = selectedPillar.icon;

  return (
    <section
      aria-labelledby="curriculum-heading"
      className="py-20 md:py-28 lg:py-32 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal
          direction="up"
          className="max-w-3xl mb-12 md:mb-16 text-center sm:text-left"
        >
          <Badge variant="secondary" className="mb-4">
            Kurikulum &amp; Pembelajaran
          </Badge>
          <h2
            id="curriculum-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Sinergi Kurikulum Merdeka &amp; Pendidikan Islam
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Dirancang secara holistik agar peserta didik tidak hanya kokoh dalam
            hafalan Al-Qur&apos;an, tetapi juga unggul secara akademik dengan
            nalar kritis dan sains yang adaptif.
          </p>
        </ScrollReveal>

        {/* Tab Selection */}
        <div
          role="tablist"
          aria-label="Pilihan Pilar Kurikulum"
          className="flex flex-wrap items-center gap-2 p-1.5 rounded-lg bg-muted border border-border max-w-4xl mb-10"
        >
          {pillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                id={`curriculum-tab-${pillar.id}`}
                aria-selected={isActive}
                aria-controls={`curriculum-panel-${pillar.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(pillar.id)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <PillarIcon
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPillar.id}
            role="tabpanel"
            id={`curriculum-panel-${selectedPillar.id}`}
            aria-labelledby={`curriculum-tab-${selectedPillar.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-6 sm:p-10 lg:p-12">
                <article
                  aria-labelledby={`pillar-title-${selectedPillar.id}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
                >
                  {/* Left Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          aria-hidden="true"
                          className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"
                        >
                          <Icon className="size-7" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1 text-xs">
                            {selectedPillar.badge}
                          </Badge>
                          <h3
                            id={`pillar-title-${selectedPillar.id}`}
                            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
                          >
                            {selectedPillar.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {selectedPillar.description}
                      </p>
                    </div>

                    <dl className="mt-8 flex flex-col gap-3">
                      <div className="p-4 rounded-lg bg-muted/50 border border-border flex items-start gap-3">
                        <Clock
                          aria-hidden="true"
                          className="size-5 text-primary shrink-0 mt-0.5"
                        />
                        <div>
                          <dt className="text-xs font-semibold text-muted-foreground">
                            Jadwal Pembelajaran
                          </dt>
                          <dd className="text-xs sm:text-sm font-medium text-foreground mt-0.5">
                            {selectedPillar.schedule}
                          </dd>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-3">
                        <Award
                          aria-hidden="true"
                          className="size-5 text-primary shrink-0 mt-0.5"
                        />
                        <div>
                          <dt className="text-xs font-semibold text-primary">
                            Target Capaian
                          </dt>
                          <dd className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">
                            {selectedPillar.target}
                          </dd>
                        </div>
                      </div>
                    </dl>
                  </div>

                  {/* Right Column: Highlights */}
                  <div className="lg:col-span-7">
                    <h4
                      id={`strategy-heading-${selectedPillar.id}`}
                      className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2"
                    >
                      <Sparkles
                        aria-hidden="true"
                        className="size-4 text-primary"
                      />
                      <span>Strategi &amp; Aktivitas Pembelajaran:</span>
                    </h4>

                    <ul
                      aria-labelledby={`strategy-heading-${selectedPillar.id}`}
                      className="flex flex-col gap-3 list-none p-0"
                    >
                      {selectedPillar.highlights.map((item, idx) => (
                        <li key={idx}>
                          <div className="flex items-start gap-3.5 p-4 rounded-lg bg-muted/40 border border-border/70 hover:border-border transition-colors">
                            <CheckCircle2
                              aria-hidden="true"
                              className="size-5 text-primary shrink-0 mt-0.5"
                            />
                            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                              {item}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
