import type { Metadata } from "next";
import { CommunityServicePage } from "@/components/story/CommunityServicePage";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: `Community Service | ${BUSINESS_INFO.name}`,
  description: "The humanitarian and grassroots wellness outreach chapter of Namita's Femme Fitness.",
};

export default function Page() {
  return (
    <main id="main" className="flex-1 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", name: "Community Service" }) }}
      />
      <CommunityServicePage />
    </main>
  );
}
