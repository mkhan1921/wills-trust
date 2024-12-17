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
        georgia: ["Georgia", 'Times New Roman', "Times", "serif"]
      },
      keyframes: {
        fadeIn: {
          "0%": { bottom: "0", opacity: "0" },
          "100%": { bottom: "30px", opacity: "1" },
        },
        fadeOut: {
          "0%": { bottom: "30px", opacity: "1" },
          "100%": { bottom: "0", opacity: "0" },
        },
      },
    },
    animation: {
      "fade-in-out": "fadeIn 0.5s ease-out, fadeOut 0.5s ease-in 2.5s",
    },
  },
  plugins: [],
};
