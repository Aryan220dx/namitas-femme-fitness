import type { ImageAsset } from "./siteAssets";

export type GalleryImage = ImageAsset & {
  featured?: boolean;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/gallery/studio-class-step-training.jpeg",
    alt: "Women training together inside Namita's Femme Fitness studio.",
    featured: true,
  },
  {
    src: "/images/gallery/studio-dumbbell-rack.jpeg",
    alt: "Organized dumbbell rack in the strength training area.",
  },
  {
    src: "/images/gallery/studio-group-lunges.jpeg",
    alt: "Women practicing controlled lunges in a group wellness session.",
    featured: true,
  },
  {
    src: "/images/gallery/studio-yoga-strength-class.jpeg",
    alt: "Women following a calm strength and mobility class.",
  },
  {
    src: "/images/gallery/studio-strength-machines.jpeg",
    alt: "Strength machines in the women-only fitness studio.",
  },
  {
    src: "/images/gallery/studio-free-weights-area.jpeg",
    alt: "Free weights and benches arranged in the studio training zone.",
  },
];
