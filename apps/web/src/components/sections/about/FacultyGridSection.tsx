"use client";

import React from "react";
import { GraduationCap, Award, UserCheck } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";

interface FacultyMember {
  name: string;
  role: string;
  degree: string;
  specialty: string;
  bio: string;
  badgeColor: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Ustadz H. Ahmad Fauzi, M.Pd.",
    role: "Kepala School",
    degree: "Magister Manajemen Pendidikan Islam (UIN)",
    specialty: "Kepemimpinan Pendidikan & Karakter",
    bio: "Berpengalaman lebih dari 15 tahun membina lembaga pendidikan dasar Islam terpadu dengan fokus fitrah anak.",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    name: "Ustadzah Siti Fatimah, Lc., M.Ag.",
    role: "Koordinator Tahfidz & Al-Qur'an",
    degree: "Al-Azhar University Kairo & Ilmu Al-Qur'an",
    specialty: "Tahfidz Bersanad & Makharijul Huruf",
    bio: "Pemegang sanad bacaan riwayat Hafs 'an 'Ashim, berpengalaman dalam metode talaqqi anak usia dini.",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    name: "Ustadz Rahmat Hidayat, S.Pd.",
    role: "Koordinator Curriculum & Sains",
    degree: "S1 Pendidikan Sains & Teknologi (UPI)",
    specialty: "Curriculum Merdeka & Inkuiri Sains",
    bio: "Pengembang modul pembelajaran sains eksperimen terapan dan computational thinking untuk tingkat school dasar.",
    badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
  },
  {
    name: "Ustadzah Nurul Aini, S.Psi.",
    role: "Koordinator Bimbingan & Karakter",
    degree: "S1 Psikologi Perkembangan Anak",
    specialty: "Parenting Positif & Konseling Students",
    bio: "Mendampingi pemetaan gaya belajar anak, penanganan hambatan perkembangan, dan konseling orang tua.",
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
  },
  {
    name: "Ustadz Muhammad Ilham, S.Pd.I.",
    role: "Teachers Bahasa Arab & Hadits",
    degree: "S1 Pendidikan Bahasa Arab (LIPIA)",
    specialty: "Percakapan Harian Arab & Adab",
    bio: "Mengembangkan metode cerita dan dialog interaktif untuk memperkenalkan adab Rasulullah dengan riang gembira.",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    name: "Ustadzah Dewi Anggraeni, S.Pd.",
    role: "Wali Kelas & Literasi Bahasa Inggris",
    degree: "S1 Pendidikan Bahasa Inggris",
    specialty: "Phonics & Literasi Membaca",
    bio: "Menerapkan pendekatan pembelajaran komunikatif aktif dan penanaman budaya gemar membaca buku cerita anak.",
    badgeColor: "bg-rose-50 text-rose-800 border-rose-200",
  },
];

export function FacultyGridSection() {
  return (
    <section aria-labelledby="faculty-heading" className="py-28 md:py-36 lg:py-44 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-slate-100 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
            <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
            <span>PENDIDIK // DEWAN ASATIDZ</span>
          </div>
          <h2 id="faculty-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]">
            Dewan Asatidz &amp; Pengajar Berdedikasi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Teachers di SD Al-Birru adalah teladan hidup (qudwah hasanah) yang mendampingi
            dengan keilmuan, kesabaran, dan ketulusan hati.
          </p>
        </ScrollReveal>

        {/* Faculty Grid with Semantic List & Article Elements */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {facultyMembers.map((teacher, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="list-none flex"
            >
              <article aria-labelledby={`teacher-name-${idx}`} className="flex-1 flex">
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.09)"
                  className="p-7 sm:p-8 bg-[#FDFDFB] dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-700 dark:bg-slate-900 shadow-2xs hover:shadow-xl transition-all flex-1 flex flex-col justify-between rounded-none"
                >
                  <div>
                    {/* Photo Placeholder Area with subtle zoom on hover */}
                    <div className="relative aspect-square w-full rounded-none bg-slate-100 border border-slate-200/80 dark:border-slate-700/80 mb-6 flex flex-col items-center justify-center text-center p-4 group-hover:bg-slate-150 transition-colors overflow-hidden">
                      <div className="size-18 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-amber-600 group-hover:scale-105 transition-all mb-2 shadow-2xs">
                        <UserCheck className="size-9" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        Foto Pengajar
                      </span>
                    </div>

                    <span
                      className={`inline-block px-3 py-1 rounded-none text-xs font-semibold border ${teacher.badgeColor} font-mono`}
                    >
                      {teacher.role}
                    </span>

                    <h3 id={`teacher-name-${idx}`} className="text-lg sm:text-xl font-bold text-slate-950 dark:text-slate-50 mt-3 leading-snug">
                      {teacher.name}
                    </h3>

                    <div className="space-y-2 my-4 text-xs text-slate-600 dark:text-slate-400 border-y border-slate-200/60 py-3 font-mono">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="size-4 text-slate-400 shrink-0" />
                        <span className="font-medium text-slate-800 dark:text-slate-200">{teacher.degree}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="size-4 text-slate-400 shrink-0" />
                        <span>Fokus: {teacher.specialty}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {teacher.bio}
                    </p>
                  </div>
                </SpotlightCard>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
