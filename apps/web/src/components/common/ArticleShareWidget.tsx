"use client";

import React, { useState } from "react";
import { MessageCircle, Share2, Check, Copy } from "lucide-react";

interface ArticleShareWidgetProps {
  title: string;
  shareText: string;
}

export function ArticleShareWidget({ title, shareText }: ArticleShareWidgetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* WhatsApp Share */}
      <a
        href={`https://api.whatsapp.com/send?text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-none bg-emerald-700 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-2xs hover:scale-[1.02] active:scale-[0.98]"
        aria-label="Bagikan artikel ini ke WhatsApp"
      >
        <MessageCircle className="size-4" />
        <span>Bagikan ke WhatsApp</span>
      </a>

      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        type="button"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-none border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-2xs"
        aria-label="Salin tautan artikel"
      >
        {copied ? (
          <>
            <Check className="size-4 text-emerald-700" />
            <span className="text-emerald-700">Tautan Tersalin!</span>
          </>
        ) : (
          <>
            <Copy className="size-4 text-slate-400" />
            <span>Salin Tautan</span>
          </>
        )}
      </button>
    </div>
  );
}

