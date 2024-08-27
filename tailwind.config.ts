import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
      fontWeight: {
        primary: "500",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      transparent: "#0000",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#0F0F0F",
      disabled: "#A0A0A0",
      gold: "#EED5A4",
    },
    fontSize: {
      heading1: "4.375rem",
      heading2: "3.875rem",
      heading3: "1.625rem",
      heading4: "1.5rem",
      heading5: "1.25rem",
      "body-big": "1.125rem",
      "body-medium": "1rem",
      "body-small": "0.813rem",
      "body-smaller": "0.75rem",
    },
  },
  plugins: [require("tailwindcss-rtl"), require("@headlessui/tailwindcss")],
};

export default config;
