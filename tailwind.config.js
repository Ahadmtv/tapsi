/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        tapsi: "#ff5722"
      },
      fontFamily: {
        'vazir':"vazir",
        'vazir-bold':'vazir-bold',
        'vazir-light':'vazir-light',
        'vazir-thin':'vazir-thin',
        'vazir-medium':'vazir-medium'
      },
    },
  },
  plugins: [],
}

