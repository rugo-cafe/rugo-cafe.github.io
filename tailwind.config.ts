import type { Config } from "tailwindcss";



const config: Config = {

  // module.exports = {
  //   experimental: {
  //     optimizeUniversalDefaults: true
  //   }
  // },
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "selector",
  
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url('/texture.svg')"
      },

      dropShadow: { 
        'bt': '-3px 6px 11px rgba(0, 0, 0, 0.25)',
        'dw': '-3px 6px 11px rgba(245, 0, 0, 1'
      },
      fontFamily: {
        general: ["General Sans", 'sans-serif'],
        jomo: ["Jomolhari", 'serif']

      },
      colors: {
        'wbeige': '#FFF7DA',
        'dbeige': '#D8C9A4',
        'main-bg': '#F5E9BF',
        'greenish': '#788374',
        'greeny': '#4B5448',
        'owange': '#AA644D',
        'purp': '#372A39',
        'dpurp': '#1F0F21',
        'bpurp': '#463B47',
        'pinky': '#B8768E'
      },
      animation: {
        blob: "blob 7s infinite",
        fade: "fadeOut 5s ease-in-out",
        'spin-slow': 'spin 5s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite'
      },

      keyframes: {


        click: {
          '0%': {transform: "translate(0px,0px)"},
          '100%': {transform: "translate(0px,5px)"},
          
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -5px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        }
      }
    
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  
};
export default config;


