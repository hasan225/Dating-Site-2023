/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'xmd': {'max': '889px'},
      // => @media (max-width: 889px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xsm': {'max': '530px'},
      // => @media (max-width: 530px) { ... }
    },
    extend: {  colors: {
        primary: "azure",
        secondary: "#286f6c",
        secondaryWhite: "#e7e7e7",
        pyellow: "#f5c32c",
        porange: "#fca61f",
        pblack: "#242d49",
        pgray: "rgba(36, 45, 73, 0.65)",
        hrColor: "#cfcdcd",
        cardColor: "rgba(255, 255, 255, 0.64)",
        buttonBg: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
        inputColor: "rgba(40, 52, 62, 0.07)",
        photo: "#4CB256",
        video: "#4A4EB7",
        location: "#EF5757",
        shedule: "#E1AE4A",
      },
    },
  },
  plugins: [],
}
