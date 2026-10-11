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
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/news", label: "News" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Brand Area */}
        <div className="flex items-center gap-6">
          <BrandLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-md transition-colors select-none",
                  isActive
                    ? "bg-muted text-foreground font-semibold"
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
            className="hidden md:inline-flex"
          >
            <span>Contact</span>
          </Button>
          <Button
            render={<Link href="/admissions" />}
            nativeButton={false}
            variant="default"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <span>Enroll Now</span>
          </Button>

          {/* Mobile/Tablet Menu Trigger */}
          <Sheet>
            <SheetTrigger className="xl:hidden inline-flex items-center justify-center size-9 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
              <Menu className="size-4" />
              <span className="sr-only">Open Menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="pb-4 border-b border-border text-start">
                  <SheetTitle className="text-base font-semibold text-foreground">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <Button
                  render={<Link href="/admissions" />}
                  nativeButton={false}
                  className="w-full"
                >
                  Admissions
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
