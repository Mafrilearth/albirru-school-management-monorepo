"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Ensure we don't cause hydration mismatch by rendering default states safely
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="hidden sm:flex w-16 h-full" />; // Placeholder to avoid layout shift
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "hidden sm:flex items-center justify-center w-16 h-full transition-colors select-none rounded-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:outline-none",
          "bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 focus:bg-slate-50 dark:focus:bg-slate-900/50 text-slate-600 dark:text-slate-400"
        )}
        aria-label="Toggle theme"
      >
        <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-[140px] rounded-none font-mono text-xs font-bold uppercase tracking-wider">
        <DropdownMenuItem 
          onClick={() => setTheme("light")} 
          className={cn(
            "rounded-none cursor-pointer py-3 justify-between", 
            theme === 'light' ? 'bg-amber-500 text-slate-950 focus:bg-amber-500 focus:text-slate-950' : ''
          )}
        >
          <span>Light</span>
          <Sun className="size-3.5" />
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => setTheme("dark")} 
          className={cn(
            "rounded-none cursor-pointer py-3 justify-between", 
            theme === 'dark' ? 'bg-amber-500 text-slate-950 focus:bg-amber-500 focus:text-slate-950' : ''
          )}
        >
          <span>Dark</span>
          <Moon className="size-3.5" />
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => setTheme("system")} 
          className={cn(
            "rounded-none cursor-pointer py-3 justify-between", 
            theme === 'system' ? 'bg-amber-500 text-slate-950 focus:bg-amber-500 focus:text-slate-950' : ''
          )}
        >
          <span>System</span>
          <Monitor className="size-3.5" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
