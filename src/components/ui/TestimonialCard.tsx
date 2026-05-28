import Image from "next/image";
import { Quote, Star, UserRound } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ review, name, rating, platform, avatar }: Testimonial) {
  return (
    <article className="grid min-h-[360px] items-center gap-10 md:grid-cols-[280px_1fr]">
      <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-2 border-gold-light p-2 md:mx-0">
        {avatar ? (
          <Image src={avatar} alt={`${name} review avatar`} fill sizes="192px" className="rounded-full object-cover p-2" />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-ivory text-gold-light">
            <UserRound className="h-16 w-16" aria-hidden />
          </div>
        )}
      </div>
      <div className="text-center md:text-left">
        <Quote className="mx-auto mb-6 h-12 w-12 text-gold-light/35 md:mx-0" aria-hidden />
        <div className="mb-5 flex justify-center gap-1 text-gold-light md:justify-start" aria-label={`${rating} star rating`}>
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
          ))}
        </div>
        <p className="mb-8 font-serif text-2xl italic leading-relaxed text-white md:text-3xl">&ldquo;{review}&rdquo;</p>
        <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-gold-light">{name}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">{platform} review</p>
      </div>
    </article>
  );
}
