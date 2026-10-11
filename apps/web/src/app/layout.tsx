import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import type React from "react";
import "@/app/globals.css";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { GlobalGrid } from "@/components/common/GlobalGrid";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sdalbirru.sch.id";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFDFB" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "SD Al-Birru Tahfidzul Qur'an Sukabumi | Partner in Islamic Education",
    template: "%s | SD Al-Birru Sukabumi",
  },
  description:
    "Official Website of SD Al-Birru Tahfidzul Qur'an Sukabumi. Nurturing a Qur'anic generation with noble character, minimum 3 mutqin juz Al-Qur'an memorization with sanad, Merdeka Curriculum critical reasoning, and global horizons.",
  applicationName: "SD Al-Birru Sukabumi",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SD Al-Birru",
  },
  authors: [{ name: "SD Al-Birru Sukabumi", url: siteUrl }],
  creator: "SD Al-Birru Sukabumi",
  publisher: "Yayasan Pendidikan Al-Birru",
  keywords: [
    "SD Al-Birru",
    "SDIT Al-Birru Sukabumi",
    "SD Tahfidz Sukabumi",
    "Integrated Islamic Primary School Sukabumi",
    "SD Al-Birru Admissions 2026",
    "Children Tahfidz Quran Sukabumi",
    "Merdeka Curriculum Primary School Sukabumi",
    "Child-Friendly Islamic School Sukabumi",
  ],
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "SD Al-Birru Tahfidzul Qur'an Sukabumi | Partner in Islamic Education",
    description:
      "Nurturing a Qur'anic generation of noble character, minimum 3 mutqin juz memorization with sanad, and applied science excellence.",
    url: siteUrl,
    siteName: "SD Al-Birru Sukabumi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SD Al-Birru Tahfidzul Qur'an Sukabumi | Partner in Islamic Education",
    description:
      "Integrated Islamic Primary School Tahfidzul Qur'an in Sukabumi. Partner in Islamic education toward future generations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const schoolStructuredData = {
  "@context": "https://schema.org",
  "@type": "School",
  "@id": `${siteUrl}/#school`,
  name: "SD Al-Birru Tahfidzul Qur'an Sukabumi",
  alternateName: ["SD Al-Birru", "SDIT Al-Birru Sukabumi"],
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "Integrated Islamic Primary School Tahfidzul Qur'an of excellence in Sukabumi. Noble character cultivation, 3 mutqin juz Al-Qur'an memorization with verified sanad, and applied science learning.",
  telephone: "+6281234567890",
  email: "info@sdalbirru.sch.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Selabintana Km. 5, Warnasari, Sukabumi",
    addressLocality: "Sukabumi",
    addressRegion: "Jawa Barat",
    postalCode: "43151",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.892,
    longitude: 106.945,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:15",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:15",
      closes: "11:30",
    },
  ],
  sameAs: [
    "https://facebook.com/sdalbirrusukabumi",
    "https://instagram.com/sdalbirru_sukabumi",
  ],
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function PublicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "en";

  return (
    <html
      lang={locale}
      className={cn(
        "h-full",
        "antialiased",
        robotoMono.variable,
        "font-sans",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schoolStructuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-amber-500 selection:text-slate-950 font-sans relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {/* Skip to Content for Keyboard Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-slate-950 focus:font-bold focus:rounded-none focus:shadow-lg focus:outline-none"
          >
            Skip to Main Content
          </a>

          <TooltipProvider>
            <ScrollProgressBar />
            <GlobalGrid />
            <AnnouncementBanner />
            <PublicNavbar />
            <main
              id="main-content"
              tabIndex={-1}
              className="flex-1 flex flex-col outline-none"
            >
              {children}
            </main>
            <PublicFooter />
            <FloatingWhatsApp />
            <ScrollToTop />

            {/* Vercel Observability Zero-Config */}
            <Analytics />
            <SpeedInsights />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
