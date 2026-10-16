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
          "rounded-none font-mono uppercase tracking-wider text-xs font-bold bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors duration-150 shadow-none border border-transparent",
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
        className="rounded-none font-mono uppercase tracking-wider text-xs border-border hover:bg-muted shadow-none"
        aria-label="Salin tautan artikel"
      >
        {copied ? (
          <>
            <Check className="size-4 mr-1.5 text-primary" />
            <span className="text-primary font-bold">Tautan Tersalin!</span>
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
