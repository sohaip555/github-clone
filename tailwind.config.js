/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    extend: {
      container: {
        fileExplorer: {
          width: '100%', // Or adjust width as needed
          maxWidth: '960px', // Or adjust max width as needed
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

