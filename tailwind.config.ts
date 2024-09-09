import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://i.pinimg.com/564x/82/63/ad/8263adb64dede4a274186d4954bc950d.jpg')",
      },
      fontFamily: {
        sans: ['Chakra Petch'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['forest'], // Choose themes you want to include
  },
};

export default config;
