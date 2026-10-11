"use client";

import React from "react";
import { BookOpen, Calendar, Milestone, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";

export function HistoryTimelineSection() {
  const milestones = [
    {
      year: "2019",
      badge: "FASE 01 // INISIASI",
      title: "Inisiasi & Peletakan Batu Pertama",
      description:
        "Berangkat dari keprihatinan para tokoh pendidikan dan asatidz di Sukabumi akan minimnya lembaga pendidikan dasar yang mampu menyeimbangkan tahfidz mutqin dengan literasi sains modern tanpa membebani mental anak.",
      icon: Milestone,
    },
    {
      year: "2020",
      badge: "FASE 02 // LEGALITAS & PERDANA",
      title: "Izin Operasional & Angkatan Perdana",
      description:
        "SD Al-Birru secara resmi mengantongi izin operasional dari Dinas Pendidikan dan Kebudayaan serta NPSN resmi. Memulai pembelajaran angkatan pertama dengan fasilitas ruang kelas terpadu dan rasio pengajaran terukur 1:15.",
      icon: Calendar,
    },
    {
      year: "2023",
      badge: "FASE 03 // TRANSFORMASI SAINS",
      title: "Penerapan Curriculum Merdeka & Lab Digital",
      description:
        "Mengadopsi Curriculum Merdeka secara penuh, mengintegrasikan metode talaqqi tahfidz bersanad, serta meluncurkan Pojok Literasi Digital & Laboratorium Sains Eksperimen Terapan.",
      icon: BookOpen,
    },
    {
      year: "2026",
      badge: "FASE 04 // KAMPUS UNGGUL",
      title: "Pengembangan Terpadu & Akreditasi Unggul",
      description:
        "Menjadi salah satu SD Islam rujukan di Sukabumi dengan prestasi kejuaraan tahfidz tingkat wilayah dan provinsi, serta perluasan aula ibadah dan sarana olahraga ramah anak.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section aria-labelledby="history-heading" className="py-28 md:py-36 lg:py-44 bg-[#FDFDFB] dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Meaning of Al-Birru & Quranic Verse */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs text-[11px] font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase mb-5">
                <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
                <span>FILOSOFI // ASAL-USUL NAMA</span>
              </div>

              <h2 id="history-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]">
                Mengapa Bernama <span className="text-amber-600">Al-Birru</span>?
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Kata <strong>&quot;Al-Birr&quot; (الْبِرِّ)</strong> bersumber dari Al-Qur&apos;an
                Surah Al-Baqarah ayat 177, yang melambangkan <em>kebajikan paripurna</em>: perpaduan
                antara keimanan lurus, adab santun, kepekaan sosial, dan integritas moral.
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
                  <p lang="ar" dir="rtl" className="text-right text-lg sm:text-xl font-serif text-slate-900 dark:text-slate-50 leading-loose">
                    لَّيْسَ الْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ...
                  </p>
                  <blockquote cite="https://quran.com/2/177" className="mt-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium italic leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                    &quot;Bukanlah menghadapkan wajahmu ke arah timur dan barat itu suatu kebajikan (al-birr),
                    akan tetapi kebajikan itu ialah beriman kepada Allah, hari kemudian, malaikat-malaikat,
                    kitab-kitab, dan nabi-nabi...&quot;
                  </blockquote>
                </SpotlightCard>
              </motion.div>

              <div className="mt-8 flex items-center gap-3 text-xs text-slate-500 font-mono">
                <HeartHandshake className="size-4 text-amber-600 shrink-0" />
                <span>Membimbing dengan cinta, mendidik dengan keteladanan</span>
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
                          <time dateTime={item.year} className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-none border border-amber-200/60">
                            TAHUN {item.year}
                          </time>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            {item.badge}
                          </span>
                        </div>

                        <h3 id={`milestone-title-${idx}`} className="text-lg sm:text-xl font-bold text-slate-950 dark:text-slate-50 group-hover:text-amber-800 transition-colors leading-snug">
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
