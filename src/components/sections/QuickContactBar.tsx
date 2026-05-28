import { MessageCircle, Phone, ShieldCheck, Star } from "lucide-react";
import { BUSINESS_INFO, getTelHref } from "@/data/business";

export function QuickContactBar() {
  const items = [
    { icon: Phone, label: "Call Now", href: getTelHref(BUSINESS_INFO.phonePrimary), external: false },
    { icon: MessageCircle, label: "WhatsApp", href: BUSINESS_INFO.whatsapp, external: true },
    { icon: Star, label: "Google Reviews", href: BUSINESS_INFO.googleReviews, external: true },
    { icon: ShieldCheck, label: "Justdial Profile", href: BUSINESS_INFO.justdial, external: true },
  ];

  return (
    <section className="border-b border-ink-border/30 bg-ivory-bright py-7">
      <div className="section-container px-container-sm md:px-container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {items.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              className="group flex flex-col items-center gap-2"
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <Icon className="h-6 w-6 text-gold-light transition-transform group-hover:scale-110" aria-hidden />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
