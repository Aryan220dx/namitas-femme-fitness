"use client";

import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { BUSINESS_INFO } from "@/data/business";
import { FOUNDER_PROFILE } from "@/data/founder";
import { founderEase, founderReveal, founderStagger } from "./founderMotion";
import { ButtonLink } from "../ui/Button";

export function FounderHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#080608] px-container-sm pb-20 pt-32 text-ivory md:px-container md:pb-28 md:pt-36">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_18%,rgba(212,175,55,0.22),transparent_32%),radial-gradient(circle_at_18%_78%,rgba(196,137,111,0.16),transparent_34%),linear-gradient(140deg,#050404_0%,#120c0d_45%,#080608_100%)]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:46px_46px]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.72)_72%)]" />

      <motion.div
        variants={founderStagger}
        initial="hidden"
        animate="visible"
        className="section-container grid min-h-[calc(100vh-9rem)] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]"
      >
        <div className="relative z-10 max-w-4xl">
          <motion.p variants={founderReveal} className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
            <Sparkles className="h-4 w-4" aria-hidden />
            {FOUNDER_PROFILE.brand}
          </motion.p>
          <motion.h1 variants={founderReveal} className="mb-5 text-5xl font-semibold leading-[0.95] text-ivory md:text-7xl lg:text-8xl">
            {FOUNDER_PROFILE.name}
          </motion.h1>
          <motion.p variants={founderReveal} className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-gold-light md:text-base">
            {FOUNDER_PROFILE.title}
          </motion.p>
          <motion.p variants={founderReveal} className="max-w-2xl text-lg leading-8 text-ivory/78 md:text-xl md:leading-9">
            {FOUNDER_PROFILE.descriptor}
          </motion.p>

          <motion.div variants={founderReveal} className="mt-9 flex flex-wrap gap-3">
            {FOUNDER_PROFILE.heroCredentials.map((credential) => (
              <span
                key={credential}
                className="rounded-full border border-gold-light/30 bg-black/30 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ivory/86 shadow-[0_0_24px_rgba(212,175,55,0.08)] backdrop-blur"
              >
                {credential}
              </span>
            ))}
          </motion.div>

          <motion.div variants={founderReveal} className="mt-11 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#founder-cta" variant="secondary" size="lg" className="bg-gold-light text-ink hover:bg-gold-bright">
              Begin Your Journey
            </ButtonLink>
            <ButtonLink href="#credentials" variant="light" size="lg" className="border-ivory/30 text-ivory hover:border-gold-light hover:bg-gold-light hover:text-ink">
              View Credentials
            </ButtonLink>
            <ButtonLink href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg" className="text-gold-light hover:text-ivory">
              Connect
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 1.03, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, ease: founderEase, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-[600px]"
        >
          <div aria-hidden className="absolute -inset-6 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.24),transparent_62%)] blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden border border-gold-light/22 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            <Image
              src={FOUNDER_PROFILE.portrait.src}
              alt={FOUNDER_PROFILE.portrait.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover object-top grayscale-[35%] transition duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-transparent to-black/18" />
          </div>
          <div className="absolute -bottom-6 left-5 right-5 border border-gold-light/28 bg-black/74 p-5 text-center backdrop-blur md:left-8 md:right-8">
            <p className="font-serif text-2xl text-gold-light">Science meets sisterhood.</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/62">Founder · Scholar · Athlete</p>
          </div>
        </motion.div>
      </motion.div>

      <a href="#manifesto" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-ivory/45 transition hover:text-gold-light md:block" aria-label="Scroll to founder manifesto">
        <ArrowDown className="h-7 w-7 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
