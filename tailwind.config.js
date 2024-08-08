/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      textShadow: {},
      colors: {
        "pale-pink": "#F9D8D7",
        // 'ultra-red': '#F26E83',
        "ultra-red": "#c97295",
        // 'tyrian-purple': '#720240',
        "tyrian-purple": "#612141",
        // 'prussian-blue': '#112E49',
        "prussian-blue": "#3676ac",
        // 'lapis-lazuli': '#12629E',
        "lapis-lazuli": "#6390d5",
        /* new: */
        // "dark-purple": "#3f2073",


        'purple': '#291729',
        'dark-red': '#9e2a35',
        'olive-green': '#898930',
        'coral': '#f7874b',
        'light-yellow': '#fec75b',
        'light-gray': '#dce3e4',
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        mont: ["Montserrat-Light"],
        vogue: ["Vogue"],
        brittany: ["Brittany-Signature"],
        poppins: [
          "Poppins",
          "Noto Sans Regular",
          "Helvetica Neue",
          "sans-serif",
          "Arial",
        ],
        latoRegular: ["Lato-Regular"],
        latoBold: ["Lato-Bold"],
        latoLight: ["Lato-Light"],
        aspectRange: ["Aspect-Range"],
        goodnightLondonSans: ["Goodnight-London-Sans"],
        goodnightLondonScript: ["Goodnight-London-Script"],
      },
      keyframes: {
        expand: {
          "0%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(0.98)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
      },
      animation: {
        expand: "expand 1s ease-in-out infinite",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),

    function ({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          textShadow: '0 0 1px #dce3e4', // Custom text shadow
        },
        '.text-glow-lg': {
          textShadow: '0 0 3px #dce3e4', // Larger glow
        },
      }, ['responsive', 'hover']);
    },
  ],
};
