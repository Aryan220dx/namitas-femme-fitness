"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, Globe2, GraduationCap, Landmark, ShieldCheck, Sparkles } from "lucide-react";
import { AUTHORITY_ITEMS } from "@/data/founder";
import { founderReveal, founderStagger, founderViewport } from "./founderMotion";

const icons = [GraduationCap, Globe2, Sparkles, Award, Landmark, ShieldCheck];

export function AuthorityGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="credentials" className="bg-[#0d0a0a] px-container-sm py-24 text-ivory md:px-container md:py-36">
      <motion.div variants={founderStagger} initial="hidden" whileInView="visible" viewport={founderViewport} className="section-container">
        <motion.div variants={founderReveal} className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">Authority & Recognition</p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">Quiet credentials. Global reach.</h2>
          <p className="mt-6 text-lg leading-8 text-ivory/68">
            The trust behind Dr. Namita&apos;s work comes from a rare convergence of academia, athletics, leadership, and community recognition.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {AUTHORITY_ITEMS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={item.title}
                variants={founderReveal}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
                className="group min-h-64 border border-gold-light/16 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)] transition hover:border-gold-light/45 hover:shadow-[0_24px_90px_rgba(212,175,55,0.12)]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light/78">{item.label}</span>
                  <Icon className="h-6 w-6 text-gold-light/78 transition group-hover:text-gold-light" aria-hidden />
                </div>
                <h3 className="mb-5 font-serif text-3xl leading-tight text-ivory">{item.title}</h3>
                <p className="leading-7 text-ivory/62">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
