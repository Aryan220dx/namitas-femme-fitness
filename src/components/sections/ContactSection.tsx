"use client";

import { AlertCircle, CheckCircle2, LoaderCircle, MapPin, MessageCircle, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { BUSINESS_INFO, getAddressLines, getFullAddress, getTelHref, getTimingsText } from "@/data/business";
import { Button } from "../ui/Button";
import { FormInput } from "../ui/FormInput";
import { FormTextarea } from "../ui/FormTextarea";
import { MapEmbed } from "../ui/MapEmbed";
import { SectionWrapper } from "../ui/SectionWrapper";

type InquiryFormValues = {
  name: string;
  email: string;
  message: string;
};

type InquiryFieldErrors = Partial<Record<keyof InquiryFormValues, string>>;

type InquiryApiResponse = {
  success: boolean;
  message: string;
  errors?: InquiryFieldErrors;
};

const INITIAL_FORM_VALUES: InquiryFormValues = {
  name: "",
  email: "",
  message: "",
};

function validateInquiryForm(values: InquiryFormValues) {
  const errors: InquiryFieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please share your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please share your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a short message.";
  }

  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<InquiryFormValues>(INITIAL_FORM_VALUES);
  const [fieldErrors, setFieldErrors] = useState<InquiryFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: keyof InquiryFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "loading") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    };
    const errors = validateInquiryForm(nextValues);

    setFieldErrors(errors);
    setStatusMessage("");

    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setStatusMessage("Please complete the highlighted fields.");
      return;
    }

    setStatus("loading");

    if (process.env.NODE_ENV !== "production") {
      console.log("Submitting inquiry form to /api/inquiry");
    }

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nextValues),
      });
      const result = (await response.json()) as InquiryApiResponse;

      if (!response.ok || !result.success) {
        setFieldErrors(result.errors ?? {});
        setStatus("error");
        setStatusMessage(result.message || "We could not send your inquiry right now. Please try again.");
        return;
      }

      setValues(INITIAL_FORM_VALUES);
      setFieldErrors({});
      setStatus("success");
      setStatusMessage("Thank you. Your inquiry has been sent, and we will respond with care shortly.");
    } catch (error) {
      console.error("Inquiry form submission failed", error);
      setStatus("error");
      setStatusMessage("Something interrupted the inquiry. Please try again or contact us on WhatsApp.");
    }
  }

  return (
    <SectionWrapper id="contact">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-8 text-4xl font-semibold leading-tight md:text-5xl">Begin Your Journey</h2>
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div>
              <FormInput
                label="Your Name"
                name="name"
                placeholder="Enter your full name"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "inquiry-name-error" : undefined}
                required
              />
              {fieldErrors.name ? <p id="inquiry-name-error" className="mt-2 text-sm text-gold">{fieldErrors.name}</p> : null}
            </div>
            <div>
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "inquiry-email-error" : undefined}
                required
              />
              {fieldErrors.email ? <p id="inquiry-email-error" className="mt-2 text-sm text-gold">{fieldErrors.email}</p> : null}
            </div>
            <div>
              <FormTextarea
                label="Message"
                name="message"
                rows={4}
                placeholder="How can we help you?"
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? "inquiry-message-error" : undefined}
                required
              />
              {fieldErrors.message ? <p id="inquiry-message-error" className="mt-2 text-sm text-gold">{fieldErrors.message}</p> : null}
            </div>
            <Button type="submit" size="lg" disabled={status === "loading"} className="disabled:cursor-not-allowed disabled:opacity-70">
              {status === "loading" ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
                  Sending
                </>
              ) : (
                "Send Inquiry"
              )}
            </Button>
            {statusMessage ? (
              <p className="flex items-start gap-2 text-sm leading-6 text-gold" role={status === "error" ? "alert" : "status"} aria-live="polite">
                {status === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
                <span>{statusMessage}</span>
              </p>
            ) : null}
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
