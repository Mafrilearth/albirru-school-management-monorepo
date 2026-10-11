"use client";

import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface CTASectionProps {
  kicker?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
}

export function CTASection({
  kicker = "New Student Admissions AY 2026/2027",
  title = "Lay the Strongest Foundation for Your Child's Future",
  description = "Enrollment is capped at 2 classes (40 students) to guarantee individual mentorship and optimal tahfidz guidance. Consult your child's readiness with our admissions team.",
  primaryBtnText = "Admissions Consultation Form",
  primaryBtnHref = "/contact",
}: CTASectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 md:py-28 lg:py-36 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" scale={0.98}>
          <Card className="p-8 sm:p-12 md:p-16 text-center flex flex-col items-center shadow-sm relative overflow-hidden">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <Badge
                variant="outline"
                className="gap-2 px-3.5 py-1 mb-6 text-xs font-medium rounded-full"
              >
                <span>{kicker}</span>
              </Badge>

              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight"
              >
                {title}
              </h2>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {description}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button
                  render={<Link href={primaryBtnHref} />}
                  nativeButton={false}
                  size="lg"
                  className="w-full sm:w-auto gap-2 font-medium"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowRight className="size-4" />
                </Button>

                <Button
                  render={
                    <a
                      href="https://wa.me/6281234567890?text=Assalamu'alaikum%20SD%20Al-Birru%20Admissions%20Team,%20I%20would%20like%20to%20inquire%20about%20Admissions%20for%20Academic%20Year%202026/2027."
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 font-medium"
                >
                  <MessageCircle className="size-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium">
                <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>
                  Child-friendly initial consultation and developmental
                  observation with zero hidden fees
                </span>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
