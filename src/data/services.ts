import { SITE_ASSETS } from "./siteAssets";

export type Service = {
  title: string;
  tag: string;
  description: string;
  image: string;
  alt: string;
};

const programImages = SITE_ASSETS.programImages;

export const SERVICES: Service[] = [
  {
    title: "Personal Training",
    tag: "One-on-One Mastery",
    description: "Private coaching for strength, mobility, fat loss, posture, and sustainable routines.",
    image: programImages.personalTraining.src,
    alt: programImages.personalTraining.alt,
  },
  {
    title: "Group Fitness",
    tag: "Collective Energy",
    description: "Small-format women-only classes that feel energetic, supportive, and never intimidating.",
    image: programImages.groupFitness.src,
    alt: programImages.groupFitness.alt,
  },
  {
    title: "Yoga",
    tag: "Balance & Flow",
    description: "Calming strength, flexibility, breathwork, and mindfulness for everyday resilience.",
    image: programImages.yoga.src,
    alt: programImages.yoga.alt,
  },
  {
    title: "Dance Fitness",
    tag: "Joyful Movement",
    description: "Confidence-building movement classes that blend rhythm, cardio, expression, and joy.",
    image: programImages.danceFitness.src,
    alt: programImages.danceFitness.alt,
  },
  {
    title: "Clinical Fitness",
    tag: "Evidence-Based Health",
    description: "Corrective movement and medically mindful coaching for safer, smarter progress.",
    image: programImages.clinicalFitness.src,
    alt: programImages.clinicalFitness.alt,
  },
  {
    title: "Pregnancy Fitness",
    tag: "Motherhood Journey",
    description: "Gentle, supervised movement for pregnancy comfort, strength, and confidence.",
    image: programImages.pregnancyFitness.src,
    alt: programImages.pregnancyFitness.alt,
  },
  {
    title: "Postpartum Wellness",
    tag: "Recovery & Strength",
    description: "Core recovery, pelvic-floor-aware strength, and gentle rebuilding after birth.",
    image: programImages.postpartumWellness.src,
    alt: programImages.postpartumWellness.alt,
  },
  {
    title: "Senior Fitness",
    tag: "Graceful Aging",
    description: "Mobility, balance, strength, and fall-prevention programs for active aging.",
    image: programImages.seniorFitness.src,
    alt: programImages.seniorFitness.alt,
  },
  {
    title: "Massage Therapy",
    tag: "Restorative Care",
    description: "Recovery-focused therapeutic care for relaxation, soreness, and nervous system reset.",
    image: programImages.massageTherapy.src,
    alt: programImages.massageTherapy.alt,
  },
];
