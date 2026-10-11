"use client";

import {
  BookOpen,
  Building2,
  Check,
  HeartPulse,
  Laptop,
  ShieldCheck,
  Sun,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";
import type React from "react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";

interface FacilityItem {
  code: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  specs: string[];
}

const facilities: FacilityItem[] = [
  {
    code: "FAS // 01",
    title: "Air-Conditioned Ergonomic Classrooms",
    category: "Learning Spaces",
    description:
      "Clean, air-conditioned learning spaces equipped with multimedia projectors, natural daylighting, and personal student lockers.",
    icon: Building2,
    specs: [
      "Maximum 20 students/class",
      "Smart Display & Audio",
      "Healthy Natural Lighting",
    ],
  },
  {
    code: "FAS // 02",
    title: "Mosque & Congregational Prayer Hall",
    category: "Spiritual Center",
    description:
      "Sacred space for daily Dhuha prayers, congregational obligatory prayers, and student Al-Qur'an tasmi' assemblies with parents.",
    icon: Sun,
    specs: [
      "Capacity 300+ congregants",
      "Hygienic separated ablution areas",
      "Plush carpeting & climate control",
    ],
  },
  {
    code: "FAS // 03",
    title: "Library & Children's Reading Corner",
    category: "Literacy",
    description:
      "Literacy center featuring hundreds of illustrated children's storybooks, Islamic science encyclopedias, and a comfortable floor-seating reading area.",
    icon: BookOpen,
    specs: [
      "500+ Curated book titles",
      "Beanbag lounge reading space",
      "Structured lending system",
    ],
  },
  {
    code: "FAS // 04",
    title: "Science & Computer Laboratory",
    category: "Technology",
    description:
      "Laboratory for hands-on applied science experiments and computer workstations introducing fundamental coding and computational logic.",
    icon: Laptop,
    specs: [
      "Safe science experiment kits",
      "Protected computer workstations",
      "Safe, filtered internet access",
    ],
  },
  {
    code: "FAS // 05",
    title: "Sports Field & Archery Range",
    category: "Physical Fitness",
    description:
      "Multipurpose open-air grounds for morning calisthenics, mini futsal, badminton, and traditional sunnah archery range.",
    icon: Trophy,
    specs: [
      "Safety-standard court flooring",
      "Dedicated archery target butts",
      "Comprehensive sporting equipment",
    ],
  },
  {
    code: "FAS // 06",
    title: "School Clinic & Child-Friendly Counseling",
    category: "Health & Wellness",
    description:
      "First-aid medical response unit coordinated with nearby health clinics, alongside a child psychology counseling space.",
    icon: HeartPulse,
    specs: [
      "Medical observation beds",
      "Comprehensive emergency first aid supplies",
      "Child psychologist counseling",
    ],
  },
];

export function FacilitiesSection() {
  return (
    <section
      aria-labelledby="facilities-heading"
      className="py-28 md:py-36 lg:py-44 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-700/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal
          direction="up"
          className="max-w-3xl mb-16 md:mb-20 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-slate-100 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
            <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
            <span>FACILITIES // MODERN CAMPUS INFRASTRUCTURE</span>
          </div>
          <h2
            id="facilities-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]"
          >
            Comfortable, Scenic &amp; Secure Campus Facilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            SD Al-Birru provides state-of-the-art facilities to support
            comfortable learning, worship, and physical activity for students.
          </p>
        </ScrollReveal>

        {/* Facility Cards List with Spotlight Cards */}
        <ul
          aria-labelledby="facilities-heading"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch list-none p-0"
        >
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <li key={idx} className="flex">
                <motion.article
                  aria-labelledby={`facility-${idx}-title`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="flex-1 flex"
                >
                  <SpotlightCard
                    spotlightColor="rgba(245, 158, 11, 0.08)"
                    className="p-8 bg-[#FDFDFB] dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-700 dark:bg-slate-900 shadow-2xs hover:shadow-xl transition-all flex-1 flex flex-col justify-between rounded-none group"
                  >
                    <div>
                      {/* Clean Geometric Image Placeholder with Subtle Zoom */}
                      <figure className="relative aspect-[16/10] w-full rounded-none bg-slate-100 border border-slate-200/80 dark:border-slate-700/80 mb-6 flex flex-col items-center justify-center text-center p-4 group-hover:bg-slate-150 transition-colors overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="size-13 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-amber-600 group-hover:scale-105 transition-all mb-2 shadow-2xs"
                        >
                          <Icon className="size-6.5" />
                        </div>
                        <figcaption className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                          Photo of {fac.title}
                        </figcaption>
                      </figure>

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-none font-mono border border-amber-200/50">
                          {fac.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          {fac.code}
                        </span>
                      </div>

                      <h3
                        id={`facility-${idx}-title`}
                        className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-50 mt-1 leading-snug"
                      >
                        {fac.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2.5 mb-5 font-normal">
                        {fac.description}
                      </p>

                      {/* Checklist */}
                      <ul
                        aria-label={`Specifications for ${fac.title}`}
                        className="space-y-2 border-t border-slate-200/70 pt-4 list-none p-0"
                      >
                        {fac.specs.map((spec, sIdx) => (
                          <li
                            key={sIdx}
                            className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <Check
                              aria-hidden="true"
                              className="size-4 text-emerald-700 shrink-0"
                            />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <footer className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <ShieldCheck
                        aria-hidden="true"
                        className="size-4 text-emerald-700"
                      />
                      <span>Impeccable Hygiene &amp; 24/7 Security</span>
                    </footer>
                  </SpotlightCard>
                </motion.article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
