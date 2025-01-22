const defaultTheme = require('tailwindcss/defaultTheme');
const rtlPlugin = require('tailwindcss-rtl');

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    rtlPlugin, // Add RTL plugin
    // require('@tailwindcss/forms'), // Uncomment if needed
    // require('@tailwindcss/typography'), // Uncomment if needed
  ],
};
