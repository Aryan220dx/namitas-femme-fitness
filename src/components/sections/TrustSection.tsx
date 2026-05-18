import { SearchCheck, Trophy } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { TrustBadge } from "../ui/TrustBadge";

export function TrustSection() {
  return (
    <section className="border-y border-ink-border/30 bg-ivory-low py-12">
      <div className="section-container grid gap-8 px-container-sm md:grid-cols-2 md:px-container">
        <TrustBadge icon={SearchCheck} title="Google Reviews" subtitle="Read verified client reviews" cta="See Google Reviews" href={BUSINESS_INFO.googleReviews} />
        <TrustBadge icon={Trophy} title="Top Rated on Justdial" subtitle="Certified women-only wellness studio" cta="View Justdial Profile" href={BUSINESS_INFO.justdial} />
      </div>
    </section>
  );
}
