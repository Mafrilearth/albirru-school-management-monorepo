"use client";

import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n/context";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "system";

  const options = [
    {
      id: "light",
      label: t.theme.light,
      icon: Sun,
    },
    {
      id: "dark",
      label: t.theme.dark,
      icon: Moon,
    },
    {
      id: "system",
      label: t.theme.system,
      icon: Monitor,
    },
  ] as const;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            aria-label={t.theme.toggle}
            className="h-full px-3.5 rounded-none border-0 hover:bg-muted/40 shadow-none bg-transparent"
          />
        }
      >
        <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">{t.theme.toggle}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={6}
        className="min-w-[9.5rem] w-auto rounded-none border border-border bg-popover p-1 shadow-none z-50"
      >
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = currentTheme === opt.id;
          return (
            <DropdownMenuItem
              key={opt.id}
              onClick={() => setTheme(opt.id)}
              className="flex items-center justify-between px-3 py-2 text-xs rounded-none cursor-pointer hover:bg-muted data-[highlighted]:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2">
                <Icon className="size-3.5 text-muted-foreground" />
                <span
                  className={
                    isSelected ? "font-bold text-primary" : "text-foreground"
                  }
                >
                  {opt.label}
                </span>
              </div>
              {isSelected && <Check className="size-3 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
