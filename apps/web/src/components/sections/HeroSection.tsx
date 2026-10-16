import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
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
      className="w-full relative overflow-hidden py-16 sm:py-24 lg:py-28 bg-background border-b border-border"
    >
      {/* Multi-Chromatic Atmospheric Spotlights — pure CSS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-0 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] bg-gradient-to-br from-amber-500/15 via-orange-500/5 to-transparent blur-3xl rounded-none -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] bg-gradient-to-bl from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl rounded-none -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 w-[600px] h-[350px] bg-gradient-to-t from-sky-500/10 via-indigo-500/5 to-transparent blur-3xl rounded-none -z-10"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: LCP-Critical Headline — Server Rendered */}
          <div className="lg:col-span-6 flex flex-col items-start text-start">
            {/* Live Admission Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-none border border-border bg-card/80 text-[11px] font-mono uppercase tracking-wider text-foreground">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 bg-emerald-500" />
              </span>
              <span className="font-bold text-foreground">PPDB 2026/2027</span>
              <span className="text-border">|</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Pendaftaran Dibuka
              </span>
            </div>

            {/* High-Impact Headline — Pure Crisp Neutral Typography */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-foreground tracking-[-0.035em] leading-[1.1] text-balance"
              style={{ textWrap: "balance" }}
            >
              Membina Fitrah Beradab, Menghafal Al-Qur&apos;an, Meraih
              Keunggulan Sains.
            </h1>

            {/* Subheading with Expansive Breathing Room */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Sekolah Dasar Islam Terpadu berlandaskan nilai-nilai
              Al-Qur&apos;an. Menumbuhkan adab islami, pembiasaan ibadah harian,
              serta pendekatan belajar yang interaktif dan menyenangkan.
            </p>

            {/* Architectural Kinetic Action Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                render={<Link href="/admissions" />}
                nativeButton={false}
                size="lg"
                className="gap-2 font-mono text-xs uppercase tracking-wider font-bold bg-primary text-primary-foreground hover:bg-foreground hover:text-background rounded-none border border-transparent px-8 py-3.5 shadow-none active:scale-[0.98] transition-all duration-150 ease-out cursor-pointer"
              >
                <span>Daftar Siswa Baru</span>
                <ArrowRight data-icon="inline-end" />
              </Button>

              <Button
                render={<Link href="/academics" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="gap-2 font-mono text-xs uppercase tracking-wider font-bold border-border hover:border-foreground bg-background hover:bg-muted text-foreground rounded-none px-8 py-3.5 shadow-none active:scale-[0.98] transition-all duration-150 ease-out cursor-pointer"
              >
                <BookOpen
                  data-icon="inline-start"
                  className="size-4 text-muted-foreground"
                />
                <span>Pelajari Program</span>
              </Button>
            </div>

            {/* General Educational Pillars */}
            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-[11px] tracking-wider uppercase text-muted-foreground">
              <div className="flex items-center gap-1.5 text-foreground font-bold">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                <span className="text-foreground">KURIKULUM TERPADU</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-sky-600 shrink-0" />
                <span className="text-foreground">PEMBINAAN FITRAH</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="size-3.5 text-foreground shrink-0" />
                <span>PENDIDIKAN KARAKTER</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Showcase — Client Island */}
          <div className="lg:col-span-6 w-full flex justify-center items-center">
            <HeroProgramShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
