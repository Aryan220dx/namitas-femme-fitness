export type PricingTier = {
  name: string;
  price: string;
  period: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
  badge?: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Initial Consultation",
    price: "₹200",
    period: "session",
    features: ["Lifestyle and goal review", "Movement screening", "Program recommendation"],
    ctaLabel: "Book Session",
  },
  {
    name: "Signature Membership",
    price: "On request",
    period: "month",
    features: ["Unlimited group classes", "Monthly progress review", "Beginner-friendly coaching", "WhatsApp support"],
    ctaLabel: "Join The Studio",
    featured: true,
    badge: "Popular Choice",
  },
  {
    name: "Elite Personal Care",
    price: "Custom",
    period: "plan",
    features: ["Personal training", "Clinical or postpartum focus", "Flexible schedule", "Concierge wellness plan"],
    ctaLabel: "Request Plan",
  },
];
