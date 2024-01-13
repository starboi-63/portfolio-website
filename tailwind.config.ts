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
        "blue-bg-dark": "#0D1117",
        "blue-bg-light": "#161B22",
        "red-bg-light": "#221616",
        "grey-light": "#C9D1D9",
        "grey-medium": "#8B949E",
        "grey-dark": "#6E7681",
        "grey-border": "#30363D",
        "blue-accent": "#388BFD",
        "blue-link": "#58A6FF",
        "blue-light": "#79C0FF",
        "blue-lightest": "#A5D6FF",
        "red-accent": "#D47616",
      },
      height: {
        "25px": "25px",
      },
      width: {
        "367px": "367px",
      },
      opacity: {
        "8": "0.08",
      },
    },
  },
  plugins: [],
};
export default config;
