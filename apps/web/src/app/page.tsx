import { AccreditationStrip } from "@/components/sections/AccreditationStrip";
import { BentoValuesSection } from "@/components/sections/BentoValuesSection";
import { CTASection } from "@/components/sections/CTASection";
import { DayAtAlbirruSection } from "@/components/sections/DayAtAlbirruSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LatestNewsPreview } from "@/components/sections/LatestNewsPreview";

export default function PublicLandingPage() {
  return (
    <>
      <HeroSection />
      <AccreditationStrip />
      <BentoValuesSection />
      <DayAtAlbirruSection />
      <LatestNewsPreview />
      <CTASection />
    </>
  );
}
