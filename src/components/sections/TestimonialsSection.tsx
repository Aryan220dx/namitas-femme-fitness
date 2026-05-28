"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { cardReveal, fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";

function ClientVoiceCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const isFeatured = testimonial.featured;

  return (
    <motion.article
      variants={cardReveal}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className={cn(
        "masonry-item group relative overflow-hidden rounded-lg border bg-[#0c0b09] p-7 shadow-[0_24px_80px_-52px_rgba(212,175,55,0.65)] transition-colors duration-500 md:p-8",
        "border-gold-light/20 hover:border-gold-light/45",
        isFeatured ? "md:p-10" : "",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/70 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-light/10 via-transparent to-ivory/5 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        {testimonial.avatar ? (
          <div className="mb-7 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-gold-light/35 bg-ivory/10 p-1">
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.name} portrait`}
                fill
                sizes="64px"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="label-uppercase text-gold-light">{testimonial.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">Member reflection</p>
            </div>
          </div>
        ) : (
          <div className="mb-7 flex items-center justify-between gap-5">
            <div>
              <p className="label-uppercase text-gold-light">{testimonial.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">Member reflection</p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-light/25 bg-gold-light/10 text-gold-light/70">
              <Quote className="h-5 w-5" aria-hidden />
            </span>
          </div>
        )}

        <Quote className="mb-5 h-9 w-9 text-gold-light/25" aria-hidden />
        <p
          className={cn(
            "whitespace-pre-line font-serif italic leading-8 text-ivory/85",
            isFeatured ? "text-[1.35rem] md:text-2xl md:leading-9" : "text-xl",
          )}
        >
          &ldquo;{testimonial.review}&rdquo;
        </p>

        <div className="mt-8 h-px w-16 bg-gold-light/35 transition-all duration-500 group-hover:w-24 group-hover:bg-gold-light/70" />
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/35">Story {String(index + 1).padStart(2, "0")}</p>
      </div>
    </motion.article>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      bg="black"
      className="relative overflow-hidden border-y border-gold-light/10 bg-[linear-gradient(180deg,#050505_0%,#11100d_48%,#050505_100%)]"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto mb-14 max-w-4xl text-center md:mb-20"
      >
        <span className="mb-5 block font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
          Client Voices
        </span>
        <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl">
          Stories from women who found confidence, strength, and support
        </h2>
        <div className="mx-auto mt-6 h-0.5 w-16 bg-gold-light" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
          Every transformation begins with feeling seen, guided, and understood.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="masonry"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <ClientVoiceCard key={testimonial.name} testimonial={testimonial} index={index} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
