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
        'image-form': "url('../assets/backgroundform.png')",
      },

      colors: {
        'jogga-blue': '#043873',
        'jogga-green': '#00C264',
        'jogga-white': '#FFFFFF',
        'jogga-yellow': '#FFE492',
        'jogga-light-blue': '#4F9CF9',
        'jogga-black-text': '#212529',
        'jogga-gray': '#F8F9FA',
        'Jogga-green-popup': '#21631B',
        'jogga-gray-text-popup': '#F2F2F2',
        'jogga-green-popup': '#21631B',
        'jogga-gray-popup-input': '#FFFFFF',
        'jogga-gray-popup-place-holder': '#D1D1D1',
        'jogga-text-blue-testimonial': '#212529',
      },
    },
  },
  plugins: [],
};
export default config;
