/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,astro}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#2036FF',
        'dark': '#0f0f0f',
      }
    },
  },
  plugins: [],
}
