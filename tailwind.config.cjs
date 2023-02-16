/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    'index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        whitetemplate: '#F8F8FF',
        redtemplate: '#E45858',
        purpletemplate: '#6246EA',
        strokegray: '#EAEAEA',
        colorinput: '#F4F4FF',
        placeholdercolor: '#7C7C8A'
      }
    },
  },
  plugins: [],
}
