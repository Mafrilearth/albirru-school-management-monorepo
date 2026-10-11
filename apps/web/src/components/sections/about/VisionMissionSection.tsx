"use client";

import {
  CheckCircle2,
  Compass,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function VisionMissionSection() {
  const missionPoints = [
    {
      num: "01",
      title: "Foundations of Faith & Worship",
      desc: "Instilling deep-rooted Islamic faith and daily devotional habits modeled on the prophetic teachings of Rasulullah ﷺ from an early age.",
    },
    {
      num: "02",
      title: "Certified Sanad Tahfidzul Qur'an",
      desc: "Delivering intensive Qur'anic halaqah sessions with a target of at least 3 mutqin juz, precise articulation (makharij), and verified tajweed.",
    },
    {
      num: "03",
      title: "Cultivation of Adab & 7 Core Virtues",
      desc: "Institutionalizing Islamic manners, 5S etiquette, social empathy, and filial devotion (birrul walidain) across campus and home routines.",
    },
    {
      num: "04",
      title: "Scientific Inquiry & Computing",
      desc: "Cultivating critical scientific reasoning, outdoor laboratory practicums, and algorithmic thinking through the National Curriculum.",
    },
    {
      num: "05",
      title: "Educational Community Synergy",
      desc: "Fostering harmonious partnerships among faculty, parents, and the broader community to nurture each child's innate fitrah.",
    },
  ];

  const coreValues = [
    {
      letter: "B",
      title: "Faith & Devotion",
      desc: "Anchoring monotheistic belief (Tawhid) and Islamic ethics as the guiding foundation of all knowledge acquisition.",
    },
    {
      letter: "I",
      title: "Integrity & Adab",
      desc: "Prioritizing honesty, modesty, and noble character above mere academic acquisition.",
    },
    {
      letter: "R",
      title: "Resilience & Diligence",
      desc: "Building perseverance, resilient learning endurance, and an enduring passion for beneficial literature.",
    },
    {
      letter: "R",
      title: "Respect & Compassion",
      desc: "Providing a secure, nurturing, child-friendly school environment imbued with mutual kindness and social empathy.",
    },
    {
      letter: "U",
      title: "Unwavering Excellence",
      desc: "Empowering every student to achieve their highest personal potential and creative confidence.",
    },
  ];

  return (
    <section
      aria-labelledby="vision-mission-heading"
      className="py-20 md:py-28 lg:py-36 bg-background border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="gap-2 px-3.5 py-1 mb-5 text-xs font-medium rounded-full"
          >
            <span>VISION, MISSION &amp; CORE VALUES</span>
          </Badge>
          <h2
            id="vision-mission-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
          >
            Philosophical Direction of Integrated Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            The conceptual foundation anchoring every learning pulse, child
            habituation routine, and curriculum design at SD Al-Birru Sukabumi.
          </p>
        </ScrollReveal>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Vision (5 Cols) */}
          <div className="lg:col-span-5 flex">
            <Card className="p-8 sm:p-10 flex-1 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Compass className="size-6" />
                  </div>
                  <Badge variant="secondary">VISION 2026-2030</Badge>
                </div>

                <h3
                  id="vision-card-title"
                  className="text-2xl font-bold text-foreground leading-snug tracking-tight"
                >
                  The Realization of a Qur&apos;anic Generation: Devout, Noble
                  in Character, Intellectually Brilliant, and Globally Aware.
                </h3>

                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  This vision serves as our guiding North Star in cultivating
                  students with unshakeable spirituality, refined ethics, and
                  modern scientific competence.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2 font-medium">
                  <Star className="size-4 text-amber-500 fill-amber-500" />
                  <span>3 Mutqin Juz Target</span>
                </div>
                <ShieldCheck className="size-4 text-emerald-600" />
              </div>
            </Card>
          </div>

          {/* Mission (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-6 flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Target className="size-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Operational Mission
                </span>
                <h3
                  id="misi-subheading"
                  className="text-xl font-bold text-foreground tracking-tight"
                >
                  5 Strategic Steps in Nurturing Child Fitrah
                </h3>
              </div>
            </div>

            <ol
              aria-labelledby="misi-subheading"
              className="flex flex-col gap-3 list-none p-0"
            >
              {missionPoints.map((item, idx) => (
                <li key={idx}>
                  <Card className="p-4 flex items-start gap-4 shadow-xs">
                    <Badge
                      variant="secondary"
                      className="font-mono text-xs shrink-0"
                    >
                      {item.num}
                    </Badge>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                </li>
              ))}
            </ol>

            <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
              <span>
                Evaluated periodically for continuous educational quality
                assurance
              </span>
            </div>
          </div>
        </div>

        {/* Core Values "B-I-R-R-U" */}
        <div className="pt-12 border-t border-border">
          <ScrollReveal
            direction="up"
            className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="size-5 text-primary" />
              <h3
                id="core-values-heading"
                className="text-2xl font-bold text-foreground tracking-tight"
              >
                Core Cultural Values (B - I - R - R - U)
              </h3>
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              5 Pillars of Noble Character
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => (
              <Card
                key={idx}
                className="p-6 flex flex-col justify-between shadow-xs hover:shadow-sm transition-shadow"
              >
                <div>
                  <div className="size-10 rounded-lg bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mb-4">
                    {val.letter}
                  </div>
                  <h4
                    id={`val-title-${idx}`}
                    className="font-semibold text-foreground text-sm"
                  >
                    {val.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border text-[11px] text-muted-foreground">
                  Pillar #{idx + 1}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
