/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#67eeff',
          DEFAULT: '#00BBF0',
        },
        secondary: {
          dark: '#008bbd',
          light: '#FFF',
          DEFAULT: '#F5F5F5',
          dark: '#eee',
        },
        tertiary: {
          light: '#2d2d2d',
          DEFAULT: '#1a1a1a',
          dark: '#000',
        },
      },
    },
  },
  plugins: [],
};
