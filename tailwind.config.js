/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': { 'max': '640px'},
      'tablet': {'min': '640px', 'max': '767px'},
      'surface': {'min': '768px', 'max': '1024px'},
      'laptop': {'min': '1024px', 'max': '1279px'},
      'desktop': {'min': '1280px', 'max': '1536px'},
      'lg-desktop': {'min': '1536px'},
    },
  },

  plugins: [],
}
