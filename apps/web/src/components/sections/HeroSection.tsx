"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Cpu,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProgramKey = "tahfidz" | "adab" | "sains" | "rasio";

interface ProgramDetail {
  id: ProgramKey;
  label: string;
  badge: string;
  icon: typeof BookOpen;
  title: string;
  subtitle: string;
  description: string;
  metrics: { name: string; status: string; percent: number }[];
  tags: string[];
  linkHref: string;
}

const programsData: Record<ProgramKey, ProgramDetail> = {
  tahfidz: {
    id: "tahfidz",
    label: "Tahfidz",
    badge: "PROGRAM UNGGULAN",
    icon: BookOpen,
    title: "Tahfidzul Qur'an 3 Juz Mutqin",
    subtitle: "Talaqqi Bersanad & Tasmi' Sekali Duduk",
    description:
      "Bimbingan halaqah pagi terfokus dengan sanad riwayat Hafs 'an 'Ashim. Santri menuntaskan tasmi' juz 30, 29, dan 28 secara mutqin di hadapan dewan asatidz dan orang tua.",
    metrics: [
      {
        name: "JUZ 30 (AN-NABA - AN-NAS)",
        status: "100% TASMI'",
        percent: 100,
      },
      {
        name: "JUZ 29 (AL-MULK - AL-MURSALAT)",
        status: "TALAQQI AKTIF",
        percent: 75,
      },
      {
        name: "JUZ 28 (AL-MUJADILAH - AT-TAHRIM)",
        status: "TAHAP PERSIAPAN",
        percent: 45,
      },
    ],
    tags: ["Sanad Bersambung", "Halaqah Pagi 45 Mnt", "Mutaba'ah Harian"],
    linkHref: "/programs#tahfidz",
  },
  adab: {
    id: "adab",
    label: "Adab",
    badge: "FONDASI FITRAH",
    icon: Heart,
    title: "Adab Sebelum Ilmu & 7 Kebiasaan Mulia",
    subtitle: "Internalisasi Karakter Islami Sejak Dini",
    description:
      "Penanaman tata krama harian melalui shalat dhuha dan dzuhur berjamaah tepat waktu, budaya 5S (Senyum, Salam, Sapa, Sopan, Santun), serta proyek bakti birrul walidain.",
    metrics: [
      {
        name: "KEDISIPLINAN SHALAT TEPAT WAKTU",
        status: "98.8% KONSISTEN",
        percent: 99,
      },
      {
        name: "PRAKTIK BUDAYA 5S BERADAB",
        status: "PEMBIASAAN HARIAN",
        percent: 95,
      },
      {
        name: "PROYEK BIRRUL WALIDAIN",
        status: "PEKAN BAKTI ORANG TUA",
        percent: 90,
      },
    ],
    tags: ["5S Beradab", "Shalat Berjamaah", "Bakti Orang Tua"],
    linkHref: "/programs#adab",
  },
  sains: {
    id: "sains",
    label: "Sains",
    badge: "STEM & NALAR KRITIS",
    icon: Cpu,
    title: "Inkuiri Sains Alam & Junior Coding",
    subtitle: "Kurikulum Merdeka + Eksplorasi Sains Terbuka",
    description:
      "Pembelajaran tematik berbasis rasa ingin tahu alami santri. Mengintegrasikan observasi sains alam terbuka, logika algoritma komputasi awal, dan penalaran kritis aplikatif.",
    metrics: [
      { name: "PRAKTIKUM SAINS LAB ALAM", status: "2X / PEKAN", percent: 85 },
      {
        name: "COMPUTATIONAL THINKING & LOGIKA",
        status: "JUNIOR SCRATCH",
        percent: 80,
      },
      {
        name: "PORTOFOLIO PROYEK INKUIRI",
        status: "PAMERAN KARYA",
        percent: 90,
      },
    ],
    tags: ["Lab Terbuka", "Junior Coding", "Nalar Kritis"],
    linkHref: "/programs#sains",
  },
  rasio: {
    id: "rasio",
    label: "Rasio",
    badge: "EKOSISTEM PERSONAL",
    icon: Users,
    title: "Rasio Personal 1:15 & Kampus Ramah Fitrah",
    subtitle: "Maksimal 20 Santri per Rombel (2 Rombel)",
    description:
      "Pembatasan ketat kuota angkatan menjamin kedekatan batin guru dan santri. Dilengkapi ruang kelas nyaman ber-AC, masjid luas, lingkungan hijau, dan iklim sekolah bebas perundungan.",
    metrics: [
      {
        name: "KAPASITAS ANGKATAN 2026/2027",
        status: "26 / 40 KURSI (65%)",
        percent: 65,
      },
      { name: "RASIO GURU : MURID", status: "1 : 15 TERFOKUS", percent: 100 },
      {
        name: "LINGKUNGAN RAMAH & BEBAS BULLYING",
        status: "KOMITMEN 100%",
        percent: 100,
      },
    ],
    tags: ["Maks 20 / Kelas", "Perhatian Personal Penuh", "Ruang Ber-AC"],
    linkHref: "/programs#fasilitas",
  },
};

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<ProgramKey>("tahfidz");
  const activeProgram = programsData[activeTab];
  const ActiveIcon = activeProgram.icon;

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Out of the Box Parallax transforms
  const yBgGlow = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yFloatingBadge1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yFloatingBadge2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-background border-b border-border"
    >
      {/* Parallax Ambient Glow Backdrop */}
      <motion.div
        style={{ y: yBgGlow }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] sm:w-[900px] sm:h-[600px] bg-gradient-to-tr from-primary/15 via-emerald-400/10 to-teal-400/5 blur-3xl rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Kinetic Typography & Main Conversion */}
          <motion.div
            style={{ y: yContent }}
            className="lg:col-span-7 flex flex-col items-start text-start"
          >
            {/* Live Admission Status Badge with Frosted Capsule */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-md text-xs font-medium text-foreground shadow-xs">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-primary" />
              </span>
              <span className="font-semibold text-primary">PPDB 2026/2027</span>
              <span className="text-border">|</span>
              <span className="text-muted-foreground">
                Gelombang I Terbuka (Sisa 14 Kursi)
              </span>
            </div>

            {/* High-Impact Headline with Instant LCP Paint */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-foreground tracking-[-0.035em] leading-[1.1]"
            >
              <Balancer>
                Membina Fitrah Beradab,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300">
                  Menghafal Al-Qur&apos;an
                </span>
                , Meraih Keunggulan Sains.
              </Balancer>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Sekolah Dasar Islam Terpadu unggulan di Sukabumi. Rasio terfokus
              1:15, bimbingan tahfidz 3 juz mutqin bersanad, dan pembiasaan adab
              islami harian sejak dini.
            </motion.p>

            {/* Action Buttons with Spring Micro-interaction */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.15,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <Button
                render={<Link href="/admissions" />}
                nativeButton={false}
                size="lg"
                className="gap-2 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide rounded-full px-6 shadow-md shadow-primary/20 active:scale-[0.98] transition-all duration-150 ease-out"
              >
                <span>Daftar Siswa Baru</span>
                <ArrowRight data-icon="inline-end" />
              </Button>

              <Button
                render={
                  <a
                    href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Tim%20Penerimaan%20SD%20Al-Birru,%20saya%20ingin%20berkonsultasi%20mengenai%20penerimaan%20santri%20baru%20TA%202026/2027."
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                variant="outline"
                size="lg"
                className="gap-2 font-medium border-border hover:bg-muted/80 text-sm text-foreground rounded-full px-6 active:scale-[0.98] transition-all duration-150 ease-out"
              >
                <MessageCircle
                  data-icon="inline-start"
                  className="size-4 text-primary"
                />
                <span>Konsultasi WhatsApp</span>
              </Button>
            </motion.div>

            {/* Proof Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground"
            >
              <div className="flex items-center gap-1.5 text-foreground font-semibold">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>BAN-SM: Akreditasi A</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                <span>NPSN: 70010111</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="size-4 text-primary shrink-0" />
                <span>Cicantayan, Sukabumi</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Out-of-the-Box Floating Cockpit Showcase */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Satellite 1: Floating Accreditation Pill */}
            <motion.div
              style={{ y: yFloatingBadge1 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -top-5 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-card/90 backdrop-blur-xl shadow-lg text-xs font-semibold text-foreground"
            >
              <div className="size-2 rounded-full bg-primary animate-pulse" />
              <span>Grade A • Terakreditasi Unggul</span>
            </motion.div>

            {/* Satellite 2: Floating 1:15 Personal Mentoring Badge */}
            <motion.div
              style={{ y: yFloatingBadge2 }}
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4.5,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/90 backdrop-blur-xl shadow-lg text-xs font-semibold text-primary"
            >
              <Users className="size-3.5 text-primary" />
              <span>Rasio Terfokus 1:15 Santri</span>
            </motion.div>

            {/* Main Interactive Showcase Card with Glassmorphism */}
            <Card className="rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Program Switcher Tabs */}
              <div className="p-2 border-b border-border/80 bg-muted/40 grid grid-cols-2 sm:grid-cols-4 gap-1.5 relative">
                {(["tahfidz", "adab", "sains", "rasio"] as const).map((key) => {
                  const item = programsData[key];
                  const Icon = item.icon;
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className={cn(
                        "relative flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-medium cursor-pointer select-none rounded-xl transition-colors active:scale-[0.96]",
                        isActive
                          ? "text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/80",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="heroTabActiveBg"
                          className="absolute inset-0 bg-primary rounded-xl z-0 shadow-xs"
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 30,
                          }}
                        />
                      )}
                      <Icon className="size-3.5 shrink-0 relative z-10" />
                      <span className="truncate relative z-10">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Content Panel with Smooth Spring Crossfade */}
              <CardContent className="p-6 sm:p-7 min-h-[360px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-[11px] font-semibold tracking-wide">
                        <Sparkles className="size-3" />
                        <span>{activeProgram.badge}</span>
                      </div>
                      <div className="size-9 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                        <ActiveIcon className="size-4.5" />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-foreground tracking-tight">
                        {activeProgram.title}
                      </h2>
                      <p className="mt-1 text-xs font-semibold text-primary">
                        {activeProgram.subtitle}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {activeProgram.description}
                      </p>
                    </div>

                    {/* Metric Indicators with Spring Animated Progress */}
                    <div className="rounded-2xl border border-border/70 bg-muted/30 p-3.5 flex flex-col gap-2.5">
                      {activeProgram.metrics.map((metric) => (
                        <div
                          key={metric.name}
                          className="flex flex-col gap-1 text-[11px]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground font-medium">
                              {metric.name}
                            </span>
                            <span className="font-semibold text-foreground">
                              {metric.status}
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.percent}%` }}
                              transition={{
                                duration: 0.45,
                                ease: [0.23, 1, 0.32, 1],
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Program Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {activeProgram.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg border border-border bg-background text-[11px] text-muted-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Footer Action */}
                <div className="pt-4 border-t border-border flex items-center justify-between text-xs mt-3">
                  <span className="text-muted-foreground text-[11px]">
                    Kurikulum Unggulan Al-Birru
                  </span>
                  <Link
                    href={activeProgram.linkHref}
                    className="font-semibold text-primary hover:underline flex items-center gap-1 active:translate-x-0.5 transition-transform"
                  >
                    <span>Pelajari Rincian</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
