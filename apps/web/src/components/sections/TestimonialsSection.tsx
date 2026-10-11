"use client";

import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Sejak ananda bersekolah di SD Al-Birru, perubahan adab dan kedisiplinan shalatnya sangat terasa di rumah. Janji hafalan 3 Juz mutqin bukan sekadar slogan, melainkan terbukti nyata melalui ujian tasmi' terbuka sekali duduk.",
    author: "Bunda Aisyah, S.Pd.",
    role: "Wali Santri Angkatan II",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote:
      "Perpaduan kurikulum nasional dan nilai Islam terpadu membuat ananda yang awalnya pemalu kini sangat percaya diri, gemar bereksplorasi sains, dan memiliki akhlak santun kepada orang tua.",
    author: "Ayah Ridwan Kurniawan",
    role: "Komite Sekolah & Orang Tua Santri",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "Para asatidz sangat sabar membimbing dengan pendekatan disiplin positif tanpa kekerasan. Setiap pagi anak saya berangkat sekolah dengan wajah ceria. Suasana kampus yang asri sangat mendukung konsentrasi belajar.",
    author: "Bunda dr. Fatimah Az-Zahra",
    role: "Wali Santri Angkatan IV",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-muted/30 border-b border-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="gap-2 px-3.5 py-1 mb-5 text-xs font-semibold rounded-full border-primary/30 text-primary bg-primary/5"
          >
            <span>TESTIMONI AYAH &amp; BUNDA</span>
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Kisah Nyata Perjalanan Fitrah Santri
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Refleksi jujur dari para orang tua murid mengenai perkembangan adab,
            kemandirian ibadah, dan kelancaran tahfidz ananda di SD Al-Birru.
          </p>
        </ScrollReveal>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto relative px-4 sm:px-8"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2">
                <Card className="p-8 h-full flex flex-col justify-between rounded-3xl border border-border hover:border-primary/40 transition-all shadow-xs bg-card/90">
                  <div>
                    <Quote className="size-8 text-primary/30 mb-4" />
                    <p className="text-foreground/90 font-medium leading-relaxed italic text-sm sm:text-base">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                    <Avatar className="size-11 border border-primary/20">
                      <AvatarImage src={t.avatar} alt={t.author} />
                      <AvatarFallback className="font-bold text-sm bg-primary/10 text-primary">
                        {t.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        {t.author}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
