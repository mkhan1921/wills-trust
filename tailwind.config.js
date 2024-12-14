/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fefcf1",
        background_secondary: "#283938",
        primary: "#0078c2",
      },
      fontFamily: {
        spirit: ["New Spirit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
