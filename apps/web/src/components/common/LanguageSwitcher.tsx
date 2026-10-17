"use client";

import { Check, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/dictionary";
import { cn } from "@/lib/utils";

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

interface LanguageSwitcherProps {
  triggerClassName?: string;
}

export function LanguageSwitcher({
  triggerClassName,
}: LanguageSwitcherProps = {}) {
  const { locale, setLocale } = useLanguage();
  const router = useRouter();
  const pathname = usePathname() || "/";
  const current =
    LANGUAGE_OPTIONS.find((opt) => opt.code === locale) || LANGUAGE_OPTIONS[0];

  const handleSelectLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    // Strip existing locale prefix from pathname if present
    const cleanPath = pathname.replace(/^\/(?:id|ar|en)(?=\/|$)/, "") || "/";
    const targetUrl = `/${newLocale}${cleanPath === "/" ? "" : cleanPath}`;
    router.push(targetUrl);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            aria-label="Pilih Bahasa / Change Language"
            className={cn(
              "h-full px-3 gap-1.5 rounded-none border-0 font-mono text-xs uppercase tracking-wider hover:bg-muted/40 shadow-none bg-transparent",
              triggerClassName,
            )}
          />
        }
      >
        <Globe className="size-4 text-muted-foreground" />
        <span className="font-semibold">{current.code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={6}
        className="min-w-[11rem] w-auto rounded-none border border-border bg-popover p-1 shadow-none"
      >
        {LANGUAGE_OPTIONS.map((opt) => {
          const isSelected = opt.code === locale;
          return (
            <DropdownMenuItem
              key={opt.code}
              onClick={() => handleSelectLanguage(opt.code)}
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
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                  {opt.code}
                </span>
                {isSelected && <Check className="size-3 text-primary" />}
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
