"use client";

import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
      className="py-20 md:py-28 lg:py-36 bg-background border-b border-border relative"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ScrollReveal direction="up" delay={0.1}>
              <Badge
                variant="outline"
                className="gap-2 px-3.5 py-1 mb-5 text-xs font-medium rounded-full"
              >
                <span>OPERATIONAL INFORMATION</span>
              </Badge>

              <h2
                id="faq-section-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
              >
                Frequently Asked Questions &amp; Daily Student Life
              </h2>

              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                Clear answers regarding daily schedules, nutrition, school bus
                routes, and academic matriculation at SD Al-Birru.
              </p>

              {/* Consultation Card */}
              <Card className="mt-8 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                  <Sparkles className="size-4" />
                  <span>Have Specific Questions?</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  Our admissions consultation team is ready to answer specific
                  inquiries about your child&apos;s development and school
                  readiness.
                </p>

                <div className="flex flex-col gap-3">
                  <Button
                    render={
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    nativeButton={false}
                    className="w-full gap-2 font-medium"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Admissions Team</span>
                  </Button>

                  <Button
                    render={<a href="tel:+6281234567890" />}
                    nativeButton={false}
                    variant="outline"
                    className="w-full gap-2 font-medium"
                  >
                    <Phone className="size-4 text-muted-foreground" />
                    <span>Hotline: (0266) 123-456</span>
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right Column: Shadcn Accordion */}
          <div className="lg:col-span-7">
            <Accordion
              defaultValue={["faq-hours"]}
              className="w-full space-y-3"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border rounded-lg px-6 bg-card shadow-xs overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-semibold text-foreground text-base sm:text-lg">
                    <span>{faq.question}</span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 pt-1 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
