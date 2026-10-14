import {
  ArrowRight,
  Award,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroProgramShowcase } from "./HeroProgramShowcase";

/**
 * HeroSection — rendered as a React Server Component so the LCP
 * headline text paints instantly in the server HTML without waiting
 * for JS hydration. The interactive program showcase card is loaded
 * separately as a client component island.
 *
 * Previously the entire hero was "use client", causing a 1,490 ms
 * LCP element render delay on the `<h1>` text.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-background border-b border-border"
    >
      {/* Ambient Glow Backdrop — pure CSS, no motion dependency */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] sm:w-[900px] sm:h-[600px] bg-gradient-to-tr from-primary/15 via-emerald-400/10 to-teal-400/5 blur-3xl rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: LCP-Critical Headline — Server Rendered */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Live Admission Status Badge with Frosted Capsule */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-md text-xs font-medium text-foreground shadow-xs">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-primary" />
              </span>
              <span className="font-semibold text-primary">PPDB 2026/2027</span>
              <span className="text-border">|</span>
              <span className="text-muted-foreground">
                Gelombang I Terbuka (Sisa 14 Kursi)
              </span>
            </div>

            {/* High-Impact Headline — Instant Server Paint for LCP */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-foreground tracking-[-0.035em] leading-[1.1] text-balance"
            >
              Membina Fitrah Beradab,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300">
                Menghafal Al-Qur&apos;an
              </span>
              , Meraih Keunggulan Sains.
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Sekolah Dasar Islam Terpadu unggulan di Sukabumi. Rasio terfokus
              1:15, bimbingan tahfidz 3 juz mutqin bersanad, dan pembiasaan adab
              islami harian sejak dini.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                render={<Link href="/admissions" />}
                nativeButton={false}
                size="lg"
                className="gap-2 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide rounded-full px-6 shadow-md shadow-primary/20 active:scale-[0.98] transition-all duration-150 ease-out"
              >
                <span>Daftar Siswa Baru</span>
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
                className="gap-2 font-medium border-border hover:bg-muted/80 text-sm text-foreground rounded-full px-6 active:scale-[0.98] transition-all duration-150 ease-out"
              >
                <MessageCircle
                  data-icon="inline-start"
                  className="size-4 text-primary"
                />
                <span>Konsultasi WhatsApp</span>
              </Button>
            </div>

            {/* Proof Markers */}
            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 text-foreground font-semibold">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>BAN-SM: Akreditasi A</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                <span>NPSN: 70010111</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="size-4 text-primary shrink-0" />
                <span>Cicantayan, Sukabumi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Showcase — Client Island */}
          <HeroProgramShowcase />
        </div>
      </div>
    </section>
  );
}
