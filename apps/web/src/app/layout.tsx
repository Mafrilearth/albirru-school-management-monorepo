import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "@/app/globals.css";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { GlobalGrid } from "@/components/common/GlobalGrid";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

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
    default: "SD Al-Birru Tahfidzul Qur'an Bandung | Sahabat Pendidikan Anak",
    template: "%s | SD Al-Birru Bandung",
  },
  description:
    "Website Resmi SD Al-Birru Tahfidzul Qur'an Bandung. Membina generasi Qur'ani berakhlak mulia, hafal Al-Qur'an minimal 3 juz bersanad, unggul dalam nalar kritis sains Kurikulum Merdeka, dan berwawasan global.",
  applicationName: "SD Al-Birru Bandung",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SD Al-Birru",
  },
  authors: [{ name: "SD Al-Birru Bandung", url: siteUrl }],
  creator: "SD Al-Birru Bandung",
  publisher: "Yayasan Al-Birru Bandung",
  keywords: [
    "SD Al-Birru",
    "SDIT Al-Birru Bandung",
    "SD Tahfidz Bandung",
    "Sekolah Dasar Islam Terpadu Bandung",
    "Pendaftaran SD Al-Birru 2026",
    "Tahfidz Quran Anak Bandung",
    "Kurikulum Merdeka SD Bandung",
    "Sekolah Ramah Anak Bandung",
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
    title: "SD Al-Birru Tahfidzul Qur'an Bandung | Sahabat Pendidikan Anak",
    description:
      "Membina generasi Qur'ani berakhlak mulia, tahfidz minimal 3 juz mutqin bersanad, dan unggul dalam nalar kritis sains Kurikulum Merdeka.",
    url: siteUrl,
    siteName: "SD Al-Birru Bandung",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SD Al-Birru Tahfidzul Qur'an Bandung | Sahabat Pendidikan Anak",
    description:
      "Sekolah Dasar Islam Terpadu Tahfidzul Qur'an di Bandung. Sahabat Pendidikan Anak menuju generasi Qur'ani masa depan.",
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
  name: "SD Al-Birru Tahfidzul Qur'an Bandung",
  alternateName: ["SD Al-Birru", "SDIT Al-Birru Bandung"],
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "Sekolah Dasar Islam Terpadu Tahfidzul Qur'an unggulan di Bandung. Pembinaan karakter akhlakul karimah, hafalan Al-Qur'an 3 juz mutqin bersanad, dan pembelajaran sains terapan Kurikulum Merdeka.",
  telephone: "+6281234567890",
  email: "info@sdalbirru.sch.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Merdeka No. 1, Sumurbandung, Kota Bandung",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    postalCode: "40111",
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

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function PublicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "id";

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${robotoMono.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolStructuredData) }}
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
            Menuju ke Konten Utama
          </a>

            <TooltipProvider>
              <ScrollProgressBar />
              <GlobalGrid />
              <AnnouncementBanner />
              <PublicNavbar />
              <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col outline-none">
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
