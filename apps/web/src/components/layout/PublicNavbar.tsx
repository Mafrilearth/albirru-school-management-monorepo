"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { BrandLogo } from "@/components/common/BrandLogo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function PublicNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Profil" },
    { href: "/programs", label: "Program" },
    { href: "/news", label: "Berita" },
    { href: "/gallery", label: "Galeri" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-none">
      <div className="flex h-16 w-full items-center justify-between">
        
        {/* Brand Area */}
        <div className="flex h-full items-center border-e border-slate-200 dark:border-slate-800">
          <BrandLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex h-full flex-1 items-center overflow-x-auto divide-x divide-slate-200 dark:divide-slate-800">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            const isLast = index === navLinks.length - 1;
            return (
              <Link key={link.href} href={link.href} className={cn(
                "min-w-max flex items-center justify-center px-6 xl:px-8 h-full text-xs font-bold font-mono uppercase tracking-widest select-none rounded-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-amber-500 outline-none focus:bg-slate-50 dark:focus:bg-slate-900 whitespace-nowrap",
                isActive ? "bg-slate-50 dark:bg-slate-900 text-amber-500" : "text-slate-600 dark:text-slate-400",
                isLast && "border-e border-slate-200 dark:border-slate-800"
              )}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Global Controls & CTA (Desktop & Mobile) */}
        <div className="flex items-center h-full">
          <div className="hidden sm:flex items-center h-full divide-x rtl:divide-x-reverse divide-slate-200 dark:divide-slate-800 border-s border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-center h-full px-4">
              <ThemeToggle />
            </div>
            <Button render={<Link href="/contact" />} nativeButton={false} variant="default" className="hidden xl:flex items-center justify-center px-8 h-full border-0 rounded-none bg-slate-900 hover:bg-slate-800 text-slate-50 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 font-bold font-mono uppercase text-xs tracking-widest whitespace-nowrap outline-none shadow-none">
              <span>Kontak</span>
            </Button>

            {/* Mobile/Tablet Menu Trigger */}
            <Sheet>
              <SheetTrigger className="xl:hidden flex items-center justify-center h-full px-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <Menu className="size-5 text-slate-600 dark:text-slate-400" />
                <span className="sr-only">Buka Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 bg-white dark:bg-slate-950 border-s border-slate-200 dark:border-slate-800 rounded-none flex flex-col">
                <SheetHeader className="p-6 border-b border-slate-200 dark:border-slate-800 text-start">
                  <SheetTitle className="font-mono text-base font-bold uppercase text-slate-900 dark:text-slate-100 tracking-widest text-start">
                    Menu Utama
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto flex flex-col py-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="px-6 py-4 text-sm font-bold font-mono uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-amber-500 text-slate-600 dark:text-slate-400">
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact" className="px-6 py-4 text-sm font-bold font-mono uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-amber-500 text-slate-600 dark:text-slate-400">
                    Kontak
                  </Link>
                </div>
                <div className="p-6 border-t border-slate-200 dark:border-slate-800 mt-auto">
                  <Button render={<Link href="/admissions" />} nativeButton={false} className="w-full border-0 rounded-none bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold font-mono uppercase tracking-widest shadow-none">
                    Pendaftaran Siswa Baru
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
