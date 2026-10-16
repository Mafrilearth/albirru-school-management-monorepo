"use client";

import {
  ArrowRight,
  BookMarked,
  Check,
  CheckCircle2,
  Cpu,
  Heart,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface JuzInfo {
  juz: string;
  name: string;
  surahCount: string;
  evaluation: string;
  targetYear: string;
}

const juzData: JuzInfo[] = [
  {
    juz: "Juz 30",
    name: "An-Naba' s.d. An-Nas",
    surahCount: "37 Surat (Pondasi Tajwid)",
    evaluation: "Tasmi' Sekali Duduk (Mutqin)",
    targetYear: "Tahap Pondasi",
  },
  {
    juz: "Juz 29",
    name: "Al-Mulk s.d. Al-Mursalat",
    surahCount: "11 Surat (Kelancaran Tajwid)",
    evaluation: "Tasmi' Berkala & Ujian Terbuka",
    targetYear: "Tahap Lanjutan",
  },
  {
    juz: "Juz 28",
    name: "Al-Mujadilah s.d. At-Tahrim",
    surahCount: "9 Surat (Pemantapan & Sanad)",
    evaluation: "Uji Sanad & Evaluasi Mutqin",
    targetYear: "Tahap Pemantapan",
  },
];

export function BentoValuesSection() {
  const [selectedJuzIndex, setSelectedJuzIndex] = useState(0);
  const activeJuz = juzData[selectedJuzIndex];

  const [completedHabits, setCompletedHabits] = useState<number[]>([0, 1, 2]);
  const toggleHabit = (index: number) => {
    if (completedHabits.includes(index)) {
      setCompletedHabits(completedHabits.filter((i) => i !== index));
    } else {
      setCompletedHabits([...completedHabits, index]);
    }
  };

  const habits = [
    {
      title: "Shalat Dhuha & Dzuhur Berjamaah",
      note: "Tepat waktu di masjid sekolah",
    },
    {
      title: "Budaya Senyum, Salam, Sapa (5S)",
      note: "Pembiasaan adab pergaulan islami",
    },
    {
      title: "Bakti pada Orang Tua & Guru",
      note: "Penanaman rasa hormat dan empati",
    },
    {
      title: "Adab Makan & Minum Sesuai Sunnah",
      note: "Duduk tenang, membaca doa, tangan kanan",
    },
  ];

  const [activeStemTab, setActiveStemTab] = useState<
    "lab" | "coding" | "inkuiri"
  >("lab");

  return (
    <section
      aria-labelledby="values-heading"
      className="w-full bg-background relative overflow-hidden border-b border-border"
    >
      {/* Section Header Cell — Full Width in Grid */}
      <div className="w-full p-6 sm:p-10 lg:p-12 border-b border-border bg-background">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
            4 Pilar Pendidikan Utama
          </span>

          <h2
            id="values-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
            style={{ textWrap: "balance" }}
          >
            Kurikulum Terpadu Berbasis Fitrah &amp; Al-Qur&apos;an.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Integrasi pembinaan tahfidzul Qur&apos;an, pendidikan adab islami,
            eksplorasi sains aplikatif, dan lingkungan belajar ramah anak.
          </p>
        </div>
      </div>

      {/* 2x2 Flush Bento Grid with Shared 1px Borders */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 bg-card">
        {/* Pillar 01: Tahfidzul Qur'an (Span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:border-r border-b border-border bg-card hover:bg-muted/10 transition-colors duration-150">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold text-foreground tracking-wider uppercase">
                Tahfidz Al-Qur&apos;an
              </span>
              <div className="size-9 rounded-none bg-muted/40 border border-border flex items-center justify-center text-foreground shadow-none">
                <BookMarked className="size-4.5" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Tahfidzul Qur&apos;an &amp; Talaqqi Bersanad
            </h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
              Bimbingan halaqah pagi terfokus dengan metode talaqqi bertahap.
              Santri dibimbing membaca dan menghafal Al-Qur&apos;an secara
              mutqin dengan makharijul huruf yang tepat.
            </p>

            {/* Interactive Juz Switcher */}
            <div className="mt-6 grid grid-cols-3 gap-2 font-mono">
              {juzData.map((item, idx) => {
                const isSelected = selectedJuzIndex === idx;
                return (
                  <button
                    key={item.juz}
                    type="button"
                    onClick={() => setSelectedJuzIndex(idx)}
                    className={cn(
                      "p-3 text-center rounded-none cursor-pointer border select-none transition-all active:scale-[0.98]",
                      isSelected
                        ? "bg-foreground text-background font-bold border-foreground shadow-none"
                        : "bg-muted/30 text-muted-foreground border-border hover:bg-muted/60 hover:text-foreground",
                    )}
                  >
                    <span className="block text-xs font-bold">{item.juz}</span>
                    <span className="block text-[10px] mt-0.5 opacity-80 uppercase tracking-wider">
                      {item.targetYear}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Juz Detail */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeJuz.juz}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 p-4 rounded-none border border-border bg-muted/20 flex flex-col gap-2 font-mono"
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-foreground font-sans font-bold">
                    {activeJuz.name}
                  </span>
                  <span className="text-muted-foreground text-[11px]">
                    {activeJuz.surahCount}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1.5 border-t border-border">
                  <span className="uppercase tracking-wider">Metode Uji:</span>
                  <span className="font-bold text-foreground font-sans">
                    {activeJuz.evaluation}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
            <span className="text-muted-foreground text-[11px] uppercase tracking-wider">
              Metode Talaqqi Bersanad
            </span>
            <Link
              href="/programs#tahfidz"
              className="font-bold text-foreground hover:underline flex items-center gap-1 uppercase tracking-wider text-[11px] active:translate-x-0.5 transition-all"
            >
              <span>Pelajari Silabus</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>

        {/* Pillar 02: Adab & Karakter (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-10 border-b border-border bg-card hover:bg-muted/10 transition-colors duration-150">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold text-foreground tracking-wider uppercase">
                Pendidikan Karakter
              </span>
              <div className="size-9 rounded-none bg-muted/40 border border-border flex items-center justify-center text-foreground shadow-none">
                <Heart className="size-4.5" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Adab Sebelum Ilmu
            </h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
              Pembiasaan akhlak mulia dan keteladanan ibadah harian. Santri
              dilatih mandiri, beradab dalam berbicara, dan bertanggung jawab.
            </p>

            {/* Interactive Habit Checklist */}
            <div className="mt-5 flex flex-col gap-2">
              {habits.map((habit, idx) => {
                const isChecked = completedHabits.includes(idx);
                return (
                  <button
                    key={habit.title}
                    type="button"
                    onClick={() => toggleHabit(idx)}
                    className={cn(
                      "w-full p-3 text-start rounded-none border transition-all flex items-center justify-between cursor-pointer select-none active:scale-[0.98]",
                      isChecked
                        ? "border-foreground/40 bg-muted/40 text-foreground"
                        : "border-border bg-background hover:bg-muted/40 text-muted-foreground",
                    )}
                  >
                    <div className="flex flex-col">
                      <span
                        className={cn(
                          "text-xs font-medium font-sans",
                          isChecked
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground",
                        )}
                      >
                        {habit.title}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                        {habit.note}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "size-5 rounded-none border flex items-center justify-center transition-colors shrink-0",
                        isChecked
                          ? "bg-foreground border-foreground text-background"
                          : "border-border bg-background",
                      )}
                    >
                      {isChecked && <Check className="size-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span className="uppercase tracking-wider">Pembiasaan Harian:</span>
            <span className="font-bold text-foreground">
              {completedHabits.length} dari {habits.length} Terlaksana
            </span>
          </div>
        </div>

        {/* Pillar 03: Inkuiri Sains & Logika (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-10 lg:border-r border-b lg:border-b-0 border-border bg-card hover:bg-muted/10 transition-colors duration-150">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold text-foreground tracking-wider uppercase">
                Sains &amp; Logika
              </span>
              <div className="size-9 rounded-none bg-muted/40 border border-border flex items-center justify-center text-foreground shadow-none">
                <Cpu className="size-4.5" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Inkuiri Sains &amp; Logika Komputasi
            </h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
              Mengasah rasa ingin tahu dan nalar kritis santri melalui
              pengamatan alam terbuka dan dasar computational thinking yang
              terarah.
            </p>

            {/* Interactive STEM Tabs */}
            <div className="mt-5 grid grid-cols-3 gap-1 p-1 bg-muted/30 rounded-none border border-border font-mono text-xs uppercase">
              {(["lab", "coding", "inkuiri"] as const).map((tabKey) => {
                const label =
                  tabKey === "lab"
                    ? "Lab Alam"
                    : tabKey === "coding"
                      ? "Coding Jr"
                      : "Proyek";
                const isTabActive = activeStemTab === tabKey;
                return (
                  <button
                    key={tabKey}
                    type="button"
                    onClick={() => setActiveStemTab(tabKey)}
                    className={cn(
                      "py-2 text-center font-bold cursor-pointer rounded-none transition-colors active:scale-[0.98]",
                      isTabActive
                        ? "bg-foreground text-background font-bold shadow-none"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic STEM Info Display */}
            <div className="mt-3.5 p-4 rounded-none border border-border bg-muted/20 min-h-[96px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeStemTab}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeStemTab === "lab" && (
                    <div className="flex flex-col gap-1 text-xs">
                      <span className="font-bold text-foreground">
                        Laboratorium Alam Terbuka
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        Santri meneliti tanaman, tanah, dan cuaca di area kebun
                        sekolah untuk memahami tanda-tanda kebesaran Allah
                        melalui alam sekitar.
                      </p>
                    </div>
                  )}
                  {activeStemTab === "coding" && (
                    <div className="flex flex-col gap-1 text-xs">
                      <span className="font-bold text-foreground">
                        Junior Scratch &amp; Pemikiran Komputasional
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        Mengenalkan pola pikir terstruktur dan pemecahan masalah
                        sederhana melalui visual block programming tanpa paparan
                        gawai berlebih.
                      </p>
                    </div>
                  )}
                  {activeStemTab === "inkuiri" && (
                    <div className="flex flex-col gap-1 text-xs">
                      <span className="font-bold text-foreground">
                        Pameran Karya Sains Santri
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        Santri mempresentasikan proyek tematik sederhana secara
                        mandiri untuk menumbuhkan rasa percaya diri dan
                        kemampuan komunikasi.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span className="uppercase tracking-wider">Kurikulum Merdeka</span>
            <span className="font-bold text-foreground uppercase">
              Nalar Kritis &amp; Eksplorasi
            </span>
          </div>
        </div>

        {/* Pillar 04: Lingkungan Belajar (Span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 bg-card hover:bg-muted/10 transition-colors duration-150">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold text-foreground tracking-wider uppercase">
                Lingkungan Belajar
              </span>
              <div className="size-9 rounded-none bg-muted/40 border border-border flex items-center justify-center text-foreground shadow-none">
                <Users className="size-4.5" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Ekosistem Kelas Nyaman &amp; Ramah Anak
            </h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
              Suasana belajar yang aman, tertib, dan menyenangkan. Guru
              mendampingi setiap santri secara intensif agar berkembang sesuai
              potensinya.
            </p>

            {/* Key Facility Highlights Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-none border border-border bg-muted/20 flex flex-col gap-1 hover:border-foreground/30 transition-colors">
                <div className="flex items-center gap-1.5 text-foreground text-xs font-bold font-mono uppercase tracking-wider">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  <span>Ruang Ber-AC</span>
                </div>
                <span className="text-[11px] text-muted-foreground leading-relaxed">
                  Sirkulasi udara sejuk &amp; pencahayaan alami
                </span>
              </div>

              <div className="p-4 rounded-none border border-border bg-muted/20 flex flex-col gap-1 hover:border-foreground/30 transition-colors">
                <div className="flex items-center gap-1.5 text-foreground text-xs font-bold font-mono uppercase tracking-wider">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  <span>Masjid Luas</span>
                </div>
                <span className="text-[11px] text-muted-foreground leading-relaxed">
                  Pusat shalat dhuha &amp; dzuhur berjamaah
                </span>
              </div>

              <div className="p-4 rounded-none border border-border bg-muted/20 flex flex-col gap-1 hover:border-foreground/30 transition-colors">
                <div className="flex items-center gap-1.5 text-foreground text-xs font-bold font-mono uppercase tracking-wider">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  <span>Lingkungan Aman</span>
                </div>
                <span className="text-[11px] text-muted-foreground leading-relaxed">
                  Pengawasan guru aktif di seluruh area sekolah
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
            <span className="text-muted-foreground text-[11px] uppercase tracking-wider">
              PPDB 2026/2027 Dibuka
            </span>
            <Link
              href="/programs#facilities"
              className="font-bold text-foreground hover:underline flex items-center gap-1 uppercase tracking-wider text-[11px] active:translate-x-0.5 transition-all"
            >
              <span>Lihat Sarana &amp; Fasilitas</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
