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

const FEEDBACK_CATEGORIES = [
  { id: "fitur", label: "💡 Ide Fitur Baru" },
  { id: "akademik", label: "📖 Program & Tahfidz" },
  { id: "desain", label: "🎨 Tampilan & Desain" },
  { id: "kendala", label: "🛠️ Laporkan Kendala" },
  { id: "lainnya", label: "💬 Saran Umum" },
];

export function FloatingFeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("fitur");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      setErrorMessage("Silakan tulis masukan minimal 5 karakter.");
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
          data.message || "Gagal mengirim masukan. Silakan coba lagi.",
        );
      }
    } catch {
      setErrorMessage("Koneksi gagal. Silakan periksa jaringan Anda.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <aside
        aria-label="Kotak Saran dan Usul Fitur Instan"
        className="fixed bottom-6 left-4 sm:left-6 z-40 flex items-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Button
            onClick={() => {
              resetForm();
              setIsOpen(true);
            }}
            variant="outline"
            className="rounded-full shadow-lg border-primary/30 bg-card/95 backdrop-blur-md hover:bg-card px-4 py-2.5 h-auto text-xs font-semibold gap-2 text-foreground group"
          >
            <span className="flex size-2 rounded-full bg-primary animate-ping" />
            <Lightbulb className="size-4 text-primary transition-transform group-hover:rotate-12" />
            <span>Usul Fitur &amp; Saran</span>
          </Button>
        </motion.div>
      </aside>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md p-6 rounded-3xl border border-primary/20 bg-card/95 backdrop-blur-md shadow-2xl">
          <DialogHeader className="text-start">
            <div className="flex items-center gap-2 mb-1">
              <Badge
                variant="secondary"
                className="gap-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20"
              >
                <Sparkles className="size-3" />
                <span>Kotak Suara Pengunjung</span>
              </Badge>
            </div>
            <DialogTitle className="text-xl font-bold text-foreground">
              Usul Fitur &amp; Masukan
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground leading-relaxed">
              Punya ide fitur baru, usulan program, atau saran tampilan untuk SD
              Al-Birru? Tuliskan di sini—tanpa perlu login/tiket.
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            /* Success State */
            <div className="py-6 flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                <CheckCircle2 className="size-8" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Jazakumullahu Khairan!
                </h3>
                <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto leading-relaxed">
                  Masukan Anda telah berhasil dicatat. Ide dari Anda sangat
                  berharga untuk kemajuan civitas SD Al-Birru.
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
                    className="w-full gap-2 font-semibold shadow-md shadow-primary/20"
                  >
                    <MessageCircle className="size-4" />
                    <span>Teruskan Langsung ke WhatsApp Panitia</span>
                  </Button>
                )}

                <Button
                  onClick={resetForm}
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 text-xs"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Kirim Masukan Lainnya</span>
                </Button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              {/* Category Pills */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Pilih Kategori Masukan:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {FEEDBACK_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border transition-all ${
                        category === cat.id
                          ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                          : "bg-muted/50 border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title (Optional) */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-foreground">
                  Judul Ide / Fitur (Opsional):
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Misal: Fitur Buku Penghubung Online"
                  className="text-xs rounded-xl"
                  maxLength={100}
                />
              </div>

              {/* Content Field */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-foreground">
                  Isi Saran / Deskripsi Fitur: *
                </label>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Ceritakan detail fitur yang Anda harapkan atau perbaikan yang menurut Anda perlu dilakukan..."
                  rows={4}
                  required
                  className="text-xs rounded-xl resize-none"
                  maxLength={1000}
                />
              </div>

              {/* Contact Info (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-muted-foreground">
                    Nama Anda (Opsional):
                  </label>
                  <Input
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Wali Santri / Tamu"
                    className="text-xs rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-muted-foreground">
                    No. WhatsApp (Opsional):
                  </label>
                  <Input
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="0812xxxx"
                    className="text-xs rounded-xl"
                  />
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-destructive font-medium">
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
                  className="text-xs"
                >
                  Batal
                </Button>

                <Button
                  type="submit"
                  size="sm"
                  disabled={isSubmitting || content.trim().length < 5}
                  className="gap-2 font-semibold shadow-sm shadow-primary/20 text-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-3.5 animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="size-3.5" />
                      <span>Kirim Masukan Instan</span>
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
