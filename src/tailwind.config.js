module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'background-image-color': '/assets/background/backgroundImageColor.png',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
