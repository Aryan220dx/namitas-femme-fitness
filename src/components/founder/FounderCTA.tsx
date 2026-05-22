"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS_INFO, getTelHref } from "@/data/business";
import { FOUNDER_PROFILE } from "@/data/founder";
import { founderReveal, founderStagger, founderViewport } from "./founderMotion";
import { ButtonLink } from "../ui/Button";

export function FounderCTA() {
  return (
    <section id="founder-cta" className="relative overflow-hidden bg-black px-container-sm py-24 text-ivory md:px-container md:py-36">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_34%),linear-gradient(180deg,#0f0909,#030303)]" />
      <motion.div
        variants={founderStagger}
        initial="hidden"
        whileInView="visible"
        viewport={founderViewport}
        className="section-container relative mx-auto max-w-5xl border border-gold-light/22 bg-black/44 px-6 py-14 text-center shadow-[0_28px_100px_rgba(0,0,0,0.45)] backdrop-blur md:px-14 md:py-20"
      >
        <motion.p variants={founderReveal} className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
          {FOUNDER_PROFILE.brand}
        </motion.p>
        <motion.h2 variants={founderReveal} className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Begin your wellness journey with Dr. Namita.
        </motion.h2>
        <motion.p variants={founderReveal} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ivory/72">
          A consultation is the first quiet step toward a program shaped around your body, your pace, and your confidence.
        </motion.p>
        <motion.div variants={founderReveal} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </ButtonLink>
          <ButtonLink href={getTelHref(BUSINESS_INFO.phonePrimary)} variant="light" size="lg" className="border-ivory/30 text-ivory hover:border-gold-light hover:bg-gold-light hover:text-ink">
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </ButtonLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
