import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: "#EEF0FE",
            100: "#D6DAFD",
            200: "#AEB6FB",
            300: "#8593F8",
            400: "#5D6FF5",
            500: "#1D28F2",
            600: "#1835D9",
            700: "#1F34A6",
            800: "#18277E",
            900: "#111A54",
            950: "#0A1136",
          },
          red: {
            DEFAULT: "#F20C36",
            50: "#FEECF0",
            100: "#FDC9D3",
            200: "#FB93A6",
            300: "#F95C7A",
            400: "#F72E52",
            500: "#F20C36",
            600: "#D90B30",
            700: "#B80928",
          },
          pink: "#D91872",
          navy: "#111A54",
          "gray-light": "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Montserrat", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "card": "0 4px 6px -1px rgba(15, 23, 42, 0.04), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.08)",
        "blue-glow": "0 12px 30px -8px rgba(29, 40, 242, 0.35)",
        "red-glow": "0 12px 30px -8px rgba(242, 12, 54, 0.30)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(17,26,84,0.92) 0%, rgba(31,52,166,0.82) 45%, rgba(24,53,217,0.72) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
