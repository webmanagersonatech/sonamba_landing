import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // 👈 added here
      },
      colors: {
        maroon: {
          DEFAULT: "#0b3370ff",
          600: "#082755ff",
          700: "#051f46ff",
        },
        grayText: "#73737eff",
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)",
      },
      
    },
  },
  plugins: [],
};

export default config;
