module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF3F18',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
