"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/data/features";
import { staggerContainer } from "@/lib/animations";
import { FeatureCard } from "../ui/FeatureCard";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionWrapper } from "../ui/SectionWrapper";

export function WhyChooseUs() {
  return (
    <SectionWrapper>
      <SectionHeading title="Why Women Choose Us" subtitle="Quietly expert care for women who want a safer, warmer way to begin or deepen fitness." />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-gutter md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
