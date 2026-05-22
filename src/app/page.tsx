import { ContactSection } from "@/components/sections/ContactSection";
import { FounderExperience } from "@/components/founder/FounderExperience";
import { FounderSection } from "@/components/sections/FounderSection";
import { GalleryMasonry } from "@/components/sections/GalleryMasonry";
import { Hero } from "@/components/sections/Hero";
import { QuickContactBar } from "@/components/sections/QuickContactBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <QuickContactBar />
      <WhyChooseUs />
      <FounderSection />
      <FounderExperience />
      <ServicesSection />
      <TrustSection />
      <TestimonialsCarousel />
      <GalleryMasonry />
      <ContactSection />
    </main>
  );
}
