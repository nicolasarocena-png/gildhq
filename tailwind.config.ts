import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: "#1B2632",
          800: "#2A3A4A",
          700: "#3A5060",
          300: "#8FA3B3",
          100: "#D8E0E8"
        },
        teal: {
          500: "#4A9B9B",
          400: "#5DB5B5"
        },
        white: "#FFFFFF"
      },
      maxWidth: {
        content: "1200px"
      },
      borderRadius: {
        card: "16px"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        marquee: "marquee 70s linear infinite",
        "marquee-mobile": "marquee 45s linear infinite"
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        serif: ["var(--font-dm-serif)", "DM Serif Display", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
