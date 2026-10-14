"use client";

import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Berapa batas kuota santri per angkatan di SD Al-Birru?",
    answer:
      "SD Al-Birru membatasi secara ketat maksimal 40 santri per angkatan yang dibagi ke dalam 2 rombongan belajar (maksimal 20 santri per kelas). Kebijakan ini diberlakukan demi menjamin rasio pendampingan guru 1:15 dan kedekatan emosional personal bagi setiap anak.",
  },
  {
    question:
      "Apakah ada tes calistung (baca, tulis, hitung) saat observasi seleksi masuk?",
    answer:
      "Tidak ada tes calistung yang membebani anak. Seleksi masuk dilakukan melalui observasi kesiapan belajar ramah anak, pemetaan fitrah motorik/sosial-emosional, serta dialog keselarasan visi pengasuhan antara sekolah dan orang tua.",
  },
  {
    question:
      "Bagaimana jika ananda belum lancar mengaji sebelum masuk kelas 1?",
    answer:
      "Tidak diwajibkan sudah lancar membaca Al-Qur'an. Pembelajaran tahfidz di SD Al-Birru dimulai dari pembiasaan makharijul huruf dasar, talaqqi bertahap dengan asatidz bersanad, dan metode belajar yang menggembirakan sejak awal tahun ajaran.",
  },
  {
    question: "Apakah sains alam dan coding sudah diajarkan sejak kelas bawah?",
    answer:
      "Ya. Eksplorasi sains alam dilakukan langsung di kebun terbuka sekolah melalui pendekatan inkuiri tematik, sementara logika komputasi awal dikenalkan secara bertahap lewat Scratch Junior yang melatih pola pikir runut tanpa paparan layar berlebih.",
  },
  {
    question: "Bagaimana transparansi pembiayaan pendidikan di SD Al-Birru?",
    answer:
      "Pembiayaan disampaikan 100% transparan sejak awal pendaftaran tanpa biaya tersembunyi. Rincian mencakup dana pengembangan sarana, seragam, buku ajar, dan SPP bulanan yang sudah terintegrasi dengan seluruh kegiatan intrakurikuler.",
  },
];

export interface CTASectionProps {
  kicker?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  showFaq?: boolean;
}

export function CTASection({
  kicker = "PENERIMAAN SISWA BARU TA 2026/2027",
  title = "Siapkan Fondasi Adab & Masa Depan Buah Hati Anda.",
  description = "Kuota dibatasi ketat hanya 40 santri per angkatan (tersisa 14 kursi di Gelombang I). Dapatkan pendampingan personal dan konsultasikan kesiapan ananda bersama tim penerimaan Al-Birru.",
  primaryBtnText = "Daftar Siswa Baru Sekarang",
  primaryBtnHref = "/admissions",
  showFaq = true,
}: CTASectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yGlowParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="faq-and-cta-heading"
      className="py-20 sm:py-28 bg-background relative overflow-hidden"
    >
      {/* Background ambient halo */}
      <motion.div
        style={{ y: yGlowParallax }}
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-primary/10 via-emerald-400/5 to-transparent blur-3xl rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Interactive FAQ Accordion */}
        {showFaq && (
          <div className="max-w-3xl mx-auto mb-18 sm:mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary">
                <HelpCircle className="size-3.5" />
                <span>PERTANYAAN SERING DIAJUKAN (FAQ)</span>
              </div>
              <h2
                id="faq-and-cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight"
              >
                Informasi Penting Bagi Orang Tua
              </h2>
              <p className="mt-3.5 text-base text-muted-foreground">
                Jawaban transparan seputar kuota kelas, metode tahfidz, dan
                proses penerimaan santri baru di SD Al-Birru Sukabumi.
              </p>
            </div>

            {/* Interactive Accordion Items with Height Springs */}
            <div className="flex flex-col gap-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="border border-border/80 bg-card/90 rounded-2xl shadow-xs transition-colors overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-4.5 sm:p-5.5 text-start flex items-center justify-between gap-4 cursor-pointer hover:bg-muted/30 select-none active:scale-[0.99] transition-transform"
                    >
                      <span className="text-sm sm:text-base font-bold text-foreground">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "size-4 shrink-0 text-primary transition-transform duration-250 ease-out",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="accordionContent"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.22,
                            ease: [0.23, 1, 0.32, 1],
                          }}
                          className="overflow-hidden border-t border-border/60 bg-muted/20"
                        >
                          <p className="p-4.5 sm:p-5.5 pt-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Part 2: High-Converting Command Center CTA Card with Floating Halo */}
        <Card className="rounded-3xl p-8 sm:p-14 md:p-18 text-center flex flex-col items-center border border-border/80 bg-card/90 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full border border-primary/25 bg-primary/10 text-xs font-semibold text-primary">
              <Sparkles className="size-3.5" />
              <span>{kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
              {title}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Conversion Action Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Button
                render={<Link href={primaryBtnHref} />}
                nativeButton={false}
                size="lg"
                className="w-full sm:w-auto gap-2 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide rounded-full px-8 shadow-md shadow-primary/20 active:scale-[0.98] transition-all duration-150 ease-out"
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
                className="w-full sm:w-auto gap-2 font-medium border-border hover:bg-muted text-sm text-foreground rounded-full px-8 active:scale-[0.98] transition-all duration-150 ease-out"
              >
                <MessageCircle
                  data-icon="inline-start"
                  className="size-4 text-primary"
                />
                <span>Konsultasi Langsung via WhatsApp</span>
              </Button>
            </div>

            {/* Proof Assurance */}
            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 font-semibold text-foreground">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                <span>Observasi Belajar Ramah Anak</span>
              </div>
              <span className="text-border hidden sm:inline">•</span>
              <span>Bebas Tes Calistung Membebani</span>
              <span className="text-border hidden sm:inline">•</span>
              <span>Transparansi Biaya 100%</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
