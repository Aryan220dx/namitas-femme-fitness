"use client";

import Image from "next/image";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/data/business";
import { SITE_ASSETS } from "@/data/siteAssets";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ButtonLink } from "../ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <Image
        src={SITE_ASSETS.hero.heroImage.src}
        alt={SITE_ASSETS.hero.heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 px-container-sm text-center text-white md:px-container"
      >
        <motion.p variants={fadeUp} className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
          Namita&apos;s Femme Fitness
        </motion.p>
        <motion.h1 variants={fadeUp} className="mx-auto mb-6 max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
          Empowering Every Woman to <span className="font-light italic text-gold-light">Thrive</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
          A women-only sanctuary for wellness, tailored to your journey. Experience fitness designed with warmth, privacy, and clinical care.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <ButtonLink href="#contact" variant="secondary" size="lg" className="w-full md:w-auto">
            Book Consultation
          </ButtonLink>
          <ButtonLink href="#services" variant="light" size="lg" className="w-full md:w-auto">
            Explore Programs
          </ButtonLink>
          <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:text-gold-light">
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </motion.div>
      </motion.div>
      <ChevronDown className="absolute bottom-8 left-1/2 z-10 h-8 w-8 -translate-x-1/2 text-white/50 motion-safe:animate-bounce" aria-hidden />
    </section>
  );
}
