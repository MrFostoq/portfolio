/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    'primary': '#171628',
    'custom-blue': '#1abee9',
    'custom-pink': '#f15369',
  },
}

module.exports = {
  content: ['./*.html'],
  theme: {
    // colors: colors,
    extend: {
      colors
    },
  },
  plugins: [],
}
