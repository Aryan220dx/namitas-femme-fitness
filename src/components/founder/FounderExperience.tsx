import { AchievementTimeline } from "./AchievementTimeline";
import { AthleticLegacy } from "./AthleticLegacy";
import { AuthorityGrid } from "./AuthorityGrid";
import { CertificationWall } from "./CertificationWall";
import { FounderCTA } from "./FounderCTA";
import { FounderHero } from "./FounderHero";
import { ManifestoBlock } from "./ManifestoBlock";
import { PublicationsShelf } from "./PublicationsShelf";
import { WarmHumanLayer } from "./WarmHumanLayer";

export function FounderExperience() {
  return (
    <div id="founder" className="scroll-mt-20 bg-black">
      <FounderHero />
      <ManifestoBlock />
      <AthleticLegacy />
      <AchievementTimeline />
      <AuthorityGrid />
      <PublicationsShelf />
      <CertificationWall />
      <WarmHumanLayer />
      <FounderCTA />
    </div>
  );
}
