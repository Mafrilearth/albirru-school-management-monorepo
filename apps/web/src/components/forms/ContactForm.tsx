"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
  ExternalLink,
  RotateCcw,
  Tag,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ConfettiCelebration } from "@/components/common/ConfettiCelebration";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";
import { contactFormSchema, ContactFormData } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const QUICK_TOPICS = [
  "Registration Kelas 1 (Admissions 2026)",
  "Program 3 Juz Tahfidz & Metode",
  "Jadwal Survei & Observasi Kampus",
  "Biaya Pendidikan & Beasiswa",
  "Pindahan / Mutasi School",
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    studentCandidateName: "",
    message: "",
  });

  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    // Append or replace topic in message if empty or starts with previous topic
    setFormData((prev) => {
      const topicPrefix = `[Topik: ${topic}]\n`;
      let newMessage = prev.message;
      if (!newMessage.trim() || newMessage.startsWith("[Topik:")) {
        newMessage = `${topicPrefix}Assalamu'alaikum, saya ingin bertanya lebih lanjut mengenai ${topic.toLowerCase()} untuk ananda kami.`;
      }
      return {
        ...prev,
        message: newMessage,
      };
    });

    if (errors.message) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.message;
        return next;
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error upon typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    // Client-side Zod validation
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setGeneralError(
            data.message || "Gagal mengirimkan pesan. Silakan coba kembali."
          );
        }
        setIsSubmitting(false);
        return;
      }

      setWhatsappUrl(data.whatsappUrl);
      setSubmitSuccess(true);
      setIsSubmitting(false);
    } catch {
      setGeneralError(
        "Koneksi terputus. Pastikan jaringan internet Anda aktif."
      );
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      studentCandidateName: "",
      message: "",
    });
    setSelectedTopic("");
    setErrors({});
    setSubmitSuccess(false);
    setWhatsappUrl("");
    setGeneralError(null);
  };

  if (submitSuccess) {
    return (
      <SpotlightCard
        spotlightColor="rgba(16, 185, 129, 0.12)"
        borderColor="rgba(16, 185, 129, 0.4)"
        className="rounded-none bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-lg text-slate-900 dark:text-slate-50 animate-in fade-in-0 duration-300 relative overflow-hidden"
      >
        <BorderBeam size={220} duration={10} colorFrom="#10b981" colorTo="#f59e0b" />
        <ConfettiCelebration />

        <div
          role="status"
          aria-live="polite"
          aria-labelledby="submit-success-heading"
          className="relative z-10"
        >
          <div className="flex items-center gap-4 text-emerald-700 mb-6">
            <div className="flex size-14 items-center justify-center rounded-none bg-emerald-50 border border-emerald-200 shadow-2xs">
              <CheckCircle2 aria-hidden="true" className="size-7" />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-none border border-emerald-200/60">
                STATUS // TERKIRIM
              </span>
              <h3 id="submit-success-heading" className="text-xl sm:text-2xl font-black text-slate-950 dark:text-slate-50 mt-1.5">
                Alhamdulillah, Pesan Diterima!
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Pertanyaan Anda telah kami catat dalam sistem administrasi SD Al-Birru.
            Untuk respon instan dan penjadwalan survei lokasi langsung bersama panitia Admissions,
            Anda dapat langsung terhubung ke WhatsApp resmi kami:
          </p>

          {/* WhatsApp Direct Action Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 h-13 rounded-none bg-emerald-700 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-900/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              <span>Buka Chat WhatsApp Committee</span>
              <ExternalLink aria-hidden="true" className="size-4 opacity-75" />
            </a>

            <button
              onClick={handleReset}
              type="button"
              className="flex items-center justify-center gap-2 h-13 px-6 rounded-none border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 dark:bg-slate-800 font-bold text-xs transition-colors cursor-pointer"
            >
              <RotateCcw aria-hidden="true" className="size-4" />
              <span>Submit Pesan Lain</span>
            </button>
          </div>
        </div>
      </SpotlightCard>
    );
  }

  return (
    <SpotlightCard
      spotlightColor="rgba(245, 158, 11, 0.08)"
      className="rounded-none bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-2xs border border-slate-200 dark:border-slate-700 relative overflow-hidden"
    >
      <form onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-title">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] font-mono font-bold uppercase tracking-wider mb-4">
            <span className="size-1.5 rounded-none bg-amber-500 animate-pulse" />
            <span>FORMULIR // KONSULTASI RESMI</span>
          </div>
          <h3
            id="contact-form-title"
            className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight"
          >
            Konsultasi &amp; Pertanyaan Calon Students
          </h3>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed font-normal">
            Lengkapi data di bawah ini. Tim panitia Admissions akan merespon pertanyaan Anda secara personal.
          </p>
        </div>

        {/* Quick Topic Selector Chips with Fieldset & Legend */}
        <fieldset className="mb-8 pb-8 border-b border-slate-100 dark:border-slate-800 border-none p-0">
          <legend className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Tag aria-hidden="true" className="size-3.5 text-amber-600" />
            <span>Pilih Topik Konsultasi (Opsional)</span>
          </legend>
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Pilihan Topik Konsultasi">
            {QUICK_TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic;
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleSelectTopic(topic)}
                  aria-pressed={isSelected}
                  className={cn(
                    "text-xs px-3.5 py-2 rounded-none border font-medium transition-all cursor-pointer",
                    isSelected
                      ? "bg-slate-900 border-slate-900 text-white shadow-2xs"
                      : "bg-[#FDFDFB] dark:bg-slate-950 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 dark:bg-slate-800"
                  )}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </fieldset>

        {generalError && (
          <div role="alert" className="mb-6 p-4 rounded-none bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
            <span>{generalError}</span>
          </div>
        )}

        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
            >
              Nama Lengkap Orang Tua / Wali <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Contoh: Bapak Hendra Wijaya"
              className="h-12 rounded-none border-slate-200 dark:border-slate-700 text-sm focus-visible:ring-amber-500"
            />
            {errors.fullName && (
              <p id="fullName-error" role="alert" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.fullName[0]}
              </p>
            )}
          </div>

          {/* WhatsApp & Email (2 Cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
              >
                No. WhatsApp Aktif <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                value={formData.phone}
                onChange={handleChange}
                placeholder="0812-3456-7890"
                className="h-12 rounded-none border-slate-200 dark:border-slate-700 text-sm focus-visible:ring-amber-500 font-mono"
              />
              {errors.phone && (
                <p id="phone-error" role="alert" className="mt-1.5 text-xs text-rose-600 font-medium">
                  {errors.phone[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
              >
                Email (Opsional)
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                className="h-12 rounded-none border-slate-200 dark:border-slate-700 text-sm focus-visible:ring-amber-500"
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1.5 text-xs text-rose-600 font-medium">
                  {errors.email[0]}
                </p>
              )}
            </div>
          </div>

          {/* Candidate Student Name */}
          <div>
            <label
              htmlFor="studentCandidateName"
              className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
            >
              Nama Calon Students Ananda (Opsional)
            </label>
            <Input
              id="studentCandidateName"
              name="studentCandidateName"
              type="text"
              aria-invalid={!!errors.studentCandidateName}
              aria-describedby={errors.studentCandidateName ? "studentCandidateName-error" : undefined}
              value={formData.studentCandidateName}
              onChange={handleChange}
              placeholder="Contoh: Muhammad Rayhan"
              className="h-12 rounded-none border-slate-200 dark:border-slate-700 text-sm focus-visible:ring-amber-500"
            />
            {errors.studentCandidateName && (
              <p id="studentCandidateName-error" role="alert" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.studentCandidateName[0]}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="message"
                className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >
                Pesan / Pertanyaan <span className="text-rose-500" aria-hidden="true">*</span>
              </label>
              <span className="text-[10px] font-mono text-slate-400">
                {formData.message.length} KARAKTER
              </span>
            </div>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tuliskan pertanyaan Anda mengenai kuota, biaya, atau kurikulum..."
              className="rounded-none border-slate-200 dark:border-slate-700 text-sm focus-visible:ring-amber-500 resize-none leading-relaxed p-4"
            />
            {errors.message && (
              <p id="message-error" role="alert" className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.message[0]}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
 className="w-full flex items-center justify-center gap-2 h-13 rounded-none bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 aria-hidden="true" className="size-4.5 animate-spin" />
                <span>Mengirim Pertanyaan...</span>
              </>
            ) : (
              <>
                <Send aria-hidden="true" className="size-4.5" />
                <span>Submit Pesan Konsultasi</span>
              </>
            )}
          </button>
        </div>
      </form>
    </SpotlightCard>
  );
}

