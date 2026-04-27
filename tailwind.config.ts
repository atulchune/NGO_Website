import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          DEFAULT: '#1E3A8A', // Blue
          dark: '#1E3A8A'
        },
        secondary: {
          light: '#FB923C',
          DEFAULT: '#F97316', // Orange
          dark: '#C2410C'
        },
        background: '#F8FAFC',
        surface: '#FFFFFF',
        text: {
          main: '#1E293B',
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
