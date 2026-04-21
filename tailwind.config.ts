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
        "surface-primary":   "var(--color-surface-primary)",
        "surface-secondary": "var(--color-surface-secondary)",
        "surface-elevated":  "var(--color-surface-elevated)",
        accent:              "var(--color-accent)",
        "text-primary":      "var(--color-text-primary)",
        "text-secondary":    "var(--color-text-secondary)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)",    "sans-serif"],
      },
      maxWidth: {
        content: "var(--content-max-width)",
      },
      spacing: {
        section: "var(--section-gap)",
      },
    },
  },
  plugins: [],
};

export default config;
