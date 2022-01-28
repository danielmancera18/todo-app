module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html"
  ],
  theme: {
    extend: {
      backgroundImage:{
        check: "url('./img/check.png')",
        unchecked: "url('./img/uncheck.png')",
        trash: "url('./img/trash.png')",
        noTrash: "url('./img/no-trash.png')",
      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif']
      },
      maxWidth:{
        'cardSpace': '205px'
      }
    },
  },
  plugins: [],
}