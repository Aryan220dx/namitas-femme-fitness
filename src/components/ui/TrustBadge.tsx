import type { LucideIcon } from "lucide-react";
import { Star } from "lucide-react";

export function TrustBadge({
  icon: Icon,
  title,
  subtitle,
  cta,
  href,
  rating,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  rating?: string;
}) {
  return (
    <article className="flex flex-col items-center border border-ink-border/40 bg-ivory-bright p-8 text-center shadow-card">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-light/15 text-gold">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      {rating ? (
        <div className="mb-2 flex items-center gap-3">
          <span className="font-serif text-2xl font-medium">{rating}</span>
          <span className="flex text-gold-light">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
            ))}
          </span>
        </div>
      ) : (
        <h3 className="mb-2 text-2xl font-medium">{title}</h3>
      )}
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">{subtitle}</p>
      <a href={href} target="_blank" rel="noopener noreferrer" className="border-b border-gold-light pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold hover:text-black">
        {cta}
      </a>
    </article>
  );
}
