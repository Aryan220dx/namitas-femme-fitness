import { ContactSection } from "@/components/sections/ContactSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { GalleryMasonry } from "@/components/sections/GalleryMasonry";
import { Hero } from "@/components/sections/Hero";
import { QuickContactBar } from "@/components/sections/QuickContactBar";
import { SadhviSailNote } from "@/components/sections/SadhviSailNote";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FounderHomeStory } from "@/components/story/FounderHomeStory";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <QuickContactBar />
      <WhyChooseUs />
      <FounderSection />
      <FounderHomeStory />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
      <SadhviSailNote />
      <GalleryMasonry />
      <ContactSection />
    </main>
  );
}
