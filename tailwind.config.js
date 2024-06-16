/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*./src/","./index.html"],
  theme: {
    extend: {colors:{
      bg:"#0F1624",
      g1:"#D91CAE",
     
    },
    screens:{
      'xs':"300px",
      'sm': '640px',
      'md':"768px",
      'lg':"1024px",
      'xl':"1280px",
    }},
  },
  plugins: [],
}

