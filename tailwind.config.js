/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      sans:["Poppins", "sana-serif"],
      cursive:["Pacifico"," serif"],
      averia: ["Averia Serif Libre", "serif"],

    },
    colors:{
      primary:"#de2c4d",
      secondary:"#fb923c",
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"2rem",
        lg:"4rem",
        xl:"5rem",
        "2xl":"6rem",
      }
    },
  },
  },
  plugins: [],
}

