/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins'
      }
    },
    colors: {
      green: '#1D6126',
    },
  },
  plugins: [],
}