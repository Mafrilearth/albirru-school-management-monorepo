"use client";

import {
  BookOpen,
  Calendar,
  HeartHandshake,
  Milestone,
  ShieldCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function HistoryTimelineSection() {
  const milestones = [
    {
      year: "2019",
      badge: "PHASE 01 // INITIATION",
      title: "Initiation & Groundbreaking",
      description:
        "Founded out of concern among community educational figures and scholars in Sukabumi regarding the scarcity of primary schools balancing mutqin tahfidz with modern scientific literacy without causing academic burnout.",
      icon: Milestone,
    },
    {
      year: "2020",
      badge: "PHASE 02 // LEGALITY & INAUGURATION",
      title: "Operational Permit & Inaugural Cohort",
      description:
        "Al-Birru Primary School officially received its operational permit from the Education and Culture Office alongside official statutory registration. Classes began for the first cohort with modern facilities and an ideal 1:15 student-teacher ratio.",
      icon: Calendar,
    },
    {
      year: "2023",
      badge: "PHASE 03 // SCIENTIFIC TRANSFORMATION",
      title: "National Curriculum & Digital Labs",
      description:
        "Adopted the National Curriculum fully, integrated certified sanad talaqqi tahfidz, and launched the Digital Literacy Corner and Applied Science Laboratory.",
      icon: BookOpen,
    },
    {
      year: "2026",
      badge: "PHASE 04 // EXCELLENT CAMPUS",
      title: "Integrated Growth & Institutional Accreditation",
      description:
        "Established as a benchmark Islamic primary school in Sukabumi with regional and provincial tahfidz championship titles, accompanied by expanded prayer halls and child-friendly sports arenas.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      aria-labelledby="history-heading"
      className="py-20 md:py-28 lg:py-36 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Meaning of Al-Birru & Quranic Verse */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ScrollReveal direction="up">
              <Badge
                variant="outline"
                className="gap-2 px-3.5 py-1 mb-5 text-xs font-medium rounded-full"
              >
                <span>ORIGIN OF THE NAME</span>
              </Badge>

              <h2
                id="history-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
              >
                Why the Name <span className="text-primary">Al-Birru</span>?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                The term <strong>&quot;Al-Birr&quot; (الْبِرِّ)</strong> originates
                from the Holy Qur&apos;an Surah Al-Baqarah verse 177,
                symbolizing <em>comprehensive virtue</em>: the harmonious
                integration of upright faith, refined etiquette, social
                compassion, and moral integrity.
              </p>

              {/* Quranic Verse Card */}
              <Card className="mt-8 p-6 shadow-sm">
                <span className="text-xs font-semibold text-primary block mb-3">
                  QS. AL-BAQARAH: 177
                </span>
                <p
                  lang="ar"
                  dir="rtl"
                  className="text-right text-lg sm:text-xl font-serif text-foreground leading-loose"
                >
                  لَّيْسَ الْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ
                  بِاللَّهِ...
                </p>

                <blockquote
                  cite="https://quran.com/2/177"
                  className="mt-4 pt-4 border-t border-border text-xs sm:text-sm text-muted-foreground italic leading-relaxed"
                >
                  &quot;Righteousness is not that you turn your faces toward the
                  east or the west, but [true] righteousness is [in] one who
                  believes in Allah, the Last Day, the angels, the Book, and the
                  prophets...&quot;
                </blockquote>
              </Card>

              <div className="mt-6 flex items-center gap-2.5 text-xs text-muted-foreground">
                <HeartHandshake className="size-4 text-primary shrink-0" />
                <span>
                  Guiding with compassion, educating through living example
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7">
            <ol className="relative pl-6 sm:pl-8 border-l-2 border-border flex flex-col gap-8 sm:gap-10">
              {milestones.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="relative group list-none">
                    {/* Node on Timeline */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex size-8 items-center justify-center rounded-full bg-background border-2 border-primary text-primary shadow-xs">
                      <Icon className="size-4" />
                    </div>

                    {/* Milestone Card */}
                    <Card className="p-6 sm:p-7 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <Badge
                          variant="default"
                          className="text-xs font-semibold"
                        >
                          {item.year}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {item.badge}
                        </span>
                      </div>

                      <h3
                        id={`milestone-title-${idx}`}
                        className="text-lg font-bold text-foreground leading-snug"
                      >
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
