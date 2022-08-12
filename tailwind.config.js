/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {

    extend: {
      colors: {
        "pale-pink": "#F9D8D7",
        "ultra-red": "#F26E83",
        "tyrian-purple": "#720240",
        "prussian-blue": "#112E49",
        "lapis-lazuli": "#12629E",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        vogue: ["Vogue"],
        brittany: ["Brittany-Signature"],

      },
      keyframes: {
        expand: {
            '0%': {
                transform: 'scale(1.1)',
            },
            '50%': {
                transform: 'scale(0.98)',
            },
            '100%': {
                transform: 'scale(1.1)',
            }
        }
    },
    animation: {
        expand: 'expand 1s ease-in-out infinite',
    },
    },
  },
  plugins: [],
};
