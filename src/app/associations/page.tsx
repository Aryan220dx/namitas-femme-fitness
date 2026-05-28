import type { Metadata } from "next";
import { AssociationsPage } from "@/components/story/AssociationsPage";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: `Associations | ${BUSINESS_INFO.name}`,
  description: "Global associations, exercise science credibility, and education partnerships behind Namita's Femme Fitness.",
};

export default function Page() {
  return (
    <main id="main" className="flex-1 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "AboutPage", name: "Associations" }) }}
      />
      <AssociationsPage />
    </main>
  );
}
