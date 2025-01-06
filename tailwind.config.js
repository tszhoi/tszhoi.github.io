/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",               // All HTML files in the root directory
    "./src/**/*.{js,ts}",     // Any JS or TS files in the `src` folder
    "./components/**/*.html", // Add paths for other directories if needed
  ],
  theme: {
    extend: {
      colors: {
        highlight: {
          blue: "#2C2CFF"
        }
      }
    },
  },
  plugins: [],
};
