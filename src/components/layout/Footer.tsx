import Image from "next/image";
import { MessageCircle, SearchCheck, Star } from "lucide-react";
import { BUSINESS_INFO, getAddressLines, getTelHref, getTimingsText } from "@/data/business";
import { FOOTER_NAV } from "@/data/nav";
import { SITE_ASSETS } from "@/data/siteAssets";

export function Footer() {
  return (
    <footer className="border-t border-ink-border/30 bg-ivory-low px-container-sm py-16 md:px-container md:py-20">
      <div className="section-container grid gap-10 md:grid-cols-4">
        <div>
          <Image
            src={SITE_ASSETS.branding.logoFull.src}
            alt={SITE_ASSETS.branding.logoFull.alt}
            width={112}
            height={112}
            className="mb-6 h-24 w-24 rounded-sm object-contain"
          />
          <h2 className="mb-4 text-2xl uppercase tracking-[0.08em]">{BUSINESS_INFO.name}</h2>
          <p className="text-sm leading-7 text-ink-muted">Women-only fitness, wellness, and restorative care.</p>
        </div>
        <div>
          <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Navigation</h3>
          <ul className="space-y-3">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <a className="text-sm text-ink-muted transition-colors hover:text-gold" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Studio</h3>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li>{getAddressLines().join(", ")}</li>
            <li>{getTimingsText()}</li>
            <li>
              <a href={getTelHref(BUSINESS_INFO.phonePrimary)} className="hover:text-gold">
                {BUSINESS_INFO.phonePrimary}
              </a>
            </li>
            <li>
              <a href={getTelHref(BUSINESS_INFO.phoneSecondary)} className="hover:text-gold">
                {BUSINESS_INFO.phoneSecondary}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Follow Our Journey</h3>
          <div className="flex gap-3">
            {[
              { icon: Star, label: "Google Reviews", href: BUSINESS_INFO.googleReviews },
              { icon: SearchCheck, label: "Justdial", href: BUSINESS_INFO.justdial },
              { icon: MessageCircle, label: "WhatsApp", href: BUSINESS_INFO.whatsapp },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-ink-border text-ink-muted transition-all hover:bg-black hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section-container mt-14 border-t border-ink-border/30 pt-8 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-muted/70">
          © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
