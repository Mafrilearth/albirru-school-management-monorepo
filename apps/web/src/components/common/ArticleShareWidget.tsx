"use client";

import { Check, Copy, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ArticleShareWidgetProps {
  title: string;
  shareText: string;
}

export function ArticleShareWidget({
  title: _title,
  shareText,
}: ArticleShareWidgetProps) {
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
    <div className="flex flex-wrap items-center gap-2.5">
      {/* WhatsApp Share */}
      <a
        href={`https://api.whatsapp.com/send?text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ size: "sm" }),
          "bg-emerald-600 hover:bg-emerald-700 text-white",
        )}
        aria-label="Bagikan artikel ini ke WhatsApp"
      >
        <MessageCircle className="size-4 mr-1.5" />
        <span>Bagikan ke WhatsApp</span>
      </a>

      {/* Copy Link Button */}
      <Button
        onClick={handleCopyLink}
        type="button"
        variant="outline"
        size="sm"
        aria-label="Salin tautan artikel"
      >
        {copied ? (
          <>
            <Check className="size-4 mr-1.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400">
              Tautan Tersalin!
            </span>
          </>
        ) : (
          <>
            <Copy className="size-4 mr-1.5 text-muted-foreground" />
            <span>Salin Tautan</span>
          </>
        )}
      </Button>
    </div>
  );
}
