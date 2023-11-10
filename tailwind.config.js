/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        green: "#149930",
        yellow: "#78AA17",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}