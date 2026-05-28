"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BUSINESS_INFO } from "@/data/business";
import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialCard } from "../ui/TestimonialCard";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionWrapper } from "../ui/SectionWrapper";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!TESTIMONIALS.length) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % TESTIMONIALS.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => setIndex((value) => (value + direction + TESTIMONIALS.length) % TESTIMONIALS.length);

  if (!TESTIMONIALS.length) {
    return (
      <SectionWrapper id="testimonials" bg="black">
        <SectionHeading title="Stories of Transformation" centered inverse />
        <div className="mx-auto max-w-3xl border border-white/15 bg-white/5 p-10 text-center">
          <p className="mb-6 font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
            Verified client reviews will appear here once Google review syncing is connected.
          </p>
          <a
            href={BUSINESS_INFO.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border-b border-gold-light pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light hover:text-white"
          >
            Read Google Reviews
          </a>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="testimonials" bg="black">
      <SectionHeading title="Stories of Transformation" centered inverse />
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={TESTIMONIALS[index].name}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45 }}
          >
            <TestimonialCard {...TESTIMONIALS[index]} />
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex items-center justify-center gap-5">
          <button type="button" onClick={() => move(-1)} className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-gold-light hover:text-gold-light" aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-3">
            {TESTIMONIALS.map((testimonial, itemIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(itemIndex)}
                aria-label={`Show testimonial ${itemIndex + 1}`}
                className={itemIndex === index ? "h-2.5 w-8 rounded-full bg-gold-light" : "h-2.5 w-2.5 rounded-full bg-white/25 transition-colors hover:bg-white/50"}
              />
            ))}
          </div>
          <button type="button" onClick={() => move(1)} className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-gold-light hover:text-gold-light" aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
