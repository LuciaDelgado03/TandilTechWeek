import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Verde neón de marca (#0cd325) + neutros cálidos
        brand: {
          50: "#e9fdeb",
          100: "#ccf9ce",
          200: "#97f49a",
          300: "#5ef163",
          400: "#2ee843",
          500: "#0cd325",
          600: "#0aa91e",
          700: "#078218",
        },
        earth: "#d6c3a0",
        ink: "#0a0f0c",
        inkSoft: "#101a14",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-chakra)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 90px -20px rgba(12,211,37,0.5)",
        card: "0 10px 40px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
