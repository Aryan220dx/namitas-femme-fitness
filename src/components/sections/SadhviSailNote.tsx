"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FOUNDER_STORY } from "@/data/storyPages";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { SectionWrapper } from "../ui/SectionWrapper";

export function SadhviSailNote() {
  const { sadhvi } = FOUNDER_STORY;

  return (
    <SectionWrapper
      bg="black"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#050505_0%,#0d0a08_100%)]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div aria-hidden className="absolute -inset-5 bg-gold-light/15 blur-3xl" />
          <figure className="relative overflow-hidden rounded-lg border border-gold-light/25 bg-ivory/5 shadow-[0_30px_110px_rgba(0,0,0,0.65)]">
            <div className="relative aspect-[4/5]">
              <Image
                src={sadhvi.image.src}
                alt={sadhvi.image.alt}
                fill
                sizes="(min-width: 1024px) 34vw, 88vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
              <figcaption className="absolute inset-x-5 bottom-5 border border-gold-light/25 bg-black/55 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light backdrop-blur">
                {sadhvi.memberNote}
              </figcaption>
            </div>
          </figure>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold-light/80">
            Proud moment
          </motion.p>
          <h2 className="mb-5 text-4xl font-semibold leading-tight text-white md:text-6xl">{sadhvi.title}</h2>
          <div className="mb-7 h-0.5 w-16 bg-gold-light" />
          <h3 className="mb-5 font-serif text-3xl leading-tight text-ivory md:text-4xl">{sadhvi.question}</h3>
          <p className="max-w-2xl text-lg leading-8 text-ivory/72 md:text-xl md:leading-9">{sadhvi.body}</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
