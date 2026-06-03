import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 35s linear infinite",
      },
      colors: {
        primary: {
          light: '#1D4ED8',
          DEFAULT: '#0B1F52', // Navy
          dark: '#061338'
        },
        secondary: {
          light: '#3B82F6',
          DEFAULT: '#1D4ED8', // Royal Blue
          dark: '#1E3A8A'
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E6C657',
        },
        background: '#FAF8F3', // Cream
        surface: '#FFFFFF',
        muted: '#F5F6F8', // Soft Gray
        text: {
          main: '#0B1F52', // Navy for standard text
          muted: '#64748B'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
