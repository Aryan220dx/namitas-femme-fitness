import type { Metadata } from "next";
import { OurFounderPage } from "@/components/story/OurFounderPage";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: `Our Founder | ${BUSINESS_INFO.name}`,
  description: "The cinematic founder story of Dr. Namita Sarang and the women-only wellness vision behind Namita's Femme Fitness.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Namita Sarang",
    jobTitle: "Founder and Wellness Architect",
    affiliation: BUSINESS_INFO.name,
  };

  return (
    <main id="main" className="flex-1 bg-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OurFounderPage />
    </main>
  );
}
