import { AcademicProgramsSection } from "@/components/sections/AcademicProgramsSection";
import { AccreditationStrip } from "@/components/sections/AccreditationStrip";
import { BentoValuesSection } from "@/components/sections/BentoValuesSection";
import { CTASection } from "@/components/sections/CTASection";
import { TrustPartnerMarquee } from "@/components/sections/common/TrustPartnerMarquee";
import { HeroSection } from "@/components/sections/HeroSection";
import { LatestNewsPreview } from "@/components/sections/LatestNewsPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";

export default function PublicLandingPage() {
  return (
    <>
      <HeroSection />
      <AccreditationStrip />
      <TrustPartnerMarquee />
      <WelcomeSection />
      <AcademicProgramsSection />
      <BentoValuesSection />
      <TestimonialsSection />
      <LatestNewsPreview />
      <CTASection />
    </>
  );
}
