"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { PUBLICATIONS } from "@/data/founder";
import { founderReveal, founderStagger, founderViewport } from "./founderMotion";

export function PublicationsShelf() {
  return (
    <section className="relative overflow-hidden bg-[#080608] px-container-sm py-24 text-ivory md:px-container md:py-36">
      <div aria-hidden className="absolute bottom-0 left-0 h-48 w-full bg-[linear-gradient(0deg,rgba(212,175,55,0.08),transparent)]" />
      <motion.div variants={founderStagger} initial="hidden" whileInView="visible" viewport={founderViewport} className="section-container">
        <motion.div variants={founderReveal} className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">Published Works</p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">An intellectual legacy in motion</h2>
          <p className="mt-6 text-lg leading-8 text-ivory/68">
            Books, research, and education material that extend her work beyond the studio and into the wider fitness community.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-5">
          {PUBLICATIONS.map((publication, index) => (
            <motion.article
              key={publication.title}
              variants={founderReveal}
              className="relative flex min-h-[320px] flex-col justify-between overflow-hidden border border-gold-light/18 bg-[#15100f] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
            >
              <div aria-hidden className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-gold-light via-[#8f6e21] to-[#3a2b10]" />
              <div>
                <div className="mb-8 flex items-center justify-between text-gold-light">
                  <BookOpen className="h-6 w-6" aria-hidden />
                  <span className="font-serif text-4xl text-ivory/12">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mb-4 font-serif text-2xl leading-tight text-ivory">{publication.title}</h3>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{publication.role}</p>
                <p className="text-sm leading-6 text-ivory/62">{publication.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
