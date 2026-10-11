"use client";

import {
  BookOpen,
  Calendar,
  HeartHandshake,
  Milestone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";

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
        "SD Al-Birru officially received its operational permit from the Education and Culture Office alongside an official NPSN. Classes began for the first cohort with modern facilities and an ideal 1:15 student-teacher ratio.",
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
      className="py-28 md:py-36 lg:py-44 bg-[#FDFDFB] dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-700/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Meaning of Al-Birru & Quranic Verse */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs text-[11px] font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase mb-5">
                <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
                <span>PHILOSOPHY // ORIGIN OF THE NAME</span>
              </div>

              <h2
                id="history-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]"
              >
                Why the Name <span className="text-amber-600">Al-Birru</span>?
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                The term <strong>&quot;Al-Birr&quot; (الْبِرِّ)</strong> originates
                from the Holy Qur&apos;an Surah Al-Baqarah verse 177,
                symbolizing <em>comprehensive virtue</em>: the harmonious
                integration of upright faith, refined etiquette, social
                compassion, and moral integrity.
              </p>

              {/* Quranic Verse Showcase Card with Semantic Blockquote */}
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
                className="mt-10"
              >
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.1)"
                  borderColor="rgba(245, 158, 11, 0.35)"
                  className="p-8 bg-white dark:bg-slate-900 border-amber-200/80 shadow-2xs hover:shadow-lg transition-all rounded-none"
                >
                  <cite className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block mb-4 not-italic">
                    QS. AL-BAQARAH: 177
                  </cite>
                  <p
                    lang="ar"
                    dir="rtl"
                    className="text-right text-lg sm:text-xl font-serif text-slate-900 dark:text-slate-50 leading-loose"
                  >
                    لَّيْسَ الْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ
                    بِاللَّهِ...
                  </p>
                  <blockquote
                    cite="https://quran.com/2/177"
                    className="mt-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium italic leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4"
                  >
                    &quot;Righteousness is not that you turn your faces toward
                    the east or the west, but [true] righteousness is [in] one
                    who believes in Allah, the Last Day, the angels, the Book,
                    and the prophets...&quot;
                  </blockquote>
                </SpotlightCard>
              </motion.div>

              <div className="mt-8 flex items-center gap-3 text-xs text-slate-500 font-mono">
                <HeartHandshake className="size-4 text-amber-600 shrink-0" />
                <span>
                  Guiding with compassion, educating through living example
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Out-of-the-Box Architectural Timeline */}
          <div className="lg:col-span-7">
            <ol className="relative pl-6 sm:pl-10 border-l-2 border-slate-200 dark:border-slate-700 space-y-12 sm:space-y-14">
              {milestones.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="relative group list-none"
                  >
                    {/* Glowing Node on Timeline Axis */}
                    <div className="absolute -left-[35px] sm:-left-[51px] top-2 flex size-8 sm:size-9 items-center justify-center rounded-none bg-slate-950 text-amber-400 font-mono font-bold text-xs shadow-md border border-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 dark:hover:text-slate-50 group-hover:scale-110 transition-all">
                      <Icon className="size-4" />
                    </div>

                    {/* Milestone Card with Spotlight & Semantic Article */}
                    <article aria-labelledby={`milestone-title-${idx}`}>
                      <SpotlightCard
                        spotlightColor="rgba(245, 158, 11, 0.08)"
                        className="p-7 sm:p-8 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-lg transition-all rounded-none"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                          <time
                            dateTime={item.year}
                            className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-none border border-amber-200/60"
                          >
                            YEAR {item.year}
                          </time>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            {item.badge}
                          </span>
                        </div>

                        <h3
                          id={`milestone-title-${idx}`}
                          className="text-lg sm:text-xl font-bold text-slate-950 dark:text-slate-50 group-hover:text-amber-800 transition-colors leading-snug"
                        >
                          {item.title}
                        </h3>

                        <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </SpotlightCard>
                    </article>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
