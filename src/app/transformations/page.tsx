import type { Metadata } from "next";
import { TransformationsPage } from "@/components/story/TransformationsPage";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: `Transformations | ${BUSINESS_INFO.name}`,
  description: "A premium safe-space transformation gallery architecture for Namita's Femme Fitness.",
};

export default function Page() {
  return (
    <main id="main" className="flex-1 bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", name: "Transformations" }) }}
      />
      <TransformationsPage />
    </main>
  );
}
