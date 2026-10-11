"use client";

import {
  ArrowRight,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const fitrahPillars = [
  {
    title: "Qudwah Hasanah",
    subtitle: "Living Role Model",
    desc: "Every teacher and instructor serves as an active exemplar of noble character observed directly by students.",
    icon: Sparkles,
  },
  {
    title: "Positive Discipline",
    subtitle: "Dignified Guidance",
    desc: "Cultivating independence and etiquette without verbal aggression or harmful physical punishments.",
    icon: Compass,
  },
  {
    title: "Family Synergy",
    subtitle: "School & Home Harmony",
    desc: "Harmonizing integrated daily habits through structured mutaba'ah collaboration between educators and parents.",
    icon: HeartHandshake,
  },
];

export function WelcomeSection() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="py-20 md:py-28 lg:py-36 bg-muted/30 border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headmaster Identity Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.1}>
              <Card className="p-8 sm:p-10 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <UserCheck className="size-8" />
                    </div>
                    <Badge variant="secondary" className="font-medium">
                      Leadership
                    </Badge>
                  </div>

                  <h3
                    id="headmaster-name"
                    className="text-2xl font-bold text-foreground tracking-tight"
                  >
                    Ustadz H. Ahmad Fauzi, M.Pd.
                  </h3>
                  <p className="text-sm font-medium text-primary mt-1">
                    Principal of SD Al-Birru
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Master of Islamic Educational Management (UIN)
                  </p>

                  <blockquote
                    cite="Ustadz H. Ahmad Fauzi, M.Pd."
                    className="mt-6 p-4 rounded-lg bg-muted text-sm text-foreground/90 leading-relaxed italic border-l-2 border-primary"
                  >
                    &quot;Education is not merely transferring knowledge, but
                    awakening fitrah, guarding purity of heart, and cultivating
                    noble morals before formal scholarship is taught.&quot;
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-medium">
                  <div className="flex items-center gap-1.5 text-primary">
                    <ShieldCheck className="size-4" />
                    <span>Child-Friendly School</span>
                  </div>
                  <span>JSIT STANDARD</span>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right Column: Pedagogical Philosophy & Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal direction="up" delay={0.2}>
              <Badge
                variant="outline"
                className="gap-1.5 px-3.5 py-1 mb-5 text-xs font-medium rounded-full"
              >
                <span>NATURE-BASED EDUCATION</span>
              </Badge>

              <h2
                id="welcome-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
              >
                Nurturing Children&apos;s Fitrah Through Role Modeling,
                Character, &amp; Compassion
              </h2>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Primary school students learn most profoundly from what they
                witness and experience firsthand. At SD Al-Birru, every
                classroom corner is crafted to foster love of knowledge and
                moral excellence.
              </p>

              {/* 3 Pillar Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {fitrahPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Card key={idx} className="p-5 flex flex-col justify-start">
                      <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </Card>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  render={<Link href="/about" />}
                  nativeButton={false}
                  size="lg"
                  className="gap-2 font-medium"
                >
                  <span>Learn About SD Al-Birru</span>
                  <ArrowRight className="size-4" />
                </Button>

                <Button
                  render={<Link href="/programs" />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="font-medium"
                >
                  <span>Explore Curriculum</span>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
