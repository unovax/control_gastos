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
          'DEFAULT': '#2A153D',
          'text': '#FFFFFF',
          'hover': {
            'DEFAULT': '#20102E',
            'text': '#FFFFFF',
          },
          'light': '#FFFFFF',
          'dark': '#C4C4C4',
          'darker': '#828282',
          'darkest': '#333333',
        },
        'danger': {
          'DEFAULT': '#551117',
          'text': '#FFFFFF',
          'hover': {
            'DEFAULT': '#440D12',
            'text': '#FFFFFF',
          },
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