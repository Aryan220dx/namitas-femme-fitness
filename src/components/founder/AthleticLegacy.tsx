"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ATHLETIC_STATS } from "@/data/founder";
import { founderReveal, founderStagger, founderViewport } from "./founderMotion";

export function AthleticLegacy() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-black px-container-sm py-24 text-ivory md:px-container md:py-36">
      <motion.div
        aria-hidden
        initial={reduceMotion ? false : { y: -20 }}
        whileInView={reduceMotion ? undefined : { y: 20 }}
        transition={{ duration: 3.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(212,175,55,0.16),transparent_28%),linear-gradient(115deg,#050505,#13090b_48%,#050505)]"
      />
      <div aria-hidden className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-gold-light/20 to-transparent" />

      <motion.div variants={founderStagger} initial="hidden" whileInView="visible" viewport={founderViewport} className="section-container">
        <motion.p variants={founderReveal} className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
          Athletic Legacy
        </motion.p>
        <motion.div variants={founderReveal} className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h2 className="text-5xl font-semibold leading-none md:text-7xl">Born From the Field</h2>
          <p className="max-w-2xl text-lg leading-8 text-ivory/72">
            Before she became an academic authority and wellness architect, Dr. Namita was an athlete. Her coaching is forged from lived discipline, not borrowed language.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {ATHLETIC_STATS.map((stat) => (
            <motion.article
              key={stat.label}
              variants={founderReveal}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="border border-gold-light/18 bg-ivory/5 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur transition-colors hover:border-gold-light/45"
            >
              <p className="mb-3 font-serif text-4xl text-gold-light md:text-5xl">{stat.value}</p>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-ivory">{stat.label}</h3>
              <p className="leading-7 text-ivory/62">{stat.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
