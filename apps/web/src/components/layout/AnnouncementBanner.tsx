import { Megaphone } from "lucide-react";
import Link from "next/link";

/**
 * AnnouncementBanner — now rendered as a React Server Component.
 * No client-side state or event handlers are needed, so removing
 * "use client" reduces the initial JS bundle and prevents any
 * layout shift from late hydration.
 */
export function AnnouncementBanner() {
  return (
    <div className="w-full bg-muted/60 text-foreground border-b border-border relative z-50 transition-colors">
      <Link
        href="/admissions"
        className="block py-2 hover:bg-muted/80 focus:outline-none focus:ring-1 focus:ring-ring group"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center md:text-start">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs font-medium leading-tight text-muted-foreground group-hover:text-foreground transition-colors">
            <Megaphone className="size-3.5 shrink-0 text-primary" />
            <span>
              New Student Admissions Academic Year 2026/2027 Are Now Open
            </span>
          </div>
          <div className="inline-flex items-center justify-center text-xs font-medium bg-primary text-primary-foreground group-hover:bg-primary/90 px-2.5 py-0.5 shrink-0 whitespace-nowrap rounded-full shadow-xs transition-colors">
            <span>Apply Now</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
