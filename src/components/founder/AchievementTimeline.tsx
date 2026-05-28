"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ACHIEVEMENT_TIMELINE } from "@/data/founder";
import { cn } from "@/lib/utils";
import { founderReveal, founderStagger, founderViewport } from "./founderMotion";

export function AchievementTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#090707] px-container-sm py-24 text-ivory md:px-container md:py-36">
      <div aria-hidden className="absolute right-0 top-20 h-80 w-80 rounded-full bg-gold-light/10 blur-3xl" />
      <motion.div variants={founderStagger} initial="hidden" whileInView="visible" viewport={founderViewport} className="section-container">
        <motion.div variants={founderReveal} className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">The Journey</p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">A Timeline of Earned Authority</h2>
          <p className="mt-6 text-lg leading-8 text-ivory/68">
            Academic milestones, athletic leadership, institutional service, and the founder journey that shaped Namita&apos;s Femme Fitness.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          <svg aria-hidden className="absolute left-4 top-0 hidden h-full w-4 md:left-1/2 md:block md:-translate-x-1/2" viewBox="0 0 10 1000" preserveAspectRatio="none">
            <motion.path
              d="M5 0 V1000"
              stroke="rgba(212,175,55,0.62)"
              strokeWidth="1.6"
              fill="none"
              initial={reduceMotion ? false : { pathLength: 0 }}
              whileInView={reduceMotion ? undefined : { pathLength: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
            />
          </svg>

          <div className="space-y-8 md:space-y-10">
            {ACHIEVEMENT_TIMELINE.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  initial={reduceMotion ? false : { opacity: 0, x: isLeft ? -30 : 30, y: 18 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={cn("relative grid gap-5 md:grid-cols-2 md:gap-16", !isLeft && "md:[&>*:first-child]:col-start-2")}
                >
                  <div className="relative border border-gold-light/16 bg-black/36 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur transition hover:border-gold-light/42 md:p-7">
                    <span className="absolute -left-[2.05rem] top-7 hidden h-3 w-3 rounded-full border border-gold-light bg-[#090707] shadow-[0_0_18px_rgba(212,175,55,0.45)] md:block" />
                    <p className="mb-3 font-serif text-3xl text-gold-light">{item.year}</p>
                    <h3 className="mb-2 text-xl font-semibold text-ivory">{item.title}</h3>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light/76">{item.institution}</p>
                    <p className="leading-7 text-ivory/64">{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
