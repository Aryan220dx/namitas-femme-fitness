import type { LucideIcon } from "lucide-react";
import { BadgeCheck, HeartHandshake, ShieldCheck, Sparkles, Stethoscope, Venus } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Venus,
    title: "Women-Only",
    description: "A private, safe, and judgment-free space designed exclusively for women of all backgrounds.",
  },
  {
    icon: HeartHandshake,
    title: "Beginner Friendly",
    description: "Your journey starts where you are, with gentle introductions and progressive paths for every level.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Support",
    description: "Evidence-led care for hormonal shifts, recovery, posture, strength, and holistic health needs.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Guidance",
    description: "Train with experts committed to women's physiology, biomechanics, and sustainable confidence.",
  },
  {
    icon: Sparkles,
    title: "Personalized Training",
    description: "Programs shaped around your goals, lifestyle, comfort level, and health history.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Atmosphere",
    description: "Impeccable hygiene, thoughtful coaching, and a warm community that feels welcoming from day one.",
  },
];
