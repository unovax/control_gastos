/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          'DEFAULT': '#F2C94C',
          'text': '#000000',
          'light': '#FFFFFF',
          'dark': '#C4C4C4',
          'darker': '#828282',
          'darkest': '#333333',
        },

      }
    },
  },
  plugins: [],
}