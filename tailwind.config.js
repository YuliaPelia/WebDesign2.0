const defaultTheme = require('tailwindcss/defaultTheme');
const sans_serif = 'sans-serif';
module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans': [ 'IBM Plex Sans', sans_serif],
      'mono': ['IBM Plex Mono', sans_serif],
      'gotham': ['Gotham', sans_serif]

    },

    colors: {
        'white': '#fff',
        'purple': "#653cd9",
        'light': '#faeee6',
        'dark': '#1a1a1a',

    },
    letterSpacing: {
      tightest: '-.01em',

    },
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      spacing: {
        0.75: '0.19rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.njk', './src/**/*.svg'],
};
