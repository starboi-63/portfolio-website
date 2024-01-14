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
        "blue-link": "#58A6FF",
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
