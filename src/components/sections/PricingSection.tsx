import { PRICING_TIERS } from "@/data/pricing";
import { PricingCard } from "../ui/PricingCard";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionWrapper } from "../ui/SectionWrapper";

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" bg="mid">
      <SectionHeading title="Investment in Yourself" subtitle="Transparent starting points for premium women-only care. Custom plans are recommended after consultation." />
      <div className="grid items-center gap-gutter md:grid-cols-3">
        {PRICING_TIERS.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </SectionWrapper>
  );
}
