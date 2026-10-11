"use client";

import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Loader2,
  MessageCircle,
  RotateCcw,
  Send,
  Tag,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { ConfettiCelebration } from "@/components/common/ConfettiCelebration";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  type ContactFormData,
  contactFormSchema,
} from "@/lib/validations/contact";

const QUICK_TOPICS = [
  "Grade 1 Admissions Registration (2026)",
  "3 Juz Tahfidz Program & Methodology",
  "Campus Tour & Observation Schedule",
  "Tuition Fees & Scholarships",
  "School Transfer Inquiries",
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
    setFormData((prev) => {
      const topicPrefix = `[Topic: ${topic}]\n`;
      let newMessage = prev.message;
      if (!newMessage.trim() || newMessage.startsWith("[Topic:")) {
        newMessage = `${topicPrefix}Assalamu'alaikum, I would like to inquire further about ${topic.toLowerCase()} for our child.`;
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

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
            data.message || "Failed to send message. Please try again.",
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
        "Connection interrupted. Please ensure your internet connection is active.",
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
      <Card className="p-8 sm:p-12 text-foreground animate-in fade-in-0 duration-300 relative overflow-hidden shadow-sm">
        <ConfettiCelebration />

        <div
          role="status"
          aria-live="polite"
          aria-labelledby="submit-success-heading"
          className="relative z-10"
        >
          <div className="flex items-center gap-4 text-emerald-600 mb-6">
            <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle2 aria-hidden="true" className="size-7" />
            </div>
            <div>
              <Badge
                variant="outline"
                className="text-emerald-600 border-emerald-200"
              >
                SENT
              </Badge>
              <h3
                id="submit-success-heading"
                className="text-xl sm:text-2xl font-bold text-foreground mt-1.5"
              >
                Alhamdulillah, Message Received!
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Your inquiry has been recorded in the SD Al-Birru administrative
            system. For immediate response and campus survey scheduling with our
            Admissions team, you may connect directly via our official WhatsApp:
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
            <Button
              render={
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              size="lg"
              className="flex-1 gap-2 font-medium"
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              <span>Open Admissions WhatsApp Chat</span>
              <ExternalLink aria-hidden="true" className="size-4 opacity-75" />
            </Button>

            <Button
              onClick={handleReset}
              variant="outline"
              size="lg"
              className="gap-2 font-medium"
            >
              <RotateCcw aria-hidden="true" className="size-4" />
              <span>Submit Another Message</span>
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 sm:p-12 shadow-sm relative overflow-hidden">
      <form
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby="contact-form-title"
      >
        <div className="mb-8">
          <Badge
            variant="outline"
            className="gap-2 px-3.5 py-1 mb-4 text-xs font-medium rounded-full"
          >
            <span>OFFICIAL INQUIRY</span>
          </Badge>
          <h3
            id="contact-form-title"
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight"
          >
            Prospective Student Consultation &amp; Inquiries
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Please fill out the information below. Our Admissions team will
            respond to your inquiry personally.
          </p>
        </div>

        {/* Quick Topic Selector Chips */}
        <fieldset className="mb-8 pb-8 border-b border-border p-0">
          <legend className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
            <Tag aria-hidden="true" className="size-3.5 text-primary" />
            <span>Select Inquiry Topic (Optional)</span>
          </legend>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Inquiry Topic Options"
          >
            {QUICK_TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic;
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleSelectTopic(topic)}
                  aria-pressed={isSelected}
                  className={cn(
                    "text-xs px-3 py-1.5 rounded-full border font-medium transition-colors cursor-pointer",
                    isSelected
                      ? "bg-primary border-primary text-primary-foreground"
                      : "bg-background border-input text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </fieldset>

        {generalError && (
          <div
            role="alert"
            className="mb-6 p-4 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center gap-2"
          >
            <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
            <span>{generalError}</span>
          </div>
        )}

        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-medium text-foreground mb-1.5"
            >
              Parent / Guardian Legal Name{" "}
              <span className="text-destructive" aria-hidden="true">
                *
              </span>
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
              placeholder="Example: Mr. Hendra Wijaya"
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                role="alert"
                className="mt-1.5 text-xs text-destructive font-medium"
              >
                {errors.fullName[0]}
              </p>
            )}
          </div>

          {/* Phone and Email Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-foreground mb-1.5"
              >
                Active WhatsApp Phone{" "}
                <span className="text-destructive" aria-hidden="true">
                  *
                </span>
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
                placeholder="Example: 081234567890"
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  role="alert"
                  className="mt-1.5 text-xs text-destructive font-medium"
                >
                  {errors.phone[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-foreground mb-1.5"
              >
                Email Address (Optional)
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="mt-1.5 text-xs text-destructive font-medium"
                >
                  {errors.email[0]}
                </p>
              )}
            </div>
          </div>

          {/* Student Candidate Name */}
          <div>
            <label
              htmlFor="studentCandidateName"
              className="block text-xs font-medium text-foreground mb-1.5"
            >
              Prospective Student Full Name (Optional)
            </label>
            <Input
              id="studentCandidateName"
              name="studentCandidateName"
              type="text"
              value={formData.studentCandidateName}
              onChange={handleChange}
              placeholder="Child's full name"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-foreground mb-1.5"
            >
              Inquiry / Consultation Message{" "}
              <span className="text-destructive" aria-hidden="true">
                *
              </span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="State your child's age, specific questions about admission, curriculum, or tahfidz programs..."
              className="min-h-[120px] resize-none leading-relaxed p-3.5"
            />
            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="mt-1.5 text-xs text-destructive font-medium"
              >
                {errors.message[0]}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full gap-2 font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                <span>Sending Inquiry...</span>
              </>
            ) : (
              <>
                <Send aria-hidden="true" className="size-4" />
                <span>Submit Inquiry Message</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}
