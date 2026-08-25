import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F172A",
          50: "#f4f6fa",
          100: "#e4e8f0",
          200: "#c3cbdc",
          300: "#94a1bf",
          400: "#5f6f99",
          500: "#3d4b71",
          600: "#2a3554",
          700: "#1c2540",
          800: "#141c33",
          900: "#0F172A",
          950: "#080c17",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#fbf6e7",
          100: "#f5eac6",
          200: "#ecd591",
          300: "#e1bd5e",
          400: "#d9b346",
          500: "#D4AF37",
          600: "#b1902a",
          700: "#8a6f22",
          800: "#6b551e",
          900: "#57451c",
        },
        cream: {
          DEFAULT: "#FAFAF9",
          100: "#FAFAF9",
          200: "#F2F1ED",
        },
        maroon: {
          DEFAULT: "#6B1E23",
          50: "#fbeceb",
          600: "#6B1E23",
          700: "#54171b",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "chart-grid":
          "linear-gradient(rgba(212,175,55,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(15, 23, 42, 0.25)",
        card: "0 10px 30px -10px rgba(15, 23, 42, 0.12)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "spin-slow": "spin 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
