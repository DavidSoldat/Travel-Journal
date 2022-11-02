/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'main-red': '#F55A5A',
        'main-white': '#DADADA',
        'main-gray': '#2B283A',
        'main-light-gray': '#918E9B',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
