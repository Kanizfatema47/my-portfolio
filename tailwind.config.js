module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#3aafa9',
        secondary: '#2b7a78',
      }
     
    }, 
     fontFamily: {
      sanns: ['Londrina Outline', 'cursive'],
      },
   
    

  },
  plugins: [require("daisyui")],
}
