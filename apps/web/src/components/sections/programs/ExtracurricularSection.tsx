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
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    code: "EKS // 01",
    title: "Traditional Archery (Panahan Sunnah)",
    category: "Olahraga Sunnah",
    schedule: "Setiap Sabtu Pagi",
    description:
      "Melatih konsentrasi, ketenangan emosional, postur tubuh, dan keselarasan fokus sesuai sunnah Rasulullah ﷺ dengan bantalan target berstandar keamanan.",
    icon: Target,
    featured: true,
  },
  {
    code: "EKS // 02",
    title: "Seni Bela Diri Pencak Silat",
    category: "Bela Diri & Karakter",
    schedule: "Setiap Kamis Sore",
    description:
      "Membentuk ketahanan fisik, kebugaran kardiovaskular, dan menanamkan etika kesatria serta kemampuan bela diri tanpa arogansi.",
    icon: Shield,
  },
  {
    code: "EKS // 03",
    title: "Junior Science & Basic Robotics",
    category: "Teknologi & Kreativitas",
    schedule: "Setiap Selasa Sore",
    description:
      "Eksperimen sains terapan yang menyenangkan, perakitan mekanik sederhana, dan pengenalan logika pemecahan masalah algoritma.",
    icon: Cpu,
  },
  {
    code: "EKS // 04",
    title: "Pramuka Islam Terpadu",
    category: "Kepemimpinan & Alam",
    schedule: "Setiap Jumat Siang",
    description:
      "Latihan kepanduan bernuansa islami: tali temali pionering, navigasi arah kiblat, sandi, kepedulian lingkungan, dan perkemahan tadabbur alam.",
    icon: Compass,
  },
  {
    code: "EKS // 05",
    title: "Seni Kaligrafi & Tilawah",
    category: "Seni & Estetika Islam",
    schedule: "Setiap Rabu Sore",
    description:
      "Mengasah kehalusan rasa melalui kaidah penulisan mushaf Al-Qur'an (khat Naskhi dan Riq'ah) dipadukan dengan seni tilawah bersuara merdu.",
    icon: Feather,
  },
  {
    code: "EKS // 06",
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
      className="py-20 md:py-28 lg:py-32 bg-muted/30 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal
          direction="up"
          className="max-w-3xl mb-12 md:mb-16 text-center sm:text-left"
        >
          <Badge variant="secondary" className="mb-4">
            Pengembangan Bakat &amp; Minat
          </Badge>
          <h2
            id="extracurricular-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Program Ekstrakurikuler &amp; Olahraga Sunnah
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
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
                <Card className="flex-1 flex flex-col justify-between border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar aria-hidden="true" className="size-3.5" />
                          <span>{item.schedule}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div
                          aria-hidden="true"
                          className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"
                        >
                          <Icon className="size-6" />
                        </div>
                        <CardTitle
                          id={`ekskul-${idx}-title`}
                          className="text-lg sm:text-xl font-bold text-foreground"
                        >
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </div>

                  <CardFooter className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5 text-primary font-medium">
                      <Sparkles aria-hidden="true" className="size-3.5" />
                      <span>Pelatih Bersertifikat Resmi</span>
                    </div>
                    <span>Kuota Terjadwal</span>
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
