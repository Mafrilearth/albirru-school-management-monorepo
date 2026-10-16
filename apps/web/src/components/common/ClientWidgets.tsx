"use client";

import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(
  () =>
    import("@/components/common/FloatingWhatsApp").then(
      (mod) => mod.FloatingWhatsApp,
    ),
  { ssr: false },
);

const CookieConsent = dynamic(
  () =>
    import("@/components/common/CookieConsent").then(
      (mod) => mod.CookieConsent,
    ),
  { ssr: false },
);

const ScrollToTop = dynamic(
  () =>
    import("@/components/common/ScrollToTop").then((mod) => mod.ScrollToTop),
  { ssr: false },
);

export function ClientWidgets() {
  return (
    <>
      <FloatingWhatsApp />
      <CookieConsent />
      <ScrollToTop />
    </>
  );
}
