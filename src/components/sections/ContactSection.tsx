"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { BUSINESS_INFO, getAddressLines, getFullAddress, getTelHref, getTimingsText } from "@/data/business";
import { Button } from "../ui/Button";
import { FormInput } from "../ui/FormInput";
import { FormTextarea } from "../ui/FormTextarea";
import { MapEmbed } from "../ui/MapEmbed";
import { SectionWrapper } from "../ui/SectionWrapper";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  return (
    <SectionWrapper id="contact">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-8 text-4xl font-semibold leading-tight md:text-5xl">Begin Your Journey</h2>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <FormInput label="Your Name" name="name" placeholder="Enter your full name" required />
            <FormInput label="Email Address" name="email" type="email" placeholder="Enter your email address" required />
            <FormTextarea label="Message" name="message" rows={4} placeholder="How can we help you?" required />
            <Button type="submit" size="lg">
              Send Inquiry
            </Button>
            {status === "sent" ? <p className="text-sm text-gold">Thank you. We will respond with care shortly.</p> : null}
          </form>
        </div>
        <div className="flex flex-col gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Connect With Us</h3>
            {[
              { icon: MapPin, text: getFullAddress(), href: BUSINESS_INFO.googleReviews, external: true },
              { icon: Phone, text: BUSINESS_INFO.phonePrimary, href: getTelHref(BUSINESS_INFO.phonePrimary), external: false },
              { icon: Phone, text: BUSINESS_INFO.phoneSecondary, href: getTelHref(BUSINESS_INFO.phoneSecondary), external: false },
              { icon: MessageCircle, text: "Chat via WhatsApp", href: BUSINESS_INFO.whatsapp, external: true },
            ].map(({ icon: Icon, text, href, external }) => (
              <a
                key={text}
                href={href}
                className="group flex items-center gap-4 text-ink"
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-light/20 transition-colors group-hover:bg-gold-light">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="leading-7">{text}</span>
              </a>
            ))}
            <p className="pl-16 text-sm leading-6 text-ink-muted">{getTimingsText()}</p>
            <p className="pl-16 text-sm leading-6 text-ink-muted">Consultation fee: {BUSINESS_INFO.consultationFee}</p>
          </div>
          <address className="sr-only">{getAddressLines().join(", ")}</address>
          <MapEmbed src={BUSINESS_INFO.mapsEmbed} />
        </div>
      </div>
    </SectionWrapper>
  );
}
