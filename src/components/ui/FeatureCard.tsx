"use client";

import { motion } from "framer-motion";
import type { Feature } from "@/data/features";
import { cardReveal } from "@/lib/animations";

export function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <motion.article
      variants={cardReveal}
      className="group border border-ink-border/40 bg-ivory-low p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-hover md:p-8"
    >
      <Icon className="mb-6 h-9 w-9 text-gold-light transition-transform duration-300 group-hover:scale-110" aria-hidden />
      <h3 className="mb-3 text-2xl font-medium text-ink">{title}</h3>
      <p className="text-sm leading-7 text-ink-muted md:text-base">{description}</p>
    </motion.article>
  );
}
