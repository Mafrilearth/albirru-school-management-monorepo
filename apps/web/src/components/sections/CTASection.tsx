"use client";

import { ArrowRight, ChevronDown, Mail, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Bagaimana sistem pembelajaran dan pendampingan di SD Al-Birru?",
    answer:
      "SD Al-Birru menerapkan pendampingan terfokus dengan kapasitas kelas yang kondusif demi menjamin kedekatan batin guru dan santri serta efektivitas bimbingan personal bagi setiap anak.",
  },
  {
    question:
      "Apakah ada tes calistung (baca, tulis, hitung) saat seleksi masuk?",
    answer:
      "Tidak ada tes calistung yang membebani anak. Seleksi masuk dilakukan melalui observasi kesiapan belajar ramah anak, pemetaan motorik serta sosial-emosional, dan dialog keselarasan visi pengasuhan bersama orang tua.",
  },
  {
    question:
      "Bagaimana jika ananda belum lancar mengaji sebelum masuk kelas 1?",
    answer:
      "Tidak diwajibkan sudah lancar membaca Al-Qur'an. Pembelajaran tahfidz di SD Al-Birru dimulai dari pembiasaan makharijul huruf dasar, bimbingan talaqqi bertahap dengan asatidz, dan metode yang menggembirakan sejak awal tahun ajaran.",
  },
  {
    question:
      "Apakah sains alam dan pengenalan logika sudah diajarkan sejak dini?",
    answer:
      "Ya. Eksplorasi sains dilakukan langsung di kebun sekolah melalui pendekatan inkuiri tematik, sementara logika komputasi awal dikenalkan secara bertahap lewat media visual yang melatih pola pikir terstruktur tanpa paparan layar berlebih.",
  },
  {
    question: "Bagaimana transparansi pembiayaan pendidikan di SD Al-Birru?",
    answer:
      "Pembiayaan disampaikan transparan sejak awal pendaftaran tanpa biaya tersembunyi. Rincian mencakup dana pengembangan sarana, seragam, buku ajar, dan biaya bulanan yang telah mencakup seluruh kegiatan intrakurikuler.",
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
  kicker = "Penerimaan Siswa Baru TA 2026/2027",
  title = "Siapkan Fondasi Adab & Masa Depan Buah Hati Anda",
  description = "Konsultasikan kesiapan belajar ananda dan dapatkan informasi lengkap mengenai kurikulum terpadu serta tata cara pendaftaran di SD Al-Birru Sukabumi.",
  primaryBtnText = "Daftar Siswa Baru",
  primaryBtnHref = "/admissions",
  showFaq = true,
}: CTASectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      aria-labelledby="faq-and-cta-heading"
      className="w-full bg-background border-b border-border relative overflow-hidden"
    >
      {/* Part 1: Interactive FAQ Accordion — Flush in Grid */}
      {showFaq && (
        <div className="w-full">
          {/* FAQ Header Cell */}
          <div className="w-full p-6 sm:p-10 lg:p-12 border-b border-border text-center bg-background">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
              Tanya Jawab
            </span>
            <h2
              id="faq-and-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
              style={{ textWrap: "balance" }}
            >
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Informasi seputar kurikulum, bimbingan tahfidzul Qur&apos;an, dan
              prosedur penerimaan santri baru di SD Al-Birru.
            </p>
          </div>

          {/* Accordion List — Flush in Grid with 1px Shared Dividing Lines */}
          <div className="w-full border-b border-border bg-card divide-y divide-border">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.question} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 cursor-pointer hover:bg-muted/30 select-none transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out",
                        isOpen && "rotate-180 text-foreground",
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
                          duration: 0.18,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden border-t border-border bg-muted/10"
                      >
                        <p className="p-5 sm:p-6 pt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
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

      {/* Part 2: Final Command Center CTA — Flush in Grid */}
      <div className="w-full p-8 sm:p-14 lg:p-16 text-center flex flex-col items-center bg-card">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-none border border-border bg-muted/40 font-mono text-[11px] font-bold uppercase tracking-widest text-foreground">
            <span>{kicker}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
            style={{ textWrap: "balance" }}
          >
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Action Buttons — Single Primary Action & Clean Secondary Route */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto font-mono">
            <Button
              render={<Link href={primaryBtnHref} />}
              nativeButton={false}
              size="lg"
              className="w-full sm:w-auto gap-2 font-mono text-xs uppercase tracking-wider font-bold bg-primary text-primary-foreground hover:bg-foreground hover:text-background rounded-none border border-transparent px-8 py-3.5 shadow-none active:scale-[0.98] transition-all"
            >
              <span>{primaryBtnText}</span>
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>

            <Button
              render={<Link href="/services" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 font-mono text-xs uppercase tracking-wider font-bold border-border hover:border-foreground bg-transparent text-foreground hover:bg-muted rounded-none px-8 py-3.5 shadow-none active:scale-[0.98] transition-all"
            >
              <Mail
                data-icon="inline-start"
                className="size-4 text-muted-foreground"
              />
              <span>Hubungi Kami</span>
            </Button>
          </div>

          {/* Assurances */}
          <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <div className="flex items-center gap-1.5 font-bold text-foreground">
              <ShieldCheck className="size-3.5 text-emerald-600 shrink-0" />
              <span>Observasi Ramah Anak</span>
            </div>
            <span className="text-border hidden sm:inline">•</span>
            <span>Bebas Tes Calistung</span>
            <span className="text-border hidden sm:inline">•</span>
            <span>Transparansi Biaya 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
