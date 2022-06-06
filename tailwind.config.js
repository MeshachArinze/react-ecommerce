module.exports = {
  content: [
    "./src/components/Navbar/**/*.{js, jsx}",
    "./src/pages/**/*.{js, jsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      spacing: {
        sm: "3px",
        md: "5px",
        lg: "16px",
        xl: "24px",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        lightOrange: "#ff7849",
        darkRose: "rgb(225 29 72)",
        priPink: "#ff0099",
        lightGray: "#f9fafb",
        darkBlue: "hsl(228,39%, 23%)",
        darkGrayishBlue: "hsl(227 12%, 13%)",
        veryDarkBlue: "hsl(223, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        layout: "url('./src/interior/layout.jpg')",
        speaker: "url('./src/interior/speakerset.jpg')",
        bedwhite: "url('./src/interior/bedwhite.jpg')",
      },
    },
  },
  plugins: [],
  important: true,
};
