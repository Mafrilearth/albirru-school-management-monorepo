"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    { href: "/about", label: "Tentang Kami" },
    { href: "/programs", label: "Program & Kurikulum" },
    { href: "/news", label: "Berita" },
    { href: "/gallery", label: "Galeri" },
    { href: "/contact", label: "Kontak" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Brand Area */}
        <div className="flex items-center gap-6">
          <BrandLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors select-none",
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Global Controls & CTA (Desktop & Mobile) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex font-medium"
          >
            <span>Hubungi Kami</span>
          </Button>
          <Button
            render={<Link href="/admissions" />}
            nativeButton={false}
            variant="default"
            size="sm"
            className="hidden sm:inline-flex font-semibold shadow-sm shadow-primary/20"
          >
            <span>Daftar PPDB</span>
          </Button>

          {/* Mobile/Tablet Menu Trigger */}
          <Sheet>
            <SheetTrigger className="xl:hidden inline-flex items-center justify-center size-9 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
              <Menu className="size-4" />
              <span className="sr-only">Buka Menu Navigasi</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="pb-4 border-b border-border text-start">
                  <SheetTitle className="text-base font-bold text-foreground">
                    Menu Navigasi
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname === link.href
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Button
                  render={<Link href="/admissions" />}
                  nativeButton={false}
                  className="w-full font-semibold shadow-sm"
                >
                  Daftar PPDB Online
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
