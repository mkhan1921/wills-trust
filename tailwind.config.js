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
        primary: "#0078c2",
      },
      fontFamily: {
        spirit: ["New Spirit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
