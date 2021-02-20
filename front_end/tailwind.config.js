module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize:{
        '2em':'2em',
        '.8em':'.8em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
