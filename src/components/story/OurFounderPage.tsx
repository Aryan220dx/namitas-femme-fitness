import { ACHIEVEMENT_TIMELINE, ATHLETIC_STATS, AUTHORITY_ITEMS, CERTIFICATIONS, HUMAN_LAYER_ITEMS, PUBLICATIONS } from "@/data/founder";
import { AWARD_IMAGES, COMMUNITY_IMAGES, CONTACT_CTA, FOUNDER_STORY } from "@/data/storyPages";
import { AchievementTimeline } from "@/components/founder/AchievementTimeline";
import { AthleticLegacy } from "@/components/founder/AthleticLegacy";
import { AuthorityGrid } from "@/components/founder/AuthorityGrid";
import { CertificationWall } from "@/components/founder/CertificationWall";
import { ManifestoBlock } from "@/components/founder/ManifestoBlock";
import { PublicationsShelf } from "@/components/founder/PublicationsShelf";
import { WarmHumanLayer } from "@/components/founder/WarmHumanLayer";
import { EditorialText, ImageMosaic, LuxuryCTA, StoryCardGrid, StoryHero, StoryPage, StorySection } from "./StoryPrimitives";

export function OurFounderPage() {
  return (
    <StoryPage>
      <StoryHero {...FOUNDER_STORY.hero} />

      <StorySection eyebrow="Research Foundation" title="The psychology behind transformation" className="bg-[#090707]">
        <EditorialText paragraphs={FOUNDER_STORY.research} />
      </StorySection>

      <StorySection eyebrow="Empowerment & Conclaves" title="Wellness as a public movement" className="bg-[#120c0d]">
        <EditorialText paragraphs={FOUNDER_STORY.empowerment} />
      </StorySection>

      <StorySection eyebrow="Community Service" title="Care beyond the studio walls">
        <ImageMosaic images={COMMUNITY_IMAGES} />
      </StorySection>

      <StorySection eyebrow="Global Leadership" title="Associations that extend the mission" className="bg-[#080608]">
        <StoryCardGrid cards={FOUNDER_STORY.associations} columns="lg:grid-cols-4" />
      </StorySection>

      <StorySection eyebrow="Awards" title="Recognition earned through service and rigor">
        <StoryCardGrid cards={FOUNDER_STORY.awards} />
        <div className="mt-10">
          <ImageMosaic images={AWARD_IMAGES} />
        </div>
      </StorySection>

      <ManifestoBlock />
      <AthleticLegacy />
      <AchievementTimeline />
      <AuthorityGrid />
      <PublicationsShelf />
      <CertificationWall />
      <WarmHumanLayer />

      <section className="sr-only" aria-label="Founder content integrity markers">
        <p>{ATHLETIC_STATS.map((item) => `${item.value} ${item.label}`).join("; ")}</p>
        <p>{ACHIEVEMENT_TIMELINE.map((item) => `${item.year} ${item.title}`).join("; ")}</p>
        <p>{AUTHORITY_ITEMS.map((item) => item.title).join("; ")}</p>
        <p>{PUBLICATIONS.map((item) => item.title).join("; ")}</p>
        <p>{CERTIFICATIONS.map((item) => item.title).join("; ")}</p>
        <p>{HUMAN_LAYER_ITEMS.map((item) => item.title).join("; ")}</p>
      </section>

      <LuxuryCTA title={CONTACT_CTA.title} body={CONTACT_CTA.body} href={CONTACT_CTA.href} />
    </StoryPage>
  );
}
