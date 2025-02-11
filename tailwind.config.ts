import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import { Outfit } from "next/font/google";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      'Outfit': ['Outfit', "sans-serif"],
    }
  },
  plugins: [
    require("daisyui"),
  ],
} satisfies Config;
