import type { Testimonial } from "@/data/testimonials";

export type ExternalReview = Testimonial & {
  id: string;
  publishedAt?: string;
};

export async function fetchReviews(): Promise<ExternalReview[]> {
  // Future integration point for Google Places or another verified review source.
  return [];
}
