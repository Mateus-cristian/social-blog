/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        text: ["Heebo", "sans-serif"],
        title: ["Poppins", "sans-serif"],
        especial: ["Pacifico", "cursive"],
      },
      colors: {
        "blue-500": "#4DBCE9",
        "blue-700": "#26ADE4",
        "grey-500": "#777777",
        "grey-700": "#444444",
        "grey-400": "#AAAAAA",
        pantone: "#F1F1F1",
        black: "#222222",
      },
    },
  },
  plugins: [],
};
