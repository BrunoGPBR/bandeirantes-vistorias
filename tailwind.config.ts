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
        navy: {
          50: "#E6EAF0",
          100: "#C2CCD9",
          200: "#9AA9BE",
          300: "#7386A3",
          400: "#576C8E",
          500: "#3B5278",
          600: "#2A3E60",
          700: "#1B2C48",
          800: "#14223A",
          900: "#0D182A",
        },
        brand: {
          red: "#E30613",
          "red-hover": "#C40510",
          navy: "#0D182A",
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
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "red-glow": "0 0 20px rgba(227, 6, 19, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
