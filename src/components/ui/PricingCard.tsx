import { Check } from "lucide-react";
import type { PricingTier } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { ButtonLink } from "./Button";

export function PricingCard({ name, price, period, features, ctaLabel, featured, badge }: PricingTier) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col border p-8 transition-all duration-300 md:p-10",
        featured
          ? "z-10 border-black bg-black text-white shadow-hover md:scale-105"
          : "border-ink-border/40 bg-ivory-bright text-ink hover:-translate-y-1 hover:shadow-hover",
      )}
    >
      {badge ? <Badge className="absolute right-5 top-5 border-0 bg-gold-light text-ink">{badge}</Badge> : null}
      <h3 className="mb-3 pr-24 text-2xl font-medium">{name}</h3>
      <p className={cn("mb-8 font-serif text-4xl font-semibold", featured ? "text-gold-light" : "text-gold")}>
        {price}
        <span className={cn("font-sans text-sm font-normal", featured ? "text-white/60" : "text-ink-muted")}> /{period}</span>
      </p>
      <ul className="mb-10 flex-grow space-y-4">
        {features.map((feature) => (
          <li key={feature} className={cn("flex items-start gap-3 text-sm leading-6", featured ? "text-white/80" : "text-ink-muted")}>
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-gold-light" : "text-gold")} aria-hidden />
            {feature}
          </li>
        ))}
      </ul>
      <ButtonLink href="#contact" variant={featured ? "secondary" : "outline"} className="w-full">
        {ctaLabel}
      </ButtonLink>
    </article>
  );
}
