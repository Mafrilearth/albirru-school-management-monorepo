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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
      className="py-20 md:py-28 lg:py-32 bg-muted/30 border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headmaster Identity Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.1}>
              <Card className="p-8 sm:p-10 h-full flex flex-col justify-between rounded-3xl border border-primary/20 shadow-md bg-card/90 backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                      <UserCheck className="size-8" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="font-semibold text-primary bg-primary/10 border border-primary/20"
                    >
                      Kepala Sekolah
                    </Badge>
                  </div>

                  <h3
                    id="headmaster-name"
                    className="text-2xl font-bold text-foreground tracking-tight"
                  >
                    Ustadz H. Ahmad Fauzi, M.Pd.
                  </h3>
                  <p className="text-sm font-semibold text-primary mt-1">
                    Kepala Sekolah SD Al-Birru
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Magister Manajemen Pendidikan Islam (UIN SGD)
                  </p>

                  <blockquote
                    cite="Ustadz H. Ahmad Fauzi, M.Pd."
                    className="mt-6 p-5 rounded-2xl bg-muted/60 text-sm text-foreground leading-relaxed italic border-l-4 border-primary relative"
                  >
                    <Quote className="size-5 text-primary/30 absolute top-3 right-3" />
                    &ldquo;Pendidikan bukan sekadar transfer ilmu pengetahuan,
                    melainkan ikhtiar membangunkan fitrah tauhid, menjaga
                    kesucian kalbu, dan menyemai adab mulia sebelum ilmu formal
                    diajarkan.&rdquo;
                  </blockquote>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-medium">
                  <div className="flex items-center gap-1.5 text-primary font-semibold">
                    <ShieldCheck className="size-4" />
                    <span>Sekolah Ramah Anak</span>
                  </div>
                  <span className="font-semibold uppercase tracking-wider text-foreground">
                    STANDAR PENDIDIKAN TERPADU
                  </span>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right Column: Pedagogical Philosophy & Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal direction="up" delay={0.2}>
              <Badge
                variant="outline"
                className="gap-1.5 px-3.5 py-1 mb-5 text-xs font-semibold rounded-full border-primary/30 text-primary bg-primary/5"
              >
                <span>FILOSOFI PENDIDIKAN BERBASIS FITRAH</span>
              </Badge>

              <h2
                id="welcome-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight"
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
                    <Card
                      key={idx}
                      className="p-5 flex flex-col justify-start rounded-2xl border border-border hover:border-primary/40 transition-colors shadow-xs"
                    >
                      <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-primary mt-0.5">
                        {item.subtitle}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </Card>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  render={<Link href="/about" />}
                  nativeButton={false}
                  size="lg"
                  className="gap-2 font-semibold shadow-md shadow-primary/20"
                >
                  <span>Mengenal Lebih Dekat SD Al-Birru</span>
                  <ArrowRight data-icon="inline-end" />
                </Button>

                <Button
                  render={<Link href="/programs" />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="font-medium"
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
