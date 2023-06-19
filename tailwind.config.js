module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 500: "#b5a19c", 700: "#6b4f5b", 900: "#4c241d" },
        blue_gray: { 100: "#d9d9d9", "100_00": "#d9d9d900" },
        red: {
          100: "#fbdbdb",
          300: "#f86b6b",
          A200: "#fa6464",
          "300_6b": "#f778786b",
        },
        amber: { 300: "#ffce56" },
        teal: { 50: "#e5efef" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        griffy: "Griffy",
        habibi: "Habibi",
        inter: "Inter",
        hindkochi: "Hind Kochi",
        galindo: "Galindo",
        jacquesfrancois: "Jacques Francois",
        damion: "Damion",
        hindjalandhar: "Hind Jalandhar",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
      backgroundImage: {
        gradient: "linear-gradient(115deg ,#fa6464,#fbdbdb)",
        gradient1: "linear-gradient(180deg ,#d9d9d900,#f778786b,#f86b6b)",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
