"use client";

import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      "Since enrolling our child at SD Al-Birru, the development in his etiquette and prayer discipline has been truly remarkable. The 3 Juz mutqin Qur'an memorization promise is proven to be a reality, not just a slogan.",
    author: "Mrs. Aisha",
    role: "Parent of Cohort 2 Student",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote:
      "The national curriculum combined with authentic Islamic values has transformed my previously shy child into an inquisitive, confident speaker. The school facilities are also exceptional.",
    author: "Mr. Ridwan",
    role: "School Committee Representative",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "The teachers are remarkably patient and nurturing. My daughter looks forward to going to school every single morning. The lush green campus environment greatly supports learning focus.",
    author: "Mrs. Fatimah",
    role: "Parent of Cohort 4 Student",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30 border-b border-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            What Parents Say
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Honest perspectives from parents on their children&apos;s
            educational experience at SD Al-Birru.
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
                <Card className="p-8 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <Quote className="size-8 text-muted-foreground/30 mb-4" />
                    <p className="text-foreground/90 font-medium leading-relaxed italic text-sm sm:text-base">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarImage src={t.avatar} alt={t.author} />
                      <AvatarFallback className="font-semibold text-sm">
                        {t.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
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
