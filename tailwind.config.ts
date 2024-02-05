import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px"
      },

      colors: {
        accent: "#FF8F9C",
        blackish: "#1b1b1b",
        dark: "#232A3C",
        medium: "#293245",
      },
    },
  },
  plugins: [],
};
export default config;
