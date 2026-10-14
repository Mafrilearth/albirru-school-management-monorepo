import type { Metadata, Viewport } from "next";

import { Inter, Roboto_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type React from "react";
import "@/app/globals.css";
import { GlobalGrid } from "@/components/common/GlobalGrid";
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
    default: "Al-Birru Primary School Sukabumi | Partner in Islamic Education",
    template: "%s | Al-Birru Primary School",
  },
  description:
    "Official Website of Al-Birru Primary School Sukabumi. Nurturing a Qur'anic generation with noble character, minimum 3 mutqin juz Al-Qur'an memorization with sanad, Merdeka Curriculum critical reasoning, and global horizons.",
  applicationName: "Al-Birru Primary School",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Al-Birru Primary",
  },
  authors: [{ name: "Al-Birru Primary School", url: siteUrl }],
  creator: "Al-Birru Primary School",
  publisher: "Yayasan Amal Cahaya Indonesia",
  keywords: [
    "Al-Birru Primary School",
    "SD Al-Birru Sukabumi",
    "SDIT Al-Birru Sukabumi",
    "SD Tahfidz Sukabumi",
    "Integrated Islamic Primary School Sukabumi",
    "Al-Birru Primary Admissions 2026",
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
    title: "Al-Birru Primary School Sukabumi | Partner in Islamic Education",
    description:
      "Nurturing a Qur'anic generation of noble character, minimum 3 mutqin juz memorization with sanad, and applied science excellence.",
    url: siteUrl,
    siteName: "Al-Birru Primary School",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Birru Primary School Sukabumi | Partner in Islamic Education",
    description:
      "Integrated Islamic Primary School in Sukabumi. Partner in Islamic education toward future generations.",
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
  name: "Al-Birru Primary School Sukabumi",
  alternateName: [
    "Al-Birru Primary School",
    "SD Al-Birru Sukabumi",
    "SDIT Al-Birru Sukabumi",
  ],
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "Integrated Islamic Primary School of excellence in Sukabumi. Noble character cultivation, 3 mutqin juz Al-Qur'an memorization with verified sanad, and applied science learning.",
  telephone: "+6281234567890",
  email: "info@sdalbirru.sch.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kp. Cisande RT 006/002, Cijalingan, Cicantayan",
    addressLocality: "Sukabumi",
    addressRegion: "West Java",
    postalCode: "43155",
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
import { ClientWidgets } from "@/components/common/ClientWidgets";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { DirectionProvider } from "@/components/ui/direction";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

export default function PublicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "id";

  return (
    <html
      lang={locale}
      dir="ltr"
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
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          {/* Skip to Content for Keyboard Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:font-medium focus:rounded-md focus:shadow-md focus:outline-none"
          >
            Skip to Main Content
          </a>

          <LanguageProvider defaultLocale="id">
            <DirectionProvider direction="ltr">
              <TooltipProvider>
                <NuqsAdapter>
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
                  <ClientWidgets />

                  {/* Vercel Observability Zero-Config */}
                  <Analytics />
                  <SpeedInsights />
                </NuqsAdapter>
              </TooltipProvider>
            </DirectionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
