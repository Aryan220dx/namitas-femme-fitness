"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_ASSETS } from "@/data/siteAssets";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { ButtonLink } from "../ui/Button";
import { SectionLabel } from "../ui/SectionHeading";
import { SectionWrapper } from "../ui/SectionWrapper";

export function FounderSection() {
  return (
    <SectionWrapper id="about" bg="mid" className="overflow-hidden">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative">
          <div className="absolute -left-5 -top-5 h-32 w-32 border-l border-t border-gold-light/40 md:-left-10 md:-top-10 md:h-40 md:w-40" />
          <div className="relative h-[520px] overflow-hidden shadow-hover">
            <Image src={SITE_ASSETS.founder.portrait.src} alt={SITE_ASSETS.founder.portrait.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover grayscale transition-all duration-700 hover:grayscale-0" />
          </div>
          <div className="absolute -bottom-8 right-3 bg-gold-light p-6 text-ink shadow-gold md:-right-8 md:p-8">
            <p className="font-serif text-4xl font-semibold">15+</p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">Years of Expertise</p>
          </div>
        </motion.div>
        <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionLabel>Our Visionary</SectionLabel>
          <h2 className="mb-8 text-4xl font-semibold leading-tight md:text-5xl">Namita&apos;s Mission for the Modern Woman</h2>
          <p className="mb-6 text-lg leading-8">
            Namita&apos;s Femme Fitness was born from a singular vision: to create a high-end sanctuary where women of all ages can pursue wellness without compromise.
          </p>
          <p className="mb-10 leading-8 text-ink-muted">
            With over 15 years of clinical and field experience, Namita has designed a methodology that respects the complexities of the female body. From strength training to therapeutic recovery, every session is a step toward your most confident self.
          </p>
          <div className="mb-10 grid grid-cols-2 gap-8">
            <div>
              <span className="mb-1 block font-serif text-2xl">Elite Certified</span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">International Standards</p>
            </div>
            <div>
              <span className="mb-1 block font-serif text-2xl">Women First</span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Physiology-Aware Care</p>
            </div>
          </div>
          <ButtonLink href="#contact">Meet Namita</ButtonLink>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
