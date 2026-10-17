"use client";

import {
  Check,
  Clock,
  Copy,
  Download,
  FileCheck,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  UserCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";

/**
 * AdmissionsSection — 4-Stage Connected Process Pipeline
 * Architecture: Out-of-the-Box Process Runway (Zero Detached Card Boxes)
 * Standards:
 * - Continuous connected pipeline connecting stages 01 through 04.
 * - Unified consultation command bar with 48px tactile actions.
 * - Single source of truth for geographical and direct communications with live copy feedback.
 */
export function AdmissionsSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.addressValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(t.admissions.whatsappMessage);
    window.open(
      `https://wa.me/6281234567890?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const steps = [
    {
      code: "TAHAP 01",
      number: t.admissions.step1Number,
      title: t.admissions.step1Title,
      description: t.admissions.step1Description,
      icon: FileCheck,
    },
    {
      code: "TAHAP 02",
      number: t.admissions.step2Number,
      title: t.admissions.step2Title,
      description: t.admissions.step2Description,
      icon: UserCheck,
    },
    {
      code: "TAHAP 03",
      number: t.admissions.step3Number,
      title: t.admissions.step3Title,
      description: t.admissions.step3Description,
      icon: Users,
    },
    {
      code: "TAHAP 04",
      number: t.admissions.step4Number,
      title: t.admissions.step4Title,
      description: t.admissions.step4Description,
      icon: Clock,
    },
  ];

  return (
    <section
      id="admissions"
      aria-labelledby="admissions-title"
      className="w-full py-16 sm:py-20 lg:py-24 border-b border-border bg-background relative overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border border-border bg-muted/60 text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
            <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
            <span>{t.admissions.badge}</span>
          </div>

          <h2
            id="admissions-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
          >
            {t.admissions.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.admissions.subtitle}
          </p>
        </div>

        {/* Connected 4-Stage Pipeline Runway (Zero Detached Card Boxes) */}
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8 mb-10 relative overflow-hidden shadow-none">
          {/* Background Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-14 inset-x-12 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.code}
                  className="group flex flex-col justify-between text-start relative"
                >
                  <div>
                    {/* Top Node Indicator & Stage Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-12 rounded-lg bg-background border border-border group-hover:border-amber-500 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-all duration-200">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-amber-500 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {step.number}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-1">
                      {step.code}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight group-hover:text-amber-500 transition-colors">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Command Bar: Fee Schedule & WhatsApp Direct */}
        <div className="p-6 sm:p-8 rounded-lg border border-border bg-card flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 shadow-none">
          <div className="max-w-2xl text-start">
            <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
              {t.admissions.consultationTitle}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {t.admissions.consultationSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <Button
              type="button"
              onClick={handleWhatsAppClick}
              className="h-12 w-full sm:w-auto px-6 rounded-lg font-bold text-sm bg-amber-400 hover:bg-amber-500 text-slate-950 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-none"
            >
              <MessageCircle className="size-4 shrink-0" />
              <span>{t.admissions.whatsappAction}</span>
            </Button>

            <Button
              variant="outline"
              render={
                <a
                  href="/documents/biaya-pendidikan-albirru-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                />
              }
              nativeButton={false}
              className="h-12 w-full sm:w-auto px-6 rounded-lg font-bold text-sm border-border hover:bg-muted hover:border-foreground/30 active:scale-[0.98] text-foreground transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-none"
            >
              <Download className="size-4 text-muted-foreground shrink-0" />
              <span>{t.admissions.downloadBrochureAction}</span>
            </Button>
          </div>
        </div>

        {/* Operational & Geographical Details — 3-Column Line Divided */}
        <div className="rounded-lg border border-border bg-muted/20 divide-y md:divide-y-0 md:divide-x divide-border grid grid-cols-1 md:grid-cols-3">
          {/* Address with Live Clipboard Copy */}
          <div className="p-6 sm:p-8 flex flex-col justify-between gap-3 text-start">
            <div>
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <MapPin className="size-4 text-amber-500 shrink-0" />
                <span>{t.contact.addressLabel}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                {t.contact.addressValue}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="group/copy inline-flex items-center gap-1.5 text-xs font-mono font-medium text-muted-foreground hover:text-foreground active:scale-[0.98] transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-emerald-500 shrink-0" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {t.contact.addressCopied}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 shrink-0 group-hover/copy:text-amber-500 transition-colors" />
                    <span>{t.contact.copyAddress}</span>
                  </>
                )}
              </button>
              <span className="text-muted-foreground/30">•</span>
              <a
                href="https://maps.google.com/?q=SD+Al-Birru+Cicantayan+Sukabumi"
                target="_blank"
                rel="noopener noreferrer"
                className="group/map text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 inline-flex items-center gap-1 transition-colors duration-150"
              >
                <span>{t.contact.mapAction}</span>
                <span className="inline-block transition-transform duration-150 ease-out group-hover/map:translate-x-1 rtl:group-hover/map:-translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="p-6 sm:p-8 flex flex-col justify-between gap-3 text-start">
            <div>
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Clock className="size-4 text-amber-500 shrink-0" />
                <span>{t.contact.hoursLabel}</span>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.contact.hoursMonThu}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.contact.hoursFri}
                </p>
              </div>
            </div>

            <div className="text-[11px] font-mono text-muted-foreground">
              <span>Waktu Indonesia Barat (WIB)</span>
            </div>
          </div>

          {/* Direct Communications */}
          <div className="p-6 sm:p-8 flex flex-col justify-between gap-3 text-start">
            <div>
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Phone className="size-4 text-amber-500 shrink-0" />
                <span>{t.contact.directLabel}</span>
              </div>
              <p className="text-xs font-mono text-muted-foreground mt-2">
                {t.contact.telephonePrefix}: {t.contact.phoneValue}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                <Mail className="size-3.5 text-muted-foreground" />
                <a
                  href={`mailto:${t.contact.emailValue}`}
                  className="hover:underline hover:text-foreground transition-colors font-mono"
                >
                  {t.contact.emailValue}
                </a>
              </div>
            </div>

            <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              <span>● Layanan Aktif Hari Kerja</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
