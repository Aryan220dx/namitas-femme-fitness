"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { StoryCard, StoryImage } from "@/data/storyPages";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function StoryPage({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("bg-black text-ivory", className)}>{children}</div>;
}

export function StorySection({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden px-container-sm py-24 md:px-container md:py-36", className)}>
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/25 to-transparent" />
      <div className="section-container relative">
        {(eyebrow || title) && (
          <Reveal className="mb-14 max-w-4xl">
            {eyebrow ? <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">{eyebrow}</p> : null}
            {title ? <h2 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h2> : null}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StoryHero({
  kicker,
  title,
  body,
  image,
}: {
  kicker: string;
  title: string;
  body: string;
  image?: StoryImage;
}) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black px-container-sm pb-20 pt-32 text-ivory md:px-container md:pt-36">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_20%,rgba(212,175,55,0.22),transparent_32%),radial-gradient(circle_at_22%_82%,rgba(196,137,111,0.14),transparent_30%),linear-gradient(140deg,#050404,#120b0c_52%,#040404)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="section-container grid min-h-[calc(100vh-9rem)] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">{kicker}</p>
          <h1 className="mb-7 text-5xl font-semibold leading-none md:text-7xl lg:text-8xl">{title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-ivory/72 md:text-xl md:leading-9">{body}</p>
        </Reveal>
        {image ? (
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[560px]">
            <div aria-hidden className="absolute -inset-8 bg-gold-light/15 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden border border-gold-light/20 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
              <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover object-top grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-transparent to-black/15" />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function EditorialText({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {paragraphs.map((paragraph, index) => (
        <Reveal key={paragraph} delay={index * 0.06} className="border border-gold-light/14 bg-ivory/[0.045] p-7 backdrop-blur">
          <p className="text-lg leading-8 text-ivory/74">{paragraph}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function StoryCardGrid({ cards, columns = "lg:grid-cols-3" }: { cards: StoryCard[]; columns?: string }) {
  return (
    <div className={cn("grid gap-5 md:grid-cols-2", columns)}>
      {cards.map((card, index) => (
        <Reveal key={card.title} delay={index * 0.05}>
          <article className="h-full border border-gold-light/16 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-7 transition hover:border-gold-light/42 hover:shadow-[0_24px_90px_rgba(212,175,55,0.1)]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light/80">{card.eyebrow}</p>
            <h3 className="mb-5 font-serif text-3xl leading-tight">{card.title}</h3>
            <p className="leading-7 text-ivory/64">{card.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function ImageMosaic({ images }: { images: StoryImage[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <Reveal key={image.src} delay={index * 0.04}>
          <figure className="overflow-hidden border border-gold-light/16 bg-ivory/[0.04]">
            <div className={cn("relative", index % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]")}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover grayscale-[12%] transition duration-700 hover:scale-[1.03] hover:grayscale-0" />
            </div>
            {image.caption ? <figcaption className="px-5 py-4 text-sm leading-6 text-ivory/64">{image.caption}</figcaption> : null}
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function LuxuryCTA({ title, body, href, label = "Begin Your Journey" }: { title: string; body: string; href: string; label?: string }) {
  return (
    <section className="relative overflow-hidden bg-black px-container-sm py-24 text-center text-ivory md:px-container md:py-36">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_34%)]" />
      <Reveal className="section-container relative mx-auto max-w-4xl border border-gold-light/22 bg-black/50 px-6 py-14 backdrop-blur md:px-14 md:py-20">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ivory/70">{body}</p>
        <Link href={href} className="mt-10 inline-flex items-center justify-center gap-3 rounded-sm bg-gold-light px-10 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-gold-bright">
          {label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Reveal>
    </section>
  );
}
