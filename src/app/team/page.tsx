import type { Metadata } from "next";
import { OurTeamPage } from "@/components/story/OurTeamPage";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: `Team | ${BUSINESS_INFO.name}`,
  description: "The trainer team behind Namita's Femme Fitness.",
};

export default function Page() {
  return (
    <main id="main" className="flex-1 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Team", name: "Namita's Femme Fitness Team" }) }}
      />
      <OurTeamPage />
    </main>
  );
}
