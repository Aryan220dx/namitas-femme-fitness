import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { BUSINESS_INFO } from "@/data/business";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} | Women-Only Wellness Studio`,
  description:
    "A premium women-only fitness and wellness sanctuary for personal training, yoga, clinical fitness, postpartum care, senior fitness, and restorative wellness.",
  openGraph: {
    title: BUSINESS_INFO.name,
    description: "Luxury women-only fitness and wellness studio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-sm bg-black px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
        <ChatWidget />
      </body>
    </html>
  );
}
