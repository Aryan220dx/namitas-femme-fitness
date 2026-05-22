import type { Metadata } from "next";
import { FounderExperience } from "@/components/founder/FounderExperience";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: `Meet Dr. Namita Sarang | ${BUSINESS_INFO.name}`,
  description:
    "Meet Dr. Namita Sarang, Ph.D. in Physical Education, internationally recognized fitness and wellness expert, athlete, author, and founder of Namita's Femme Fitness.",
  openGraph: {
    title: `Meet Dr. Namita Sarang | ${BUSINESS_INFO.name}`,
    description: "A cinematic founder profile for a women-only wellness authority.",
    type: "profile",
  },
};

export default function FounderPage() {
  return (
    <main id="main" className="flex-1 bg-black">
      <FounderExperience />
    </main>
  );
}
