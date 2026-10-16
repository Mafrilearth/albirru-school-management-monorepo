"use client";

import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Quote,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/button";

const fitrahPillars = [
  {
    title: "Qudwah Hasanah",
    subtitle: "Keteladanan Hidup",
    desc: "Setiap dewan asatidz dan pendidik hadir sebagai teladan akhlak nyata yang disaksikan dan diteladani langsung oleh santri.",
    icon: Sparkles,
  },
  {
    title: "Disiplin Positif",
    subtitle: "Bimbingan Penuh Martabat",
    desc: "Membiasakan kemandirian dan tata krama tanpa agresi verbal maupun hukuman fisik, berorientasi pengasuhan ramah anak.",
    icon: Compass,
  },
  {
    title: "Sinergi Orang Tua",
    subtitle: "Harmoni Rumah & Sekolah",
    desc: "Penyelarasan pembiasaan ibadah dan adab harian melalui mutaba'ah terintegrasi antara asatidz dan ayah-bunda.",
    icon: HeartHandshake,
  },
];

export function WelcomeSection() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="py-24 sm:py-32 lg:py-36 bg-muted/20 border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headmaster Identity Monolith Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-8 sm:p-10 h-full flex flex-col justify-between rounded-none border border-border bg-card/60 backdrop-blur-xs relative group hover:border-foreground/30 transition-colors shadow-none">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-16 rounded-none bg-muted/40 border border-border flex items-center justify-center text-foreground shadow-none">
                      <UserCheck className="size-8" />
                    </div>
                    <span className="inline-flex px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider bg-muted/40 border border-border text-foreground font-bold">
                      // KEPALA SEKOLAH
                    </span>
                  </div>

                  <h3
                    id="headmaster-name"
                    className="text-2xl font-bold text-foreground tracking-tight"
                  >
                    Ustadz H. Ahmad Fauzi, M.Pd.
                  </h3>
                  <p className="text-xs font-mono font-semibold text-primary mt-1 uppercase tracking-wider">
                    Kepala Sekolah SD Al-Birru
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                    Magister Manajemen Pendidikan Islam (UIN SGD)
                  </p>

                  <blockquote
                    cite="Ustadz H. Ahmad Fauzi, M.Pd."
                    className="mt-6 p-5 rounded-none bg-muted/40 text-sm text-foreground leading-relaxed italic border-l border-border relative"
                  >
                    <Quote className="size-5 text-primary/30 absolute top-3 right-3" />
                    &ldquo;Pendidikan bukan sekadar transfer ilmu pengetahuan,
                    melainkan ikhtiar membangunkan fitrah tauhid, menjaga
                    kesucian kalbu, dan menyemai adab mulia sebelum ilmu formal
                    diajarkan.&rdquo;
                  </blockquote>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <div className="flex items-center gap-1.5 text-primary font-semibold">
                    <ShieldCheck className="size-4" />
                    <span>Sekolah Ramah Anak</span>
                  </div>
                  <span className="font-semibold uppercase tracking-wider text-muted-foreground text-[10px]">
                    STANDAR TERPADU
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Pedagogical Philosophy & Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-border bg-background text-foreground">
                <span className="size-1.5 bg-primary" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  FILOSOFI PENDIDIKAN FITRAH
                </span>
              </div>

              <h2
                id="welcome-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]"
              >
                Menumbuhkan Fitrah Ananda Melalui Keteladanan, Adab, &amp; Kasih
                Sayang
              </h2>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Santri usia sekolah dasar belajar paling mendalam dari apa yang
                mereka saksikan dan rasakan langsung dalam keseharian. Di SD
                Al-Birru, setiap ruang kelas, masjid sekolah, dan laboratorium
                alam dirancang untuk menumbuhkan kecintaan terhadap ilmu dan
                keluhuran akhlak.
              </p>

              {/* 3 Pillar Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {fitrahPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 flex flex-col justify-start rounded-none border border-border hover:border-foreground/30 transition-colors bg-card/60 relative group shadow-none"
                    >
                      <div className="size-10 rounded-none bg-muted/40 border border-border flex items-center justify-center text-foreground mb-3">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground tracking-tight">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-primary mt-0.5">
                        {item.subtitle}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs">
                <Button
                  render={<Link href="/profile" />}
                  nativeButton={false}
                  size="lg"
                  className="gap-2 font-mono uppercase tracking-wider rounded-none shadow-none text-xs"
                >
                  <span>Mengenal Lebih Dekat SD Al-Birru</span>
                  <ArrowRight data-icon="inline-end" />
                </Button>

                <Button
                  render={<Link href="/academics" />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="font-mono uppercase tracking-wider rounded-none shadow-none text-xs border-border hover:bg-muted"
                >
                  <span>Pelajari Kurikulum Unggulan</span>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
