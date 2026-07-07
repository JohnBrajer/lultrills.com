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
        gold: "#C5A26F",
        "gold-dark": "#8B6F3E",
        black: "#0a0a0a",
        "off-white": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
export default config;
