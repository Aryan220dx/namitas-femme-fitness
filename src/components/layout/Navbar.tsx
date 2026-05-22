"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BUSINESS_INFO } from "@/data/business";
import { NAV_ITEMS } from "@/data/nav";
import { SITE_ASSETS } from "@/data/siteAssets";
import { useNavbarScroll } from "@/lib/hooks/useNavbarScroll";
import { cn } from "@/lib/utils";
import { ButtonLink } from "../ui/Button";

export function Navbar() {
  const scrolled = useNavbarScroll();
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const syncActiveHash = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
        return;
      }

      setActiveHash(pathname === "/founder" ? "#founder" : "#home");
    };

    syncActiveHash();
    window.addEventListener("hashchange", syncActiveHash);
    return () => window.removeEventListener("hashchange", syncActiveHash);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    const hash = href.includes("#") ? `#${href.split("#")[1]}` : "";
    if (hash) {
      setActiveHash(hash);
    }
    setOpen(false);
  };

  const isActive = (href: string) => {
    const hash = href.includes("#") ? `#${href.split("#")[1]}` : "";
    if (href === "/founder") {
      return pathname === "/founder";
    }
    return Boolean(hash && hash === activeHash);
  };

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b transition-all duration-300",
        scrolled || open ? "glass-nav border-ink-border/40 bg-ivory/88 shadow-card" : "border-white/10 bg-black/10 text-white",
      )}
    >
      <nav className="section-container flex h-20 items-center justify-between px-container-sm md:px-container" aria-label="Main navigation">
        <Link href="/#home" className="group flex h-14 items-center" aria-label="Namita's Femme Fitness home">
          <Image
            src={SITE_ASSETS.branding.logoCompact.src}
            alt={SITE_ASSETS.branding.logoCompact.alt}
            width={64}
            height={64}
            priority
            className="h-12 w-12 rounded-sm object-contain sm:hidden"
          />
          <Image
            src={SITE_ASSETS.branding.logoFull.src}
            alt={SITE_ASSETS.branding.logoFull.alt}
            width={72}
            height={72}
            priority
            className="hidden h-16 w-16 rounded-sm object-contain sm:block"
          />
          <span className="ml-3 max-w-[8rem] font-serif text-sm font-semibold leading-tight text-gold-light sm:max-w-none sm:text-base md:text-lg">
            Namita&apos;s Femme Fitness
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:text-gold-light",
                isActive(item.href) && "text-gold-light",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ButtonLink href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" className="hidden md:inline-flex">
            Book Now
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-current md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-ink-border/30 bg-ivory px-container-sm py-5 text-ink md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn("py-2 text-sm font-semibold uppercase tracking-[0.18em] transition-colors", isActive(item.href) && "text-gold")}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" variant="secondary" className="mt-2">
              Book Now
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
