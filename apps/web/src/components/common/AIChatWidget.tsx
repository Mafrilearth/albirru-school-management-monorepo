"use client";

import {
  Bot,
  CornerDownLeft,
  Loader2,
  RefreshCw,
  Sparkles,
  X,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export function AIChatWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialGreeting: ChatMessage = {
    id: "welcome-msg",
    role: "assistant",
    content:
      "Ahlan wa sahlan! Saya Asisten AI SD Al-Birru Sukabumi. Silakan tanyakan hal seputar PPDB 2026/2027, Program Tahfidz 3 Juz Mutqin Bersanad, Kurikulum Fitrah & Sains, atau fasilitas sekolah.",
    timestamp: "Baru saja",
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);

  useEffect(() => {
    if (isOpen && messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages.length]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Gagal mengambil respon");

      const data = await response.json();
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content:
          data.content ||
          "Mohon maaf, terjadi kendala saat memproses jawaban. Silakan hubungi panitia via WhatsApp.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          role: "assistant",
          content:
            "Jaringan sibuk. Anda juga dapat langsung berkonsultasi via WhatsApp panitia kami di 0812-3456-7890.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSend(question);
  };

  const resetChat = () => {
    setMessages([initialGreeting]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <aside
        aria-label="Asisten AI PPDB SD Al-Birru"
        className="fixed bottom-22 lg:bottom-6 right-20 sm:right-24 z-40"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={t.chat.askPPDB}
          className="h-12 px-4 gap-2 rounded-none border border-primary/40 bg-card hover:bg-muted text-foreground shadow-none font-semibold text-xs tracking-wide"
        >
          <span className="flex size-2 rounded-none bg-primary animate-ping" />
          <Bot className="size-4 text-primary" />
          <span className="hidden sm:inline font-mono uppercase text-[11px]">
            {t.chat.askPPDB}
          </span>
        </Button>
      </aside>

      {/* Chat Window */}
      {isOpen && (
        <section
          aria-label="Jendela Tanya Jawab Asisten AI"
          className="fixed bottom-20 right-4 sm:right-6 z-50 flex flex-col w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-background border border-border rounded-none shadow-none text-foreground font-sans animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <header className="flex items-center justify-between border-b border-border p-3.5 bg-muted/40">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center bg-primary text-primary-foreground font-bold">
                <Sparkles className="size-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-xs tracking-tight">
                    {t.chat.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="h-4 px-1 text-[9px] font-mono rounded-none border-primary/30 text-primary bg-primary/5"
                  >
                    AI PPDB
                  </Badge>
                </div>
                <p className="text-[10px] text-muted-foreground line-clamp-1">
                  {t.chat.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={resetChat}
                title="Mulai percakapan baru"
                className="size-7 rounded-none hover:bg-muted"
              >
                <RefreshCw className="size-3 text-muted-foreground" />
                <span className="sr-only">Reset Chat</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                title={t.actions.close}
                className="size-7 rounded-none hover:bg-muted"
              >
                <X className="size-4" />
                <span className="sr-only">{t.actions.close}</span>
              </Button>
            </div>
          </header>

          {/* Quick Suggestions Chips */}
          <div className="border-b border-border bg-background p-2 flex gap-1.5 overflow-x-auto text-nowrap scrollbar-none">
            <button
              onClick={() => handleQuickQuestion(t.chat.quickFees)}
              className="text-[10px] font-mono border border-border px-2 py-1 hover:bg-muted transition-colors cursor-pointer"
            >
              💰 {t.chat.quickFees}
            </button>
            <button
              onClick={() => handleQuickQuestion(t.chat.quickRequirements)}
              className="text-[10px] font-mono border border-border px-2 py-1 hover:bg-muted transition-colors cursor-pointer"
            >
              📋 {t.chat.quickRequirements}
            </button>
            <button
              onClick={() => handleQuickQuestion(t.chat.quickTahfidz)}
              className="text-[10px] font-mono border border-border px-2 py-1 hover:bg-muted transition-colors cursor-pointer"
            >
              📖 {t.chat.quickTahfidz}
            </button>
            <button
              onClick={() => handleQuickQuestion(t.chat.quickLocation)}
              className="text-[10px] font-mono border border-border px-2 py-1 hover:bg-muted transition-colors cursor-pointer"
            >
              📍 {t.chat.quickLocation}
            </button>
          </div>

          {/* Message History List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-background">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 text-xs leading-relaxed border ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted/50 text-foreground border-border"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
                <span className="mt-1 text-[9px] font-mono text-muted-foreground px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 p-3 bg-muted/30 border border-border text-xs text-muted-foreground w-fit">
                <Loader2 className="size-3.5 animate-spin text-primary" />
                <span className="font-mono text-[11px]">{t.chat.thinking}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <footer className="border-t border-border p-2.5 bg-background flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.chat.placeholder}
              disabled={isLoading}
              className="flex-1 bg-muted/40 border border-border px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:opacity-50"
            />
            <Button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              size="sm"
              className="h-8 px-3 rounded-none font-mono text-xs gap-1.5"
            >
              <span>{t.chat.send}</span>
              <CornerDownLeft className="size-3" />
            </Button>
          </footer>
        </section>
      )}
    </>
  );
}
