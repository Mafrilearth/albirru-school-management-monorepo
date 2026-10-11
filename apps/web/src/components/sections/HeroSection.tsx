"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  HeartHandshake,
  Languages,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-16 md:py-24 lg:py-28 bg-background border-b border-border"
    >
      {/* Ambient Lighting & Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.38_0.12_165/0.14),transparent_75%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.72_0.15_165/0.12),transparent_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.38_0.12_165/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.38_0.12_165/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Proposition & Conversion Gateway */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Live Operational Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-primary" />
              </span>
              <span className="text-xs font-semibold text-primary tracking-wide">
                PPDB TA 2026/2027 Dibuka • Gelombang I (Sisa 14 Kursi)
              </span>
            </div>

            {/* High-Impact Institutional Headline */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.12]"
            >
              Membina Fitrah Beradab,{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-primary dark:via-emerald-400 dark:to-teal-300">
                Menghafal Al-Qur&apos;an
              </span>
              , Meraih Keunggulan Sains.
            </h1>

            {/* Evidence-Based Subheading */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Sekolah Dasar Islam Terpadu berstandar JSIT di Sukabumi dengan
              rasio terfokus 1:15 (maksimal 40 santri per angkatan).
              Mengintegrasikan kurikulum nasional, program tahfidz 3 juz mutqin
              bersanad, dan pembentukan adab qudwah hasanah sejak dini.
            </p>

            {/* Call to Actions & Conversion Gateway */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                render={<Link href="/admissions" />}
                nativeButton={false}
                size="lg"
                className="gap-2 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
              >
                <span>Daftar Siswa Baru Sekarang</span>
                <ArrowRight data-icon="inline-end" />
              </Button>

              <Button
                render={<Link href="/programs" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="gap-2 font-medium bg-background/80 backdrop-blur-sm hover:bg-muted/50"
              >
                <FileText data-icon="inline-start" />
                <span>Unduh Brosur Informasi</span>
              </Button>
            </div>

            {/* Trust & Statutory Verification Micro-Row */}
            <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 font-medium text-foreground">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>Akreditasi A BAN-S/M</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                <span>NPSN Resmi: 70010111</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="size-4 text-primary shrink-0" />
                <span>Kurikulum Terpadu JSIT Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Layer Institutional Showcase Dashboard */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Background Glow Accent */}
            <div
              aria-hidden="true"
              className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-primary/25 to-teal-500/10 blur-xl opacity-75 -z-10"
            />

            {/* Showcase Main Container */}
            <Card className="rounded-2xl border border-primary/20 bg-card/95 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Card Header: School Emblem & Legal Status */}
              <div className="p-5 sm:p-6 border-b border-border/80 flex items-center justify-between bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold shadow-xs">
                    <GraduationCap className="size-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground tracking-tight">
                      SD AL-BIRRU
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Islamic Primary School • Sukabumi
                    </span>
                  </div>
                </div>

                <Badge
                  variant="secondary"
                  className="gap-1.5 px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                >
                  <Sparkles className="size-3" />
                  <span>Grade A (Unggul)</span>
                </Badge>
              </div>

              <CardContent className="p-5 sm:p-6 flex flex-col gap-5">
                {/* Showcase Item 1: Tahfidz Al-Qur'an Mutqin Tracker */}
                <div className="rounded-xl border border-border bg-background/80 p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="size-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Target Tahfidz Mutqin Bersanad
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-primary">
                      3 Juz (28, 29, 30)
                    </span>
                  </div>

                  {/* Progress Milestone Bars */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        Juz 30 (An-Naba – An-Nas)
                      </span>
                      <span className="font-semibold text-foreground">
                        100% Tasmi&apos; Terbuka
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-full" />
                    </div>

                    <div className="flex items-center justify-between text-xs mt-1">
                      <span className="text-muted-foreground">
                        Juz 29 (Al-Mulk – Al-Mursalat)
                      </span>
                      <span className="font-semibold text-primary">
                        Bimbingan Talaqqi Aktif
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary/75 rounded-full w-3/4" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Metode: Talaqqi Sanad Hafs &apos;an &apos;Ashim</span>
                    <span className="font-medium text-foreground">
                      Ujian Sekali Duduk
                    </span>
                  </div>
                </div>

                {/* Showcase Item 2: Real-time Quota Gauge */}
                <div className="rounded-xl border border-border bg-background/80 p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="size-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Kapasitas Angkatan Terfokus
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-foreground">
                      26 / 40 Santri Terisi
                    </span>
                  </div>

                  <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full w-[65%]" />
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>2 Rombel Eksklusif (Maks 20/Kelas)</span>
                    <span className="font-semibold text-primary">
                      Rasio Guru 1:15
                    </span>
                  </div>
                </div>

                {/* Showcase Item 3: 4 Core Character Habit Chips */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Karakteristik Pembiasaan Harian:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg border border-border bg-muted/40 flex items-center gap-2">
                      <HeartHandshake className="size-3.5 text-primary shrink-0" />
                      <span className="font-medium text-foreground">
                        Budaya 5S Beradab
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-border bg-muted/40 flex items-center gap-2">
                      <Sparkles className="size-3.5 text-primary shrink-0" />
                      <span className="font-medium text-foreground">
                        Shalat Dhuha & Dzuhur
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-border bg-muted/40 flex items-center gap-2">
                      <Languages className="size-3.5 text-primary shrink-0" />
                      <span className="font-medium text-foreground">
                        Bilingual Immersion
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-border bg-muted/40 flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                      <span className="font-medium text-foreground">
                        STEM & Nature Lab
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Card Footer: Realtime Adab & Attendance Compliance */}
              <div className="p-4 bg-primary/5 border-t border-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <span className="size-2 rounded-full bg-emerald-500 inline-block" />
                  <span>Kepatuhan Kehadiran & Shalat:</span>
                </div>
                <span className="font-bold text-foreground">
                  98.4% Tepat Waktu
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* High-Impact Stat Metrics Grid (4 Cards) */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="p-6 rounded-2xl border border-border hover:border-primary/40 transition-colors shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                1 : 15
              </span>
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="size-5" />
              </div>
            </div>
            <p className="text-sm font-bold text-foreground">
              Rasio Terfokus Guru-Siswa
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Maksimal 20 siswa per kelas untuk pendampingan fitrah dan
              perhatian personal intensif.
            </p>
          </Card>

          <Card className="p-6 rounded-2xl border border-border hover:border-primary/40 transition-colors shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Grade A
              </span>
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Award className="size-5" />
              </div>
            </div>
            <p className="text-sm font-bold text-foreground">
              Akreditasi BAN-S/M
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Predikat Unggul standar nasional dengan integrasi penuh standar
              mutu JSIT Indonesia.
            </p>
          </Card>

          <Card className="p-6 rounded-2xl border border-border hover:border-primary/40 transition-colors shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                3 Juz
              </span>
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <BookOpen className="size-5" />
              </div>
            </div>
            <p className="text-sm font-bold text-foreground">
              Tahfidz Mutqin Bersanad
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Bimbingan talaqqi makharijul huruf bersanad dan sertifikasi
              tasmi&apos; sekali duduk.
            </p>
          </Card>

          <Card className="p-6 rounded-2xl border border-border hover:border-primary/40 transition-colors shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Bilingual
              </span>
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Languages className="size-5" />
              </div>
            </div>
            <p className="text-sm font-bold text-foreground">
              English &amp; Arabic Immersion
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Pembiasaan percakapan harian dua bahasa guna mempersiapkan santri
              berwawasan global.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
