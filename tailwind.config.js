const { EColors: colors } = require('./src/enums')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      sans: ['Helvetica Now Text', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      ...colors,
      lightGrey: '#e5e5e5',
      grey: '#757575',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {},
  },
  safelist: Object.keys(colors).map((color) => 'after:bg-' + color),
  plugins: [],
}
