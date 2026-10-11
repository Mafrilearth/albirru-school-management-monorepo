"use client";

import {
  CheckCircle2,
  Compass,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/common/BorderBeam";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";

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
      accent: "text-amber-500",
      glow: "rgba(245, 158, 11, 0.12)",
    },
    {
      letter: "I",
      title: "Integrity & Adab",
      desc: "Prioritizing honesty, modesty, and noble character above mere academic acquisition.",
      accent: "text-emerald-500",
      glow: "rgba(16, 185, 129, 0.12)",
    },
    {
      letter: "R",
      title: "Resilience & Diligence",
      desc: "Building perseverance, resilient learning endurance, and an enduring passion for beneficial literature.",
      accent: "text-sky-500",
      glow: "rgba(14, 165, 233, 0.12)",
    },
    {
      letter: "R",
      title: "Respect & Compassion",
      desc: "Providing a secure, nurturing, child-friendly school environment imbued with mutual kindness and social empathy.",
      accent: "text-purple-500",
      glow: "rgba(168, 85, 247, 0.12)",
    },
    {
      letter: "U",
      title: "Unwavering Excellence",
      desc: "Empowering every student to achieve their highest personal potential and creative confidence.",
      accent: "text-rose-500",
      glow: "rgba(244, 63, 94, 0.12)",
    },
  ];

  return (
    <section
      aria-labelledby="vision-mission-heading"
      className="py-28 md:py-36 lg:py-44 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-700/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-slate-100 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
            <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
            <span>FOUNDATION // VISION, MISSION &amp; CORE VALUES</span>
          </div>
          <h2
            id="vision-mission-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]"
          >
            Philosophical Direction of Integrated Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            The conceptual foundation anchoring every learning pulse, child
            habituation routine, and curriculum design at SD Al-Birru Sukabumi.
          </p>
        </ScrollReveal>

        {/* Vision & Mission Out-of-the-Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-24 items-stretch">
          {/* Visi (5 Cols) - Obsidian Spotlight with BorderBeam */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <article
              aria-labelledby="vision-card-title"
              className="flex-1 flex"
            >
              <SpotlightCard
                spotlightColor="rgba(245, 158, 11, 0.15)"
                borderColor="rgba(245, 158, 11, 0.4)"
                className="bg-slate-950 text-white p-8 sm:p-12 border-slate-800 shadow-md flex-1 flex flex-col justify-between relative overflow-hidden group rounded-none"
              >
                <BorderBeam
                  size={220}
                  duration={12}
                  colorFrom="#f59e0b"
                  colorTo="#10b981"
                />

                <div
                  aria-hidden="true"
                  className="absolute -top-24 -right-24 size-60 rounded-none bg-amber-500/10 blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="size-13 rounded-none bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shadow-2xs">
                      <Compass className="size-6 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                    <span className="font-mono text-[11px] font-bold text-amber-400 tracking-widest uppercase px-3 py-1.5 rounded-none bg-slate-900 border border-slate-800">
                      CORE VISION 2026-2030
                    </span>
                  </div>

                  <h3
                    id="vision-card-title"
                    className="text-2xl sm:text-3xl font-black text-white leading-snug tracking-tight"
                  >
                    The Realization of a Qur&apos;anic Generation: Devout, Noble
                    in Character, Intellectually Brilliant, and Globally Aware.
                  </h3>

                  <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    This vision serves as our guiding North Star in cultivating
                    students with unshakeable spirituality, refined ethics, and
                    modern scientific competence.
                  </p>
                </div>

                <div className="relative z-10 mt-12 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-amber-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Star className="size-4 fill-amber-400" />
                    <span>Target: 3 Mutqin Juz &amp; Noble Character</span>
                  </div>
                  <ShieldCheck className="size-4 text-emerald-400" />
                </div>
              </SpotlightCard>
            </article>
          </motion.div>

          {/* Misi (7 Cols) - Interactive Step Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="mb-6 flex items-center gap-3.5">
              <div className="size-12 rounded-none bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 shadow-2xs">
                <Target className="size-6" />
              </div>
              <div>
                <span className="text-emerald-700 text-[11px] font-bold uppercase tracking-wider font-mono">
                  OPERATIONAL MISSION
                </span>
                <h3
                  id="misi-subheading"
                  className="text-xl sm:text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight"
                >
                  5 Strategic Steps in Nurturing Child Fitrah
                </h3>
              </div>
            </div>

            <ol aria-labelledby="misi-subheading" className="space-y-3.5 mt-2">
              {missionPoints.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="list-none"
                >
                  <article className="flex items-start gap-4 p-5 rounded-none bg-[#FDFDFB] dark:bg-slate-950 border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-300 dark:border-slate-600 hover:shadow-xs transition-all group">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-none bg-slate-950 text-amber-400 font-mono font-bold text-xs group-hover:bg-amber-500 group-hover:text-slate-950 dark:hover:text-slate-50 transition-colors">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 dark:text-slate-50 group-hover:text-amber-800 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1 font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                </motion.li>
              ))}
            </ol>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center gap-2 font-mono">
              <CheckCircle2 className="size-4 text-emerald-700 shrink-0" />
              <span>
                Evaluated periodically for continuous educational quality
                assurance
              </span>
            </div>
          </motion.div>
        </div>

        {/* Core Values "B-I-R-R-U" Out-of-the-Box Architectural Glyph Cards */}
        <section
          aria-labelledby="core-values-heading"
          className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-700/80"
        >
          <ScrollReveal
            direction="up"
            className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="size-6 text-amber-500" />
              <h3
                id="core-values-heading"
                className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight"
              >
                Core Cultural Values (B - I - R - R - U)
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              5 PILLARS OF NOBLE CHARACTER
            </span>
          </ScrollReveal>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="list-none flex"
              >
                <article
                  aria-labelledby={`val-title-${idx}`}
                  className="flex-1 flex"
                >
                  <SpotlightCard
                    spotlightColor={val.glow}
                    className="p-7 bg-[#FDFDFB] dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-700 dark:bg-slate-900 shadow-2xs hover:shadow-md transition-all flex-1 relative flex flex-col justify-between rounded-none"
                  >
                    {/* Huge Background Letter Watermark */}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-4 -right-1 text-7xl font-black text-slate-900/[0.04] select-none font-mono pointer-events-none group-hover:scale-110 transition-transform"
                    >
                      {val.letter}
                    </span>

                    <div className="relative z-10">
                      <div
                        className={`size-12 rounded-none bg-slate-950 text-white font-mono font-black text-xl flex items-center justify-center mb-5 shadow-2xs ${val.accent}`}
                      >
                        {val.letter}
                      </div>
                      <h4
                        id={`val-title-${idx}`}
                        className="font-bold text-slate-950 dark:text-slate-50 text-sm leading-snug"
                      >
                        {val.title}
                      </h4>
                      <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {val.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-8 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 font-mono">
                      PILLAR #{idx + 1}
                    </div>
                  </SpotlightCard>
                </article>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
