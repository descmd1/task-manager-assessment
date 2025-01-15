/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@headlessui/react/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#1a202c', //dark background
        darkText: '#f7fafc', //dark text
      },
    },
  },
  plugins: [],
};
