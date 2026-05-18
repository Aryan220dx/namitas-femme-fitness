import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#735c00", light: "#D4AF37", bright: "#E9C349", pale: "#FFE088" },
        ivory: {
          DEFAULT: "#FAFAEB",
          dim: "#DBDBCD",
          low: "#F4F5E6",
          mid: "#EFEFE0",
          high: "#E9E9DB",
          highest: "#E3E3D5",
          bright: "#FFFFFF",
        },
        ink: { DEFAULT: "#1B1C14", muted: "#4D4635", outline: "#7F7663", border: "#D0C5AF" },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["64px", { lineHeight: "72px", letterSpacing: "0", fontWeight: "700" }],
        "display-sm": ["40px", { lineHeight: "48px", letterSpacing: "0", fontWeight: "700" }],
        h1: ["48px", { lineHeight: "56px", fontWeight: "600" }],
        h2: ["32px", { lineHeight: "40px", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        label: ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
        caption: ["12px", { lineHeight: "16px", letterSpacing: "0.03em", fontWeight: "500" }],
      },
      spacing: {
        section: "120px",
        gutter: "24px",
        container: "80px",
        "container-sm": "20px",
      },
      maxWidth: { site: "1440px" },
      boxShadow: {
        card: "0 10px 30px -10px rgba(168, 159, 145, 0.3)",
        hover: "0 20px 60px -15px rgba(168, 159, 145, 0.45)",
        gold: "0 4px 20px rgba(212, 175, 55, 0.2)",
        button: "0 8px 24px rgba(115, 92, 0, 0.25)",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
