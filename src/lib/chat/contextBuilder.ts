import { BUSINESS_INFO, getFullAddress, getTimingsText } from "@/data/business";
import { SERVICES } from "@/data/services";

export function buildBusinessContext() {
  const services = SERVICES.map((service) => service.title).join(", ");

  return [
    `Business: ${BUSINESS_INFO.name}; premium women-only fitness/wellness centre.`,
    `Services: ${services}.`,
    `Hours: ${getTimingsText()}.`,
    `Consultation fee: ${BUSINESS_INFO.consultationFee}.`,
    `Address: ${getFullAddress()}.`,
    `Contact: call ${BUSINESS_INFO.phonePrimary}/${BUSINESS_INFO.phoneSecondary}; WhatsApp ${BUSINESS_INFO.whatsapp}; reviews ${BUSINESS_INFO.googleReviews}; Justdial ${BUSINESS_INFO.justdial}.`,
    "Rules: concise, warm, calm, beginner-friendly; suggest consultation when useful; no body shaming, pressure, diagnosis, risky advice, or result guarantees.",
  ].join("\n");
}
