export type BusinessAddress = {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
};

export type BusinessTimings = {
  morning: string;
  evening: string;
};

export type BusinessInfo = {
  name: string;
  phonePrimary: string;
  phoneSecondary: string;
  whatsapp: string;
  justdial: string;
  googleReviews: string;
  address: BusinessAddress;
  timings: BusinessTimings;
  consultationFee: string;
  mapsEmbed: string;
};

export const BUSINESS_INFO: BusinessInfo = {
  name: "Namita's Femme Fitness",

  phonePrimary: "+91 7892715276",

  phoneSecondary: "+91 9986109180",

  whatsapp:
    "https://wa.me/917892715276?text=Hello%20Namita's%20Femme%20Fitness,%20I%20would%20like%20to%20know%20more%20about%20your%20programs.",

  justdial:
    "https://www.justdial.com/Dharwad/Namitas-Femme-Fitness-Fitness-And-Wellness-Centre-Beside-Mandaar-Hotel-P-B-Road/0836PX836-X836-250325200213-A1L2_BZDET",

  googleReviews: "https://share.google/0ny0TGu3MEZNTFVju",

  address: {
    line1: "Namita's Femme Fitness Fitness and Wellness Centre",
    line2: "Beside Mandaar Hotel",
    line3: "Bhagini Samaj Compound",
    line4: "Behind Basappa Khanavali",
    line5: "P B Road",
    city: "Dharwad",
    state: "Karnataka",
    pincode: "580001",
    country: "India",
  },

  timings: {
    morning: "6:00 AM – 1:00 PM",
    evening: "4:00 PM – 8:00 PM",
  },

  consultationFee: "₹200",

  mapsEmbed: "",
};

export function getAddressLines() {
  const { address } = BUSINESS_INFO;
  return [
    address.line1,
    address.line2,
    address.line3,
    address.line4,
    address.line5,
    `${address.city}, ${address.state} ${address.pincode}`,
    address.country,
  ];
}

export function getFullAddress() {
  return getAddressLines().join(", ");
}

export function getTimingsText() {
  return `Morning: ${BUSINESS_INFO.timings.morning}; Evening: ${BUSINESS_INFO.timings.evening}`;
}

export function getTelHref(phone: string) {
  return `tel:${phone}`;
}
