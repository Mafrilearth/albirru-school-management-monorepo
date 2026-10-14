"use client";

import {
  ArrowRight,
  BookMarked,
  Check,
  CheckCircle2,
  Cpu,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
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
    surahCount: "37 Surat (Pondasi Makharij)",
    evaluation: "Tasmi' 1 Kali Duduk (Mutqin 100%)",
    targetYear: "Kelas 1 - 2",
  },
  {
    juz: "Juz 29",
    name: "Al-Mulk s.d. Al-Mursalat",
    surahCount: "11 Surat (Kelancaran Tajwid)",
    evaluation: "Tasmi' Per 5 Maqra' & Ujian Terbuka",
    targetYear: "Kelas 3 - 4",
  },
  {
    juz: "Juz 28",
    name: "Al-Mujadilah s.d. At-Tahrim",
    surahCount: "9 Surat (Pemantapan & Sanad)",
    evaluation: "Wisuda Akbar & Uji Sanad",
    targetYear: "Kelas 5 - 6",
  },
];

export function BentoValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Staggered parallax columns for out-of-the-box depth
  const yParallaxColA = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yParallaxColB = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Interactive states
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
    { title: "Budaya 5S Beradab", note: "Senyum, Salam, Sapa, Sopan, Santun" },
    {
      title: "Bakti Birrul Walidain",
      note: "Proyek empati harian untuk orang tua",
    },
    { title: "Adab Makan & Minum", note: "Duduk tenang, doa, tangan kanan" },
  ];

  const [activeStemTab, setActiveStemTab] = useState<
    "lab" | "coding" | "inkuiri"
  >("lab");

  return (
    <section
      ref={sectionRef}
      aria-labelledby="values-heading"
      className="py-20 sm:py-28 bg-background relative overflow-hidden border-b border-border"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" />
            <span>4 PILAR PENDIDIKAN INTEGRATIF</span>
          </div>
          <h2
            id="values-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight"
          >
            Kurikulum Terpadu yang Menghidupkan Potensi Fitrah.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Eksplorasi interaktif bagaimana SD Al-Birru mengintegrasikan tahfidz
            Al-Qur&apos;an bersanad, adab mulia, sains aplikatif, dan ekosistem
            kelas ramah anak.
          </p>
        </div>

        {/* Asymmetric Out-of-the-Box Bento Grid with Scroll Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* Pillar 01: Tahfidzul Qur'an (Span 7) */}
          <motion.div
            style={{ y: yParallaxColA }}
            className="lg:col-span-7 flex"
          >
            <Card className="w-full rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-border/80 bg-card/90 backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">
                      Pilar 01 • Al-Qur&apos;an Bersanad
                    </span>
                  </div>
                  <div className="size-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                    <BookMarked className="size-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Tahfidzul Qur&apos;an 3 Juz Mutqin &amp; Talaqqi
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Setiap santri dibimbing dalam halaqah pagi dengan target
                  hafalan mutqin dan bersambung sanad. Klik tombol juz di bawah
                  untuk melihat target capaian per jenjang:
                </p>

                {/* Interactive Juz Switcher with Layout Spring */}
                <div className="mt-6 grid grid-cols-3 gap-2.5">
                  {juzData.map((item, idx) => {
                    const isSelected = selectedJuzIndex === idx;
                    return (
                      <button
                        key={item.juz}
                        type="button"
                        onClick={() => setSelectedJuzIndex(idx)}
                        className={cn(
                          "relative p-3 text-center rounded-2xl cursor-pointer border select-none transition-colors active:scale-[0.97]",
                          isSelected
                            ? "text-primary-foreground font-semibold border-primary"
                            : "bg-muted/40 text-muted-foreground border-border hover:bg-muted/80 hover:text-foreground",
                        )}
                      >
                        {isSelected && (
                          <motion.span
                            layoutId="juzActiveTabPill"
                            className="absolute inset-0 bg-primary rounded-2xl z-0 shadow-xs"
                            transition={{
                              type: "spring",
                              stiffness: 450,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="block text-xs font-bold relative z-10">
                          {item.juz}
                        </span>
                        <span className="block text-[10px] font-medium mt-0.5 relative z-10">
                          {item.targetYear}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Juz Showcase Panel with Crossfade */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeJuz.juz}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="mt-4 p-4 rounded-2xl border border-border/80 bg-muted/30 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-foreground">{activeJuz.name}</span>
                      <span className="text-primary">
                        {activeJuz.surahCount}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border/50">
                      <span>Standar Pengujian:</span>
                      <span className="font-semibold text-foreground">
                        {activeJuz.evaluation}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Sanad: Riwayat Hafs &apos;an &apos;Ashim
                </span>
                <Link
                  href="/programs#tahfidz"
                  className="font-semibold text-primary hover:underline flex items-center gap-1 active:translate-x-0.5 transition-transform"
                >
                  <span>Pelajari Silabus</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Card>
          </motion.div>

          {/* Pillar 02: Adab & Karakter (Span 5) */}
          <motion.div
            style={{ y: yParallaxColB }}
            className="lg:col-span-5 flex"
          >
            <Card className="w-full rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-border/80 bg-card/90 backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">
                      Pilar 02 • Karakter Fitrah
                    </span>
                  </div>
                  <div className="size-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                    <Heart className="size-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Adab Sebelum Ilmu &amp; 7 Kebiasaan Mulia
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Pembiasaan akhlak dipraktikkan langsung setiap hari. Klik
                  kebiasaan di bawah untuk mensimulasikan mutaba&apos;ah adab
                  santri:
                </p>

                {/* Interactive Habit Checklist with Spring Pop Checks */}
                <div className="mt-5 flex flex-col gap-2">
                  {habits.map((habit, idx) => {
                    const isChecked = completedHabits.includes(idx);
                    return (
                      <button
                        key={habit.title}
                        type="button"
                        onClick={() => toggleHabit(idx)}
                        className={cn(
                          "w-full p-3 text-start rounded-2xl border transition-all flex items-center justify-between cursor-pointer select-none active:scale-[0.98]",
                          isChecked
                            ? "border-primary/40 bg-primary/5 shadow-2xs"
                            : "border-border/80 bg-background hover:bg-muted/40",
                        )}
                      >
                        <div className="flex flex-col">
                          <span
                            className={cn(
                              "text-xs font-medium",
                              isChecked
                                ? "text-foreground font-semibold"
                                : "text-muted-foreground",
                            )}
                          >
                            {habit.title}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {habit.note}
                          </span>
                        </div>
                        <div
                          className={cn(
                            "size-5.5 rounded-lg border flex items-center justify-center transition-colors shrink-0",
                            isChecked
                              ? "bg-primary border-primary text-primary-foreground"
                              : "border-border bg-background",
                          )}
                        >
                          {isChecked && (
                            <motion.div
                              initial={{ scale: 0.5, rotate: -20 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 25,
                              }}
                            >
                              <Check className="size-3.5 stroke-[3]" />
                            </motion.div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Konsistensi Harian:</span>
                <span className="font-semibold text-primary">
                  {Math.round((completedHabits.length / habits.length) * 100)}%
                  Terbiasa Mandiri
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Pillar 03: Inkuiri Sains & Coding (Span 5) */}
          <motion.div
            style={{ y: yParallaxColB }}
            className="lg:col-span-5 flex"
          >
            <Card className="w-full rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-border/80 bg-card/90 backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">
                      Pilar 03 • Sains &amp; STEM
                    </span>
                  </div>
                  <div className="size-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                    <Cpu className="size-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Inkuiri Sains Alam &amp; Logika Komputasi
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Santri diajak meneliti alam terbuka dan mengasah logika
                  komputasional. Pilih fokus kegiatan berikut:
                </p>

                {/* Interactive STEM Tabs with Layout Springs */}
                <div className="mt-5 grid grid-cols-3 gap-1.5 p-1.5 bg-muted/40 rounded-2xl border border-border relative">
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
                          "relative py-2 text-xs text-center font-medium cursor-pointer rounded-xl transition-colors active:scale-[0.96]",
                          isTabActive
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {isTabActive && (
                          <motion.span
                            layoutId="stemActiveIndicatorPill"
                            className="absolute inset-0 bg-background rounded-xl shadow-xs z-0"
                            transition={{
                              type: "spring",
                              stiffness: 450,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10">{label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic STEM Info Display with Crossfade */}
                <div className="mt-3.5 p-4 rounded-2xl border border-border/80 bg-muted/30 min-h-[96px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStemTab}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {activeStemTab === "lab" && (
                        <div className="flex flex-col gap-1 text-xs">
                          <span className="font-bold text-foreground">
                            Laboratorium Alam Terbuka
                          </span>
                          <p className="text-muted-foreground leading-relaxed">
                            Santri meneliti tanaman, tanah, dan cuaca di kebun
                            sekolah untuk memahami tanda-tanda kebesaran Allah
                            (Ayat Kauniyah).
                          </p>
                        </div>
                      )}
                      {activeStemTab === "coding" && (
                        <div className="flex flex-col gap-1 text-xs">
                          <span className="font-bold text-foreground">
                            Junior Scratch &amp; Computational Thinking
                          </span>
                          <p className="text-muted-foreground leading-relaxed">
                            Mengenal pemikiran algoritmik sistematis lewat
                            visual block coding tanpa screentime berlebihan.
                          </p>
                        </div>
                      )}
                      {activeStemTab === "inkuiri" && (
                        <div className="flex flex-col gap-1 text-xs">
                          <span className="font-bold text-foreground">
                            Pameran Proyek Karya Mandiri
                          </span>
                          <p className="text-muted-foreground leading-relaxed">
                            Setiap semester santri mempresentasikan proyek sains
                            sederhana buatan sendiri di depan orang tua.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Kurikulum: Merdeka Belajar Terintegrasi</span>
                <span className="font-semibold text-primary">
                  Nalar Kritis Sejak Dini
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Pillar 04: Rasio Personal 1:15 & Fasilitas Ramah Fitrah (Span 7) */}
          <motion.div
            style={{ y: yParallaxColA }}
            className="lg:col-span-7 flex"
          >
            <Card className="w-full rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-border/80 bg-card/90 backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">
                      Pilar 04 • Ekosistem Terfokus
                    </span>
                  </div>
                  <div className="size-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                    <Users className="size-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Rasio Terfokus 1:15 &amp; Kampus Ramah Fitrah
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Setiap angkatan dibatasi ketat maksimal 40 siswa (hanya 2
                  rombel, maksimal 20 siswa per kelas) guna memastikan setiap
                  anak didampingi secara intim dan terpantau perkembangannya.
                </p>

                {/* Key Facility Highlights Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl border border-border/80 bg-background flex flex-col gap-1 hover:border-primary/40 hover:shadow-xs transition-all">
                    <div className="flex items-center gap-1.5 text-primary text-xs font-semibold">
                      <CheckCircle2 className="size-3.5" />
                      <span>Ruang Ber-AC</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">
                      Sirkulasi udara sejuk &amp; pencahayaan alami
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-border/80 bg-background flex flex-col gap-1 hover:border-primary/40 hover:shadow-xs transition-all">
                    <div className="flex items-center gap-1.5 text-primary text-xs font-semibold">
                      <CheckCircle2 className="size-3.5" />
                      <span>Masjid Luas</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">
                      Pusat shalat dhuha &amp; dzuhur berjamaah
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-border/80 bg-background flex flex-col gap-1 hover:border-primary/40 hover:shadow-xs transition-all">
                    <div className="flex items-center gap-1.5 text-primary text-xs font-semibold">
                      <CheckCircle2 className="size-3.5" />
                      <span>Bebas Bullying</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">
                      Pengawasan aktif guru &amp; asatidz di setiap sudut
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-medium">
                  Kuota Terbatas: Hanya 40 Kursi per Angkatan
                </span>
                <Link
                  href="/programs#facilities"
                  className="font-semibold text-primary hover:underline flex items-center gap-1 active:translate-x-0.5 transition-transform"
                >
                  <span>Lihat Sarana &amp; Fasilitas</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
