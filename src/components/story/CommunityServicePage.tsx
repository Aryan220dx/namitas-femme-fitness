import { COMMUNITY_IMAGES, CONTACT_CTA } from "@/data/storyPages";
import { EditorialText, ImageMosaic, LuxuryCTA, StoryHero, StoryPage, StorySection } from "./StoryPrimitives";

const communityNarrative = [
  "Community service is the human side of Namita's Femme Fitness: school visits, awareness programs, women empowerment conversations, and grassroots wellness education.",
  "These moments are not corporate social responsibility theatre. They are documentary proof of a belief that health must reach women, children, families, and communities beyond the studio.",
  "The work carries nutrition education, confidence building, movement awareness, and a quiet humanitarian commitment into everyday settings.",
];

export function CommunityServicePage() {
  return (
    <StoryPage>
      <StoryHero
        kicker="Community Service"
        title="Wellness that steps outside the studio."
        body="A documentary-style chapter for the humanitarian, educational, and grassroots impact of Dr. Namita's work."
      />

      <StorySection eyebrow="Humanitarian Chapter" title="Authentic care, carried into the community">
        <EditorialText paragraphs={communityNarrative} />
      </StorySection>

      <StorySection eyebrow="Documentary Gallery" title="Community reach in real moments" className="bg-[#090707]">
        <ImageMosaic images={COMMUNITY_IMAGES} />
      </StorySection>

      <LuxuryCTA title="A stronger woman strengthens a community." body={CONTACT_CTA.body} href={CONTACT_CTA.href} />
    </StoryPage>
  );
}
