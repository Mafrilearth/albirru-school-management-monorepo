"use client";

import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
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
  kicker = "Penerimaan Siswa Baru TA 2026/2027",
  title = "Fondasi Terbaik Menemani Tumbuh Kembang & Fitrah Ananda",
  description = "Kuota dibatasi ketat hanya 2 rombel (maksimal 40 santri per angkatan) guna memastikan pendampingan adab personal dan bimbingan tahfidz intensif. Konsultasikan kesiapan ananda bersama tim penerimaan kami.",
  primaryBtnText = "Daftar Siswa Baru Sekarang",
  primaryBtnHref = "/admissions",
}: CTASectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" scale={0.98}>
          <Card className="p-8 sm:p-12 md:p-16 text-center flex flex-col items-center rounded-3xl border border-primary/25 shadow-2xl relative overflow-hidden bg-card/95 backdrop-blur-md">
            {/* Ambient Inner Lighting */}
            <div
              aria-hidden="true"
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,oklch(0.38_0.12_165/0.18),transparent_75%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,oklch(0.72_0.15_165/0.15),transparent_75%)] pointer-events-none -z-10"
            />

            <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
              <Badge
                variant="outline"
                className="gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold rounded-full border-primary/30 text-primary bg-primary/10 backdrop-blur-xs"
              >
                <Sparkles className="size-3.5" />
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
                  className="w-full sm:w-auto gap-2 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                >
                  <span>{primaryBtnText}</span>
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
                  className="w-full sm:w-auto gap-2 font-medium bg-background/80 hover:bg-muted/50"
                >
                  <MessageCircle
                    data-icon="inline-start"
                    className="text-primary"
                  />
                  <span>Konsultasi via WhatsApp</span>
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                <span>
                  Observasi kesiapan belajar ramah anak tanpa tes baca-tulis
                  yang membebani &amp; transparansi biaya
                </span>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
