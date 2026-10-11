"use client";

import { ArrowRight, BookMarked, Cpu, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function BentoValuesSection() {
  return (
    <section
      aria-labelledby="bento-values-heading"
      className="py-20 md:py-28 lg:py-32 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="gap-2 px-3.5 py-1 mb-5 text-xs font-semibold rounded-full border-primary/30 text-primary bg-primary/5"
          >
            <span>4 PILAR PENDIDIKAN INTEGRATIF</span>
          </Badge>
          <h2
            id="bento-values-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Kerangka Pembelajaran Holistik Berakar Fitrah
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Struktur kurikulum yang mengharmoniskan kedalaman spiritual
            Al-Qur&apos;an, keluhuran adab islami, dan ketajaman nalar sains
            komputasional modern.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Pillar 01: Tahfidzul Qur'an (Span 7) */}
          <Card className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between rounded-3xl border border-border hover:border-primary/40 transition-all shadow-xs bg-card/90">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge
                  variant="secondary"
                  className="font-semibold text-primary bg-primary/10 border border-primary/20"
                >
                  Pilar 01 • Al-Qur&apos;an
                </Badge>
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <BookMarked className="size-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight leading-snug">
                Talaqqi Bersanad &amp; Muroja&apos;ah Mandiri
              </h3>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Santri dibimbing secara intensif dalam halaqah pagi untuk
                menguasai makharijul huruf dan kaidah tajwid yang presisi.
                Evaluasi kemutqinan diuji melalui tasmi&apos; sekali duduk
                terbuka dihadapan para orang tua dan asatidz.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  Guru Bersanad Hafs &apos;an &apos;Ashim
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Ujian Tasmi&apos; Terbuka
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Mutaba&apos;ah Harian
                </Badge>
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium">
                Target: Juz 30, 29, 28 (Mutqin)
              </span>
              <Link
                href="/programs#tahfidz"
                className="font-semibold text-primary hover:underline flex items-center gap-1.5"
              >
                <span>Pelajari Silabus</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </Card>

          {/* Pillar 02: Adab & Akhlak (Span 5) */}
          <Card className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between rounded-3xl border border-border hover:border-primary/40 transition-all shadow-xs bg-card/90">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge
                  variant="secondary"
                  className="font-semibold text-primary bg-primary/10 border border-primary/20"
                >
                  Pilar 02 • Karakter
                </Badge>
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="size-5" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-snug">
                Adab Sebelum Ilmu &amp; 7 Kebiasaan Mulia
              </h3>
              <div className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Shalat Dhuha dan Dzuhur berjamaah tepat waktu, internalisasi{" "}
                <HoverCard>
                  <HoverCardTrigger className="underline decoration-dashed underline-offset-4 cursor-help font-semibold text-foreground">
                    Budaya 5S Beradab
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4" side="top">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                        <Heart className="size-4 text-primary" /> Senyum, Salam,
                        Sapa, Sopan, Santun
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Tata krama harian yang dipraktikkan secara konsisten
                        oleh seluruh santri, guru, dan staf sekolah.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                , serta proyek empati sosial melalui infak rutin dan bakti
                birrul walidain.
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-border text-xs text-muted-foreground font-medium">
              <span>Prinsip: Adab Mendahului Ilmu Pengetahuan</span>
            </div>
          </Card>

          {/* Pillar 03: Inkuiri Sains & Komputasi (Span 5) */}
          <Card className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between rounded-3xl border border-border hover:border-primary/40 transition-all shadow-xs bg-card/90">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge
                  variant="secondary"
                  className="font-semibold text-primary bg-primary/10 border border-primary/20"
                >
                  Pilar 03 • Sains &amp; STEM
                </Badge>
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Cpu className="size-5" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-snug">
                Inkuiri Sains Alam &amp; Logika Komputasi
              </h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Pembelajaran berbasis eksplorasi aktif yang mengintegrasikan
                eksperimen sains alam terbuka, pemikiran komputasional (coding
                junior), dan pemecahan masalah kreatif aplikatif.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-border text-xs text-muted-foreground font-medium">
              <span>Menumbuhkan Nalar Kritis &amp; Literasi Teknologi</span>
            </div>
          </Card>

          {/* Pillar 04: Ekosistem School Sehat (Span 7) */}
          <Card className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between rounded-3xl border border-border hover:border-primary/40 transition-all shadow-xs bg-card/90">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge
                  variant="secondary"
                  className="font-semibold text-primary bg-primary/10 border border-primary/20"
                >
                  Pilar 04 • Ekosistem
                </Badge>
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles className="size-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight leading-snug">
                Rasio Terfokus 1:15 &amp; Kampus Ramah Anak
              </h3>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Pembatasan ketat maksimal 20 siswa per kelas (kuota 2 rombel /
                40 santri per angkatan) menjamin keterikatan emosional dan
                perhatian personal penuh bagi setiap anak. Didukung ruang kelas
                ber-AC, masjid sekolah luas, perpustakaan, dan area terbuka
                hijau.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium">
                Rasio 1:15 (Maksimal 40 Santri per Angkatan)
              </span>
              <Link
                href="/programs#facilities"
                className="font-semibold text-primary hover:underline flex items-center gap-1.5"
              >
                <span>Lihat Fasilitas Kampus</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
