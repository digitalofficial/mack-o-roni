import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: "#FCD34D",
        orange: "#F97316",
        dark: "#1C1917",
        cream: "#FFFBEB",
      },
    },
  },
  plugins: [],
};

export default config;
