"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/data/founder";
import { founderReveal, founderStagger, founderViewport } from "./founderMotion";

export function CertificationWall() {
  return (
    <section className="bg-[#0f0b0b] px-container-sm py-24 text-ivory md:px-container md:py-36">
      <motion.div variants={founderStagger} initial="hidden" whileInView="visible" viewport={founderViewport} className="section-container">
        <motion.div variants={founderReveal} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">Certification Wall</p>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">Precision across every stage of a woman&apos;s body.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ivory/68">
            Her certification profile spans strength, nutrition, special populations, corporate wellness, functional movement, and applied fitness practice.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((certification) => (
            <motion.article
              key={certification.title}
              variants={founderReveal}
              className="border border-ivory/10 bg-black/28 p-6 transition hover:border-gold-light/40 hover:bg-black/42"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light/78">{certification.category}</p>
              <h3 className="font-serif text-2xl leading-tight text-ivory">{certification.title}</h3>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
