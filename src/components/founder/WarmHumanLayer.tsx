"use client";

import { motion } from "framer-motion";
import { Heart, Languages, Mic2, PawPrint, Sparkles } from "lucide-react";
import { HUMAN_LAYER_ITEMS } from "@/data/founder";
import { founderReveal, founderStagger, founderViewport } from "./founderMotion";

const icons = [Sparkles, Mic2, PawPrint, Languages, Heart];

export function WarmHumanLayer() {
  return (
    <section className="relative overflow-hidden bg-[#130c0d] px-container-sm py-24 text-ivory md:px-container md:py-36">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(212,160,154,0.18),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(212,175,55,0.12),transparent_28%)]" />
      <motion.div variants={founderStagger} initial="hidden" whileInView="visible" viewport={founderViewport} className="section-container relative">
        <motion.div variants={founderReveal} className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4a09a]">The Human Layer</p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">Warmth behind the authority</h2>
          <p className="mt-6 text-lg leading-8 text-ivory/72">
            The scholar, athlete, and founder is also deeply creative, multilingual, compassionate, and rooted in women&apos;s empowerment.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-5">
          {HUMAN_LAYER_ITEMS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article key={item.title} variants={founderReveal} className="border border-[#d4a09a]/18 bg-ivory/[0.055] p-6 backdrop-blur">
                <Icon className="mb-8 h-6 w-6 text-[#d4a09a]" aria-hidden />
                <h3 className="mb-4 font-serif text-2xl leading-tight text-ivory">{item.title}</h3>
                <p className="text-sm leading-6 text-ivory/66">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
