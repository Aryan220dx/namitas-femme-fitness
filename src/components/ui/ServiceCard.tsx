import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ title, tag, description, image, alt }: Service) {
  return (
    <article className="group overflow-hidden border border-ink-border/30 bg-ivory-low shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
      <div className="relative h-[320px] overflow-hidden md:h-[400px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <h3 className="mb-2 text-2xl font-medium">{title}</h3>
        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">{tag}</p>
        <p className="mb-6 text-sm leading-7 text-ink-muted">{description}</p>
        <a href="#contact" className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold">
          Explore Program <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}
