const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.tsx'],
  mode: 'jit',
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  },
  theme: {
    colors: {
      // add other colors in here

      // import all colors for a wide range of pick
      ...colors,
    },
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
};
