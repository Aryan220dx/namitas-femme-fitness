"use client";

import { motion } from "framer-motion";
import { FOUNDER_PROFILE } from "@/data/founder";
import { founderReveal, founderViewport } from "./founderMotion";

export function ManifestoBlock() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-[#0a0708] px-container-sm py-24 text-ivory md:px-container md:py-36">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/45 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-light/25 to-transparent" />
      <motion.div variants={founderReveal} initial="hidden" whileInView="visible" viewport={founderViewport} className="section-container mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-10 h-px w-40 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
        <blockquote className="font-serif text-3xl italic leading-tight text-ivory md:text-5xl md:leading-tight">
          “{FOUNDER_PROFILE.manifesto}”
        </blockquote>
        <div className="mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      </motion.div>
    </section>
  );
}
