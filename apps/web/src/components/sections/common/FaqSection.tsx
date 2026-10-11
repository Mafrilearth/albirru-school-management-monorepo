"use client";

import React from "react";
import { ChevronDown, MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "faq-hours",
    num: "01",
    question: "Bagaimana jam operasional belajar dan ritme harian students di school?",
    answer:
      "Kegiatan students berlangsung hari Senin hingga Kamis pukul 07.15 – 15.00 WIB. Hari dimulai dengan Sholat Dhuha bersama dan halaqah tahfidz talaqqi pagi, dilanjutkan pembelajaran tematik Curriculum Merdeka, Sholat Dzuhur berjamaah, serta makan siang bersama. Khusus hari Jumat, kepulangan pada pukul 11.30 WIB untuk persiapan ibadah Sholat Jumat.",
  },
  {
    id: "faq-catering",
    num: "02",
    question: "Bagaimana standar penyediaan makan siang dan asupan gizi students?",
    answer:
      "SD Al-Birru menyediakan katering makan siang sehat higienis dengan menu seimbang setiap hari (karbohidrat kompleks, protein hewani/nabati, sayuran segar, dan buah) tanpa penyedap sintetis berlebih. Waktu makan juga menjadi sarana pembiasaan adab islami: duduk tertib, membaca doa bersama, dan menjaga adab tanpa menyisakan makanan.",
  },
  {
    id: "faq-shuttle",
    num: "03",
    question: "Apakah tersedia armada layanan antar-jemput bagi students yang berdomisili jauh?",
    answer:
      "Tersedia layanan antar-jemput armada resmi berpendingin udara dengan rute terpadu di wilayah Kota dan Kabupaten Sukabumi. Setiap armada didampingi oleh staf school serta dilengkapi koordinasi komunikasi aktif bersama orang tua untuk memastikan keselamatan, ketepatan waktu, dan kenyamanan students selama perjalanan.",
  },
  {
    id: "faq-matrikulasi",
    num: "04",
    question: "Bagaimana jika calon students baru belum lancar mengenal huruf hijaiyah atau membaca Iqra'?",
    answer:
      "Bapak/Ibu tidak perlu berkecil hati. Kami menyelenggarakan program matrikulasi tahsin intensif pada 3 bulan pertama semester ganjil. Asatidz membimbing dengan metode talaqqi personal penuh kesabaran dari tingkat dasar tanpa menghakimi kemampuan awal anak, sehingga ananda merasa dihargai dan antusias belajar.",
  },
  {
    id: "faq-observation",
    num: "05",
    question: "Bagaimana tahapan observasi masuk penerimaan students baru (Admissions)?",
    answer:
      "Observasi dirancang dengan pendekatan ramah anak (child-friendly assessment) melalui kegiatan bermain edukatif terarah untuk memetakan kesiapan motorik, kemandirian emosional, dan interaksi sosial anak. Kami tidak memberlakukan tes calistung kaku sebagai penentu kelulusan, dan menyertakan sesi dialog kemitraan bersama orang tua demi penyelarasan visi di rumah dan school.",
  },
];
export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-section-heading" className="py-24 md:py-32 lg:py-36 bg-transparent border-b border-slate-200/80 dark:border-slate-700/80 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs text-[11px] font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase mb-6">
                <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
                <span>FAQ // INFORMASI OPERASIONAL</span>
              </div>

              <h2 id="faq-section-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]">
                Pertanyaan Logistik &amp; Keseharian Students
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-xl">
                Transparansi menyeluruh seputar jam belajar harian, standar katering gizi sehat,
                armada antar-jemput, dan tata cara observasi masuk ramah anak di SD Al-Birru.
              </p>

              <aside aria-labelledby="faq-support-title" className="mt-8">
                <motion.div
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="p-8 rounded-none bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-none hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <Sparkles className="size-5 text-amber-500 shrink-0" />
                    <h3 id="faq-support-title" className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-50 font-mono">
                      Bantuan &amp; Konsultasi Langsung
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                    Memerlukan informasi lebih mendalam terkait registration, survei lokasi, atau
                    konsultasi pemindahan students?
                  </p>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 h-12 rounded-none bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-900/30 active:scale-95 min-h-[48px]"
                    >
                      <MessageCircle className="size-4.5" />
                      <span>Chat Langsung ke Tim Humas (WA)</span>
                    </a>

                    <a
                      href="tel:+6281234567890"
                      className="flex items-center justify-center gap-2 px-6 h-12 rounded-none bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition-colors active:scale-95 min-h-[48px]"
                    >
                      <Phone className="size-4 text-slate-500" />
                      <span>Hotline: (0266) 123-456</span>
                    </a>
                  </div>
                </motion.div>
              </aside>
            </ScrollReveal>
          </div>

          {/* Right Column: Shadcn Accordion List */}
          <div className="lg:col-span-7">
            <div className="bg-slate-200 dark:bg-slate-800 p-[1px] relative">
              {/* Crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />
              <div className="absolute -top-1.5 -right-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />
              <div className="absolute -bottom-1.5 -left-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />
              <div className="absolute -bottom-1.5 -right-1.5 size-3 border border-amber-500 z-10 bg-white dark:bg-slate-950" />

              <Accordion defaultValue={["faq-hours"]} className="bg-[#FDFDFB] dark:bg-slate-950 w-full space-y-[1px]">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-0 bg-white dark:bg-slate-900">
                    <AccordionTrigger className="w-full flex items-start justify-between gap-4 p-6 sm:p-8 hover:no-underline group data-open:bg-white dark:data-open:bg-slate-900 bg-[#FDFDFB] dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <span className="flex items-start gap-4 sm:gap-5 text-left">
                        <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-none shrink-0 transition-colors border group-data-open:bg-slate-950 group-data-open:text-amber-400 group-data-open:border-slate-950 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700">
                          {faq.num}
                        </span>
                        <span className="leading-snug text-base sm:text-lg text-slate-950 dark:text-slate-50 pt-0.5">{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    
                    <AccordionContent className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                      <div className="px-6 sm:px-8 py-6 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                        <div className="sm:pl-14">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

