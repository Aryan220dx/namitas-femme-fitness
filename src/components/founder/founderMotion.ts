"use client";

import type { Variants } from "framer-motion";

export const founderEase = [0.25, 0.46, 0.45, 0.94] as const;

export const founderStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

export const founderReveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: founderEase },
  },
};

export const founderSoftReveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: founderEase },
  },
};

export const founderSlideLeft: Variants = {
  hidden: { opacity: 0, x: -38 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: founderEase },
  },
};

export const founderSlideRight: Variants = {
  hidden: { opacity: 0, x: 38 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: founderEase },
  },
};

export const founderViewport = { once: true, amount: 0.2 };
