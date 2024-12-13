/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        firstcolor :"#E10914",
        cardcolor_1 :"#FFF3E1",
        cardcolor_2 :"#FFE4E9",
        cardcolor_3 :"#EAD6C0",
      },
      container :{
        center :true,
        padding :{
          DEFFULT : "1rem",
          md:"2rem",
        }
      },

      fontFamily: {
        Playball: ["Playball", "cursive"],
        Kalnia: ["Kalnia", "serif"],
        DMSans: ["DM Sans", "sans-serif"],
    },
    
    },
  },
  plugins: [],
}

