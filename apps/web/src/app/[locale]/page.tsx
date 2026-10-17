import { AccreditationStrip } from "@/components/sections/AccreditationStrip";
import { AdmissionsSection } from "@/components/sections/AdmissionsSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { DayAtAlbirruSection } from "@/components/sections/DayAtAlbirruSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

/**
 * Public Landing Page (Single-Page Layout)
 * Architecture: Rhythmic Cadence on an 8px Modular Scale (Zero Bento Fatigue)
 * Standards:
 * - Varied Layout Cadence: Split Hero -> Statutory Data Bar -> Asymmetric Media Showcase ->
 *   Interactive Timeline Tabs -> Architectural Photography -> Editorial Quotes ->
 *   Hairline Line Accordion -> 4-Step Registration & Unified Contact.
 * - Mathematical Invariants: Section py-16 sm:py-20 lg:py-24, cards p-6 sm:p-8, flat topology, 1px border.
 * - Single Responsibility: Location & direct contact belong strictly to Admissions/Contact section.
 * - Multi-language: Full ID, EN, AR support with formal, non-abbreviated content and Eastern Arabic numbers.
 */
export default function PublicLandingPage() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <AccreditationStrip />
      <CurriculumSection />
      <DayAtAlbirruSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <FaqSection />
      <AdmissionsSection />
    </div>
  );
}
