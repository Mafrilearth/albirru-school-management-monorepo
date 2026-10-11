"use client";

import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    question:
      "What are the daily school hours and operational routine for students?",
    answer:
      "Student activities run Monday through Thursday from 07:15 AM to 03:00 PM. The day begins with congregational Dhuha prayer and morning tahfidz talaqqi halaqah, followed by Merdeka Curriculum thematic learning, congregational Dhuhr prayer, and shared lunch. On Fridays, school dismisses early at 11:30 AM in preparation for Friday congregational prayers.",
  },
  {
    id: "faq-catering",
    num: "02",
    question:
      "What are the standards for student school lunches and nutritional catering?",
    answer:
      "SD Al-Birru provides hygienic, wholesome hot lunches with daily balanced menus (complex carbohydrates, animal and plant proteins, fresh vegetables, and fruits) free from excessive synthetic additives. Mealtime also reinforces Islamic dining adab: seated etiquette, communal prayers, mindful eating, and zero food waste.",
  },
  {
    id: "faq-shuttle",
    num: "03",
    question:
      "Is there a school bus shuttle service available for students living further away?",
    answer:
      "Yes, official air-conditioned shuttle transport is available with integrated routes across Sukabumi City and Regency. Each shuttle is accompanied by dedicated school staff and connected with parents via real-time communications to ensure student safety, punctuality, and travel comfort.",
  },
  {
    id: "faq-matrikulasi",
    num: "04",
    question:
      "What if a prospective student is not yet fluent in hijaiyah letters or reading Iqra'?",
    answer:
      "Parents need not worry. We host an intensive tahsin matriculation program during the first 3 months of the odd semester. Teachers guide students through patient, personalized talaqqi from the fundamentals without judging baseline abilities, ensuring children feel encouraged, safe, and enthusiastic.",
  },
  {
    id: "faq-observation",
    num: "05",
    question:
      "What does the new student admissions observation process entail?",
    answer:
      "Observations are designed with a child-friendly assessment approach through guided educational play activities to observe fine/gross motor readiness, emotional independence, and social interactions. We do not enforce rigid reading/writing/arithmetic tests as pass-fail barriers, and include a partnership dialogue session with parents to align home and school values.",
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
    <section
      aria-labelledby="faq-section-heading"
      className="py-24 md:py-32 lg:py-36 bg-transparent border-b border-slate-200/80 dark:border-slate-700/80 relative"
    >
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
                <span>FAQ // OPERATIONAL INFORMATION</span>
              </div>

              <h2
                id="faq-section-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]"
              >
                Frequently Asked Questions &amp; Daily Student Life
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-xl">
                Comprehensive transparency regarding daily schedules, healthy
                catering standards, shuttle transit, and child-friendly
                admissions observation at SD Al-Birru.
              </p>

              <aside aria-labelledby="faq-support-title" className="mt-8">
                <motion.div
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="p-8 rounded-none bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 shadow-none hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <Sparkles className="size-5 text-amber-500 shrink-0" />
                    <h3
                      id="faq-support-title"
                      className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-50 font-mono"
                    >
                      Direct Support &amp; Consultation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                    Need deeper information regarding admissions, campus visits,
                    or student transfer consultations?
                  </p>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 h-12 rounded-none bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-900/30 active:scale-95 min-h-[48px]"
                    >
                      <MessageCircle className="size-4.5" />
                      <span>Direct WhatsApp Chat with Admissions Team</span>
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

              <Accordion
                defaultValue={["faq-hours"]}
                className="bg-[#FDFDFB] dark:bg-slate-950 w-full space-y-[1px]"
              >
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-0 bg-white dark:bg-slate-900"
                  >
                    <AccordionTrigger className="w-full flex items-start justify-between gap-4 p-6 sm:p-8 hover:no-underline group data-open:bg-white dark:data-open:bg-slate-900 bg-[#FDFDFB] dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <span className="flex items-start gap-4 sm:gap-5 text-left">
                        <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-none shrink-0 transition-colors border group-data-open:bg-slate-950 group-data-open:text-amber-400 group-data-open:border-slate-950 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700">
                          {faq.num}
                        </span>
                        <span className="leading-snug text-base sm:text-lg text-slate-950 dark:text-slate-50 pt-0.5">
                          {faq.question}
                        </span>
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
