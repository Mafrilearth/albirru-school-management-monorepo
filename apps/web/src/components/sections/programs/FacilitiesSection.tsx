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
import type React from "react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    title: "Ruang Kelas Ber-AC & Ergonomis",
    category: "Ruang Belajar",
    description:
      "Ruang belajar bersih dan berpendingin udara yang dilengkapi proyektor multimedia, pencahayaan alami sehat, serta loker pribadi peserta didik.",
    icon: Building2,
    specs: [
      "Maksimal 15–20 siswa (Rasio Terfokus 1:15)",
      "Smart Display & Sistem Audio",
      "Pencahayaan Alami Sehat",
    ],
  },
  {
    code: "FAS // 02",
    title: "Masjid & Hall Shalat Berjamaah",
    category: "Pusat Ibadah",
    description:
      "Sentra pembinaan ibadah shalat Dhuha harian, shalat fardhu berjamaah, serta majelis tasmi' Al-Qur'an santri bersama orang tua.",
    icon: Sun,
    specs: [
      "Kapasitas 300+ jamaah",
      "Area wudhu higienis terpisah",
      "Karpet empuk & ruangan sejuk",
    ],
  },
  {
    code: "FAS // 03",
    title: "Perpustakaan & Pojok Literasi Anak",
    category: "Literasi",
    description:
      "Pusat literasi dengan ratusan judul buku cerita anak bergambar, ensiklopedia sains Islam, serta area baca santai lesehan yang nyaman.",
    icon: BookOpen,
    specs: [
      "500+ Koleksi buku pilihan",
      "Area baca lesehan beanbag",
      "Sistem peminjaman terstruktur",
    ],
  },
  {
    code: "FAS // 04",
    title: "Laboratorium Sains & Komputer",
    category: "Teknologi",
    description:
      "Ruang praktikum sains terapan sederhana dan unit komputer edukasi untuk mengenalkan logika komputasi dan coding dasar sejak dini.",
    icon: Laptop,
    specs: [
      "Kit eksperimen sains aman",
      "Workstation komputer edukatif",
      "Akses internet sehat terfilter",
    ],
  },
  {
    code: "FAS // 05",
    title: "Lapangan Olahraga & Area Panahan",
    category: "Kebugaran Fisik",
    description:
      "Area terbuka multifungsi untuk senam pagi, mini futsal, bulu tangkis, dan lapangan panahan sunnah standar keamanan.",
    icon: Trophy,
    specs: [
      "Lantai lapangan ramah anak",
      "Bantalan target panahan khusus",
      "Peralatan olahraga lengkap",
    ],
  },
  {
    code: "FAS // 06",
    title: "UKS & Ruang Konseling Ramah Anak",
    category: "Kesehatan & Tumbuh Kembang",
    description:
      "Unit pertolongan pertama kesehatan yang terkoordinasi dengan faskes terdekat serta ruang konsultasi psikolog anak.",
    icon: HeartPulse,
    specs: [
      "Tempat tidur observasi medis",
      "Perlengkapan P3K lengkap",
      "Konsultasi psikolog anak",
    ],
  },
];

export function FacilitiesSection() {
  return (
    <section
      aria-labelledby="facilities-heading"
      className="py-20 md:py-28 lg:py-32 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal
          direction="up"
          className="max-w-3xl mb-12 md:mb-16 text-center sm:text-left"
        >
          <Badge variant="secondary" className="mb-4">
            Sarana &amp; Prasarana
          </Badge>
          <h2
            id="facilities-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Fasilitas Kampus yang Nyaman, Asri &amp; Aman
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            SD Al-Birru menyediakan fasilitas lengkap untuk menunjang kenyamanan
            belajar, ibadah, dan aktivitas fisik peserta didik setiap hari.
          </p>
        </ScrollReveal>

        {/* Facility Cards Grid */}
        <ul
          aria-labelledby="facilities-heading"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch list-none p-0"
        >
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <li key={idx} className="flex">
                <Card className="flex-1 flex flex-col justify-between border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    {/* Visual Placeholder */}
                    <div className="aspect-[16/10] w-full rounded-t-lg bg-muted flex flex-col items-center justify-center text-center p-4 border-b border-border">
                      <div
                        aria-hidden="true"
                        className="size-12 rounded-xl bg-background border border-border flex items-center justify-center text-primary mb-2 shadow-xs"
                      >
                        <Icon className="size-6" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        Dokumentasi {fac.title}
                      </span>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {fac.category}
                        </Badge>
                      </div>

                      <CardTitle
                        id={`facility-${idx}-title`}
                        className="text-lg sm:text-xl font-bold text-foreground"
                      >
                        {fac.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {fac.description}
                      </p>

                      <ul
                        aria-label={`Spesifikasi untuk ${fac.title}`}
                        className="flex flex-col gap-2 border-t border-border pt-4 list-none p-0"
                      >
                        {fac.specs.map((spec, sIdx) => (
                          <li
                            key={sIdx}
                            className="flex items-center gap-2.5 text-xs text-foreground/90"
                          >
                            <Check
                              aria-hidden="true"
                              className="size-4 text-primary shrink-0"
                            />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>

                  <CardFooter className="pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck
                      aria-hidden="true"
                      className="size-4 text-primary"
                    />
                    <span>Standar Kebersihan &amp; Keamanan Terjaga</span>
                  </CardFooter>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
