/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}', 
    './src/styles/**/*.css'
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'split-purple-gray': "linear-gradient(to bottom, #5E50A1 50%, #E5E5E5 50%);"
      }
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [
    require('daisyui')
  ],
}
