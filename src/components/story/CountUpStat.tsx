"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function CountUpStat({ value, label, detail }: { value: string; label: string; detail: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const numeric = Number(value.match(/\d+/)?.[0] ?? "0");
  const suffix = value.replace(String(numeric), "");
  const [count, setCount] = useState(reduceMotion || numeric === 0 ? numeric : 0);

  useEffect(() => {
    if (!inView || reduceMotion || numeric === 0) return;

    let frame = 0;
    const totalFrames = 45;
    const id = window.setInterval(() => {
      frame += 1;
      setCount(Math.round((numeric * frame) / totalFrames));
      if (frame >= totalFrames) {
        window.clearInterval(id);
      }
    }, 24);

    return () => window.clearInterval(id);
  }, [inView, numeric, reduceMotion]);

  return (
    <motion.article
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="border border-gold-light/18 bg-ivory/[0.045] p-7"
    >
      <p className="mb-3 font-serif text-4xl text-gold-light md:text-5xl">{numeric > 0 ? `${count}${suffix}` : value}</p>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">{label}</h3>
      <p className="text-sm leading-6 text-ivory/64">{detail}</p>
    </motion.article>
  );
}
