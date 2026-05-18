export type ReviewPlatform = "Google" | "Justdial" | "Website";

export type Testimonial = {
  name: string;
  rating: number;
  review: string;
  platform: ReviewPlatform;
  avatar?: string;
};

export const TESTIMONIALS: Testimonial[] = [];
