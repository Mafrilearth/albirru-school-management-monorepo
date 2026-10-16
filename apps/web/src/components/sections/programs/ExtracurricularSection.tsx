"use client";

import {
  Calendar,
  Compass,
  Cpu,
  Feather,
  Languages,
  Shield,
  Sparkles,
  Target,
} from "lucide-react";
import type React from "react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { cn } from "@/lib/utils";

interface ExtracurricularItem {
  code: string;
  title: string;
  category: string;
  schedule: string;
  description: string;
  icon: React.ElementType;
  featured?: boolean;
}

const extracurriculars: ExtracurricularItem[] = [
  {
    code: "EKS-01",
    title: "Traditional Archery (Panahan Sunnah)",
    category: "Olahraga Sunnah",
    schedule: "Setiap Sabtu Pagi",
    description:
      "Melatih konsentrasi, ketenangan emosional, postur tubuh, dan keselarasan fokus sesuai sunnah Rasulullah ﷺ dengan bantalan target berstandar keamanan.",
    icon: Target,
    featured: true,
  },
  {
    code: "EKS-02",
    title: "Seni Bela Diri Pencak Silat",
    category: "Bela Diri & Karakter",
    schedule: "Setiap Kamis Sore",
    description:
      "Membentuk ketahanan fisik, kebugaran kardiovaskular, dan menanamkan etika kesatria serta kemampuan bela diri tanpa arogansi.",
    icon: Shield,
  },
  {
    code: "EKS-03",
    title: "Junior Science & Basic Robotics",
    category: "Teknologi & Kreativitas",
    schedule: "Setiap Selasa Sore",
    description:
      "Eksperimen sains terapan yang menyenangkan, perakitan mekanik sederhana, dan pengenalan logika pemecahan masalah algoritma.",
    icon: Cpu,
  },
  {
    code: "EKS-04",
    title: "Pramuka Islam Terpadu",
    category: "Kepemimpinan & Alam",
    schedule: "Setiap Jumat Siang",
    description:
      "Latihan kepanduan bernuansa islami: tali temali pionering, navigasi arah kiblat, sandi, kepedulian lingkungan, dan perkemahan tadabbur alam.",
    icon: Compass,
  },
  {
    code: "EKS-05",
    title: "Seni Kaligrafi & Tilawah",
    category: "Seni & Estetika Islam",
    schedule: "Setiap Rabu Sore",
    description:
      "Mengasah kehalusan rasa melalui kaidah penulisan mushaf Al-Qur'an (khat Naskhi dan Riq'ah) dipadukan dengan seni tilawah bersuara merdu.",
    icon: Feather,
  },
  {
    code: "EKS-06",
    title: "Bilingual Public Speaking Club",
    category: "Bahasa & Komunikasi",
    schedule: "Setiap Senin Sore",
    description:
      "Membangun keberanian santri dalam berpidato, bercerita (storytelling), dan percakapan tematik dalam Bahasa Arab dan Inggris praktis.",
    icon: Languages,
  },
];

export function ExtracurricularSection() {
  return (
    <section
      aria-labelledby="extracurricular-heading"
      className="py-24 sm:py-32 lg:py-36 bg-muted/20 border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal
          direction="up"
          className="max-w-3xl mb-14 md:mb-18 text-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-border bg-background text-foreground">
            <span className="size-1.5 bg-primary" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              PENGEMBANGAN MINAT &amp; OLAHRAGA SUNNAH
            </span>
          </div>
          <h2
            id="extracurricular-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]"
          >
            Program Ekstrakurikuler &amp; Olahraga Sunnah
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Menumbuhkan ketangkasan fisik, ketajaman fokus, dan jiwa
            kepemimpinan santri di bawah bimbingan pelatih bersertifikasi dan
            instruktur berpengalaman.
          </p>
        </ScrollReveal>

        {/* Extracurricular Grid */}
        <ul
          aria-labelledby="extracurricular-heading"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch list-none p-0"
        >
          {extracurriculars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li
                key={idx}
                className={cn(
                  "flex",
                  item.featured && "md:col-span-2 lg:col-span-2",
                )}
              >
                <div className="flex-1 flex flex-col justify-between border border-border bg-card/60 p-6 sm:p-8 rounded-none hover:border-foreground/30 transition-colors relative group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="inline-flex px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider bg-muted/40 border border-border text-foreground">
                        {item.category}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                        <Calendar
                          aria-hidden="true"
                          className="size-3 text-muted-foreground"
                        />
                        <span>{item.schedule}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div
                        aria-hidden="true"
                        className="size-12 rounded-none bg-muted/40 border border-border text-foreground flex items-center justify-center shrink-0"
                      >
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block">
                          {item.code}
                        </span>
                        <h3
                          id={`ekskul-${idx}-title`}
                          className="text-lg sm:text-xl font-bold text-foreground tracking-tight"
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <div className="flex items-center gap-1.5 text-primary font-medium">
                      <Sparkles aria-hidden="true" className="size-3.5" />
                      <span>PELATIH BERSERTIFIKAT</span>
                    </div>
                    <span className="uppercase text-[10px] text-muted-foreground/70">
                      KUOTA TERJADWAL
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
