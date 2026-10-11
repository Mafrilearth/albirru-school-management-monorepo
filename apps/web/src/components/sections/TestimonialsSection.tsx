"use client";

import React from "react";
import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "Sejak menyekolahkan anak kami di SD Al-Birru, perubahan adab dan kedisiplinan beribadahnya sangat luar biasa. Hafalan Al-Qur'an 3 Juz mutqin yang dijanjikan terbukti bukan sekadar slogan.",
    author: "Bunda Aisha",
    role: "Wali Murid Angkatan 2",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote:
      "Curriculum Merdeka yang dipadukan dengan nilai-nilai Islami membuat anak saya yang dulunya pasif menjadi sangat kritis dan berani berpendapat. Facilities sekolahnya juga sangat mendukung.",
    author: "Bapak Ridwan",
    role: "Komite School",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "Teachers-gurunya sangat sabar dan penyayang. Anak saya selalu semangat berangkat ke school setiap hari. Lingkungan school yang asri sangat membantu konsentrasi belajar.",
    author: "Bunda Fatimah",
    role: "Wali Murid Angkatan 4",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200/70 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
            Apa Kata Mereka?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Testimoni jujur dari orang tua students tentang pengalaman pendidikan di SD Al-Birru.
          </p>
        </ScrollReveal>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <CarouselContent className="ml-0">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-0 md:basis-1/2 lg:basis-1/2">
                <div className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-none border border-slate-200 dark:border-slate-800 h-full flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group">
                  <div>
                    <Quote className="size-10 text-slate-200 dark:text-slate-800 mb-6" />
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                    <Avatar className="size-12 rounded-none border border-slate-200 dark:border-slate-700">
                      <AvatarImage src={t.avatar} alt={t.author} className="rounded-none" />
                      <AvatarFallback className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-none font-mono font-bold text-lg">{t.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-slate-950 dark:text-slate-50 text-sm font-mono">{t.author}</h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wide mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-none border-slate-300 dark:border-slate-600" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-none border-slate-300 dark:border-slate-600" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
