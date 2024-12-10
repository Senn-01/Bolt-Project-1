/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#101820',
        'brand-gold': '#D3BC8D',
        'brand-white': '#FFFFFF'
      }
    }
  },
  plugins: []
};
