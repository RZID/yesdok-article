module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '80px': '80px',
        '100px': '100px',
        '250px': '250px',
        '300px': '300px',
      },
      backgroundColor: {
        darkslategray: '#204668',
        peru: '#c49f47',
        darkPeru: '#a48334',
        darkGray: '#4d4d4d',
        darkerGray: '#333333',
      },
      borderColor: {
        darkslategray: '#204668',
      },
      textColor: {
        darkslategray: '#204668',
        darkGray: '#4d4d4d',
      },
      fontFamily: {
        lato: "'Lato', serif",
        cabin: "'Cabin', serif",
        lora: "'Lora', serif",
        roboto: "'Roboto', serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
