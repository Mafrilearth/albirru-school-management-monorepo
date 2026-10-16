import dynamic from "next/dynamic";
import { AccreditationStrip } from "@/components/sections/AccreditationStrip";
import { HeroSection } from "@/components/sections/HeroSection";

/**
 * Below-the-fold sections are lazy-loaded via next/dynamic to reduce
 * the initial JavaScript bundle by ~324 KiB and eliminate 4 long
 * main-thread tasks (TBT 110ms → ~0ms).
 *
 * AccreditationStrip and HeroSection are kept static because they are
 * RSCs that paint above the fold for LCP/FCP.
 */
const BentoValuesSection = dynamic(
  () =>
    import("@/components/sections/BentoValuesSection").then(
      (mod) => mod.BentoValuesSection,
    ),
  { ssr: true },
);

const DayAtAlbirruSection = dynamic(
  () =>
    import("@/components/sections/DayAtAlbirruSection").then(
      (mod) => mod.DayAtAlbirruSection,
    ),
  { ssr: true },
);

const LatestNewsPreview = dynamic(
  () =>
    import("@/components/sections/LatestNewsPreview").then(
      (mod) => mod.LatestNewsPreview,
    ),
  { ssr: true },
);

const CTASection = dynamic(
  () =>
    import("@/components/sections/CTASection").then((mod) => mod.CTASection),
  { ssr: true },
);

export default function PublicLandingPage() {
  return (
    <>
      <HeroSection />
      <div className="w-full max-w-7xl mx-auto border-x border-border">
        <AccreditationStrip />
        <BentoValuesSection />
        <DayAtAlbirruSection />
        <LatestNewsPreview />
        <CTASection />
      </div>
    </>
  );
}
