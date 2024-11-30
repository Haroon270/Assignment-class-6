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
        myColor:"#00152d",
        myBody:"#012c5e",
        myfoot:"#23292f",
        featurebg:"#f2f3f3",

      },
    },
  },
  plugins: [],
};
export default config;
