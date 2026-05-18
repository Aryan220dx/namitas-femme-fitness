import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function WhatsAppFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end sm:flex">
      <a
        href={BUSINESS_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-light text-ink shadow-hover transition-transform hover:scale-105"
        aria-label="Chat with Namita's Femme Fitness on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-gold-light opacity-20 motion-safe:animate-ping" />
        <MessageCircle className="relative h-6 w-6" aria-hidden />
        <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap bg-black px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity group-hover:opacity-100">
          Chat With Us
        </span>
      </a>
    </div>
  );
}
