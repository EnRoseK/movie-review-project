/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        center: true,
        xl: '1100px',
        '2lx': '1100px',
      },
    },
    extend: {},
  },
  plugins: [],
};
