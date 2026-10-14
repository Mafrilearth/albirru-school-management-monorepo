"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/dictionary";

const LANGUAGE_OPTIONS: {
  code: Locale;
  label: string;
  nativeLabel: string;
  flag: string;
}[] = [
  {
    code: "id",
    label: "Indonesia",
    nativeLabel: "Bahasa Indonesia",
    flag: "🇮🇩",
  },
  { code: "ar", label: "Arab", nativeLabel: "العربية", flag: "🇸🇦" },
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const current =
    LANGUAGE_OPTIONS.find((opt) => opt.code === locale) || LANGUAGE_OPTIONS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            aria-label="Pilih Bahasa / Change Language"
            className="h-9 px-2.5 gap-1.5 rounded-none border-border font-mono text-xs uppercase tracking-wider hover:bg-muted"
          />
        }
      >
        <Globe className="size-3.5 text-muted-foreground" />
        <span className="font-semibold">{current.code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={6}
        className="w-44 rounded-none border border-border bg-popover p-1 shadow-none"
      >
        {LANGUAGE_OPTIONS.map((opt) => {
          const isSelected = opt.code === locale;
          return (
            <DropdownMenuItem
              key={opt.code}
              onClick={() => setLocale(opt.code)}
              className="flex items-center justify-between px-3 py-2 text-xs rounded-none cursor-pointer hover:bg-muted data-[highlighted]:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>{opt.flag}</span>
                <span
                  className={
                    isSelected ? "font-bold text-primary" : "text-foreground"
                  }
                >
                  {opt.nativeLabel}
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase">
                {opt.code}
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
