"use client";

import {
  CheckCircle2,
  Lightbulb,
  Loader2,
  MessageCircle,
  RotateCcw,
  Send,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

declare global {
  interface Window {
    Tally?: {
      openPopup: (
        formId: string,
        options?: {
          layout?: "modal" | "default";
          width?: number;
          autoClose?: number;
          emoji?: { text: string; animation: string };
        },
      ) => void;
      closePopup: (formId: string) => void;
    };
  }
}

const FEEDBACK_CATEGORIES = [
  { id: "feature", label: "💡 Feature Proposal" },
  { id: "academic", label: "📖 Academic Program" },
  { id: "design", label: "🎨 UI & Design" },
  { id: "issue", label: "🛠️ Report Issue" },
  { id: "general", label: "💬 General Feedback" },
];

export function FloatingFeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("feature");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const tallyFormId = process.env.NEXT_PUBLIC_TALLY_FORM_ID || "Zj4RDe";

  const handleOpenFeedback = () => {
    // If a Tally form ID is configured and Tally SDK is loaded, open modern Tally popup
    if (tallyFormId && typeof window !== "undefined" && window.Tally) {
      window.Tally.openPopup(tallyFormId, {
        layout: "modal",
        width: 600,
        autoClose: 3000,
        emoji: { text: "💡", animation: "wave" },
      });
      return;
    }
    // Lazy-load Tally script on user interaction
    if (
      typeof window !== "undefined" &&
      !document.getElementById("tally-embed-js")
    ) {
      const script = document.createElement("script");
      script.id = "tally-embed-js";
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
    // Otherwise open instant native dialog
    resetForm();
    setIsOpen(true);
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setContactName("");
    setContactInfo("");
    setSubmitSuccess(false);
    setErrorMessage(null);
    setWhatsappUrl("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim().length < 5) {
      setErrorMessage("Please enter at least 5 characters of feedback.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const selectedCategoryObj = FEEDBACK_CATEGORIES.find(
        (c) => c.id === category,
      );
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: selectedCategoryObj?.label || category,
          title: title.trim() || undefined,
          content: content.trim(),
          contactName: contactName.trim() || undefined,
          contactInfo: contactInfo.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        if (data.whatsappUrl) {
          setWhatsappUrl(data.whatsappUrl);
        }
      } else {
        setErrorMessage(
          data.message || "Failed to submit feedback. Please try again.",
        );
      }
    } catch {
      setErrorMessage("Connection error. Please verify your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <aside
        aria-label="Instant Feature Proposal and Feedback Box"
        className="fixed bottom-6 left-4 sm:left-6 z-40 flex items-center"
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative"
        >
          <Button
            onClick={handleOpenFeedback}
            data-tally-open={tallyFormId || undefined}
            data-tally-layout="modal"
            data-tally-width="600"
            data-tally-emoji-text="💡"
            data-tally-emoji-animation="wave"
            data-tally-auto-close="2000"
            variant="outline"
            className="rounded-none shadow-none border-primary/40 bg-card/95 hover:bg-card px-4 py-2.5 h-auto text-xs font-mono uppercase tracking-wider font-semibold gap-2 text-foreground group"
          >
            <span className="flex size-2 rounded-none bg-primary animate-ping" />
            <Lightbulb className="size-4 text-primary transition-transform group-hover:rotate-12" />
            <span>Propose Feature</span>
          </Button>
        </motion.div>
      </aside>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md p-6 rounded-none border border-border bg-card/98 shadow-none">
          <DialogHeader className="text-start">
            <div className="flex items-center gap-2 mb-1">
              <Badge
                variant="secondary"
                className="gap-1 text-[11px] font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-none"
              >
                <Sparkles className="size-3" />
                <span>Visitor Feedback</span>
              </Badge>
            </div>
            <DialogTitle className="text-xl font-bold tracking-tight text-foreground">
              Propose Feature &amp; Feedback
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground leading-relaxed font-mono">
              // Direct feedback mechanism for parents and guests. No login
              required.
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            /* Success State */
            <div className="py-6 flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-none bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-none">
                <CheckCircle2 className="size-8" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">Thank You</h3>
                <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto leading-relaxed">
                  Your feedback has been recorded successfully. Your suggestions
                  help us improve Al-Birru Primary School.
                </p>
              </div>

              <div className="flex flex-col gap-2 w-full mt-2">
                {whatsappUrl && (
                  <Button
                    render={
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    nativeButton={false}
                    className="w-full gap-2 font-mono uppercase tracking-wider text-xs rounded-none shadow-none"
                  >
                    <MessageCircle className="size-4" />
                    <span>Forward to Admissions WhatsApp</span>
                  </Button>
                )}

                <Button
                  onClick={resetForm}
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 text-xs font-mono uppercase tracking-wider rounded-none shadow-none"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Submit Another Response</span>
                </Button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              {/* Category Pills */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                  // Select Feedback Category:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {FEEDBACK_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-none border transition-all cursor-pointer ${
                        category === cat.id
                          ? "bg-primary text-primary-foreground border-primary font-semibold shadow-none"
                          : "bg-muted/40 border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title (Optional) */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                  Proposal Title (Optional):
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Example: Student digital diary"
                  className="text-xs rounded-none border-border"
                  maxLength={100}
                />
              </div>

              {/* Content Field */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                  Feedback Description: *
                </label>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Describe the feature or enhancement you would like to see..."
                  rows={4}
                  required
                  className="text-xs rounded-none border-border resize-none"
                  maxLength={1000}
                />
              </div>

              {/* Contact Info (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-mono text-muted-foreground">
                    Your Name (Optional):
                  </label>
                  <Input
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Guardian or Guest"
                    className="text-xs rounded-none border-border"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-mono text-muted-foreground">
                    WhatsApp Number (Optional):
                  </label>
                  <Input
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="081234567890"
                    className="text-xs rounded-none border-border"
                  />
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-destructive font-mono font-medium">
                  {errorMessage}
                </p>
              )}

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-border">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-mono uppercase tracking-wider rounded-none"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  size="sm"
                  disabled={isSubmitting || content.trim().length < 5}
                  className="gap-2 font-mono uppercase tracking-wider font-semibold shadow-none text-xs rounded-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-3.5 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Send className="size-3.5" />
                      <span>Submit Feedback</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
