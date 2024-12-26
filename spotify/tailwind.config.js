/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box-shadow-1': ' -6px 0px 9px green'
    },
  },
  plugins: [],
}
}

