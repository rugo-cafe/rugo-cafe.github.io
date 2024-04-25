import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "selector",
  
  theme: {
    extend: {
      dropShadow: { 
        'bt': '-3px 6px 11px rgba(0, 0, 0, 0.25)',
        'dw': '-3px 6px 11px rgba(245, 0, 0, 1'
      },
      fontFamily: {
        general: ["General Sans"],
        gambetta: ["Gambetta"]
      },
      colors: {
        'main-bg': '#F5E9BF',
        'greenish': '#788374',
        'owange': '#AA644D',
        'purp': '#372A39',
        'dpurp': '#1F0F21'
      },
    },
  },
  plugins: [],
  
};
export default config;
