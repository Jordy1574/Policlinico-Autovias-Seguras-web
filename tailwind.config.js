/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#421D9D', // Morado Letras
        'brand-dark': '#2E1A5F',   // Morado Botones
        'brand-teal': '#40C3B8',   // Turquesa (lo mantengo para "Seguras")
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}