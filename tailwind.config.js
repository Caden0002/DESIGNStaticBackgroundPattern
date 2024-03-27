/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        'sm': '576px',
        'md': '1280px',
        'lg': '1440px',
        'xl': '1900px',
      },

      fontFamily: {
        OldSTT: ['Old Standard TT', 'serif'],
      },

      colors: {
        // Define your color variables here
        textColorPrimary: '#9A9A9A',
        textColorSecondary: '#242424', //border color
        textColorTertiary:  '#8A8A8A',
        backgroundColorPrimary: '#161616',
        backgroundColorSecondary: '#1a1a1a', //border fill color
        // backgroundColorTertiary: '#351410',
        // backgroundColorQuaternary: '#F6F6EB',
      },

    },
  },
  plugins: [],
};
