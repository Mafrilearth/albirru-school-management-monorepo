"use client";

import { Sparkles } from "lucide-react";
import { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n/context";

/**
 * FaqSection — Admissions & Academic Readiness FAQ
 * Architecture: Uniform Functional Minimalism on an 8px Modular Scale
 * Standards:
 * - Mathematical Invariants: Section py-16 sm:py-20 lg:py-24, cards p-6 sm:p-8, 1px border.
 * - Single Responsibility: Clear academic and admission guidance without duplicating phone/email/map contacts.
 * - Interactive: Smooth accordion expand/collapse, hover state, and number badges.
 * - Full Localization: English, Indonesian, Arabic (with Eastern Arabic numbers).
 */
export function FaqSection() {
  const { t, locale } = useLanguage();

  const isArabic = locale === "ar";
  const numPrefix = isArabic ? "٠" : "0";

  const faqItems = useMemo(
    () => [
      {
        id: "faq-1",
        num: `${numPrefix}${isArabic ? "١" : "1"}`,
        question: t.faq.q1,
        answer: t.faq.a1,
      },
      {
        id: "faq-2",
        num: `${numPrefix}${isArabic ? "٢" : "2"}`,
        question: t.faq.q2,
        answer: t.faq.a2,
      },
      {
        id: "faq-3",
        num: `${numPrefix}${isArabic ? "٣" : "3"}`,
        question: t.faq.q3,
        answer: t.faq.a3,
      },
      {
        id: "faq-4",
        num: `${numPrefix}${isArabic ? "٤" : "4"}`,
        question: t.faq.q4,
        answer: t.faq.a4,
      },
    ],
    [t, isArabic, numPrefix],
  );

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
    [faqItems],
  );

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full relative py-16 sm:py-20 lg:py-24 bg-background border-b border-border overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Context & Overview (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border border-border bg-muted/60 text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
              <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{t.faq.badge}</span>
            </div>

            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
            >
              {t.faq.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.faq.subtitle}
            </p>

            {/* Pedagogy Note Card */}
            <div className="mt-8 p-6 rounded-lg border border-border bg-muted/30 w-full flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">
                <Sparkles className="size-4 shrink-0" />
                <span>Prinsip Seleksi Ramah Anak</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Observasi masuk difokuskan pada pemetaan tahap perkembangan
                fitrah, bukan penyeleksian diskriminatif. Setiap anak memiliki
                keunikan potensi yang siap dibina bersama.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion Items (7 Cols) */}
          <div className="lg:col-span-7 w-full flex flex-col gap-4">
            <Accordion
              defaultValue={["faq-1"]}
              className="w-full flex flex-col gap-4"
            >
              {faqItems.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-lg border border-border bg-card p-6 shadow-none hover:border-foreground/30 transition-all duration-200"
                >
                  <AccordionTrigger className="hover:no-underline py-0 text-start font-bold text-foreground text-base sm:text-lg tracking-tight flex items-start gap-3">
                    <span className="font-mono text-xs text-amber-500 font-bold px-2 py-1 rounded border border-amber-500/30 bg-amber-400/10 shrink-0 mt-0.5">
                      {faq.num}
                    </span>
                    <span className="flex-1 pr-2">{faq.question}</span>
                  </AccordionTrigger>

                  <AccordionContent className="pt-4 mt-3 border-t border-border/60 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
