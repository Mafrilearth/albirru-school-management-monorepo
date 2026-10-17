import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type React from "react";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClientWidgets } from "@/components/common/ClientWidgets";
import { GlobalGrid } from "@/components/common/GlobalGrid";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { DirectionProvider } from "@/components/ui/direction";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routing } from "@/i18n/routing";
import { LanguageProvider } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

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
    locale: "id_ID",
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "id" | "ar" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  // Load message catalog for the active request locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      data-scroll-behavior="smooth"
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
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange
          >
            {/* Skip to Content for Keyboard Accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:font-semibold focus:rounded-none focus:shadow-none focus:border focus:border-border focus:outline-none"
            >
              Skip to Main Content
            </a>

            <LanguageProvider defaultLocale={locale as "id" | "ar" | "en"}>
              <DirectionProvider direction={locale === "ar" ? "rtl" : "ltr"}>
                <TooltipProvider>
                  <NuqsAdapter>
                    <ScrollProgressBar />
                    <GlobalGrid />
                    <div className="w-full bg-background flex flex-col min-h-screen relative z-10 shadow-none">
                      <PublicNavbar />
                      <main
                        id="main-content"
                        tabIndex={-1}
                        className="flex-1 flex flex-col outline-none w-full"
                      >
                        {children}
                      </main>
                      <PublicFooter />
                    </div>
                    <ClientWidgets />

                    {/* Vercel Observability Zero-Config */}
                    <Analytics />
                    <SpeedInsights />
                  </NuqsAdapter>
                </TooltipProvider>
              </DirectionProvider>
            </LanguageProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
