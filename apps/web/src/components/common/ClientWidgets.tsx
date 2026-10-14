"use client";

import dynamic from "next/dynamic";

const AIChatWidget = dynamic(
  () =>
    import("@/components/common/AIChatWidget").then((mod) => mod.AIChatWidget),
  { ssr: false },
);

const FloatingWhatsApp = dynamic(
  () =>
    import("@/components/common/FloatingWhatsApp").then(
      (mod) => mod.FloatingWhatsApp,
    ),
  { ssr: false },
);

const FloatingFeedbackWidget = dynamic(
  () =>
    import("@/components/common/FloatingFeedbackWidget").then(
      (mod) => mod.FloatingFeedbackWidget,
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
      <AIChatWidget />
      <FloatingWhatsApp />
      <FloatingFeedbackWidget />
      <CookieConsent />
      <ScrollToTop />
    </>
  );
}
