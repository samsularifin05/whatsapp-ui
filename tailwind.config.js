/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-chat":
          'linear-gradient(rgba(17, 27, 33, 0.10), rgba(17, 27, 33, 0.10)), url("./src/assets/img/bg-chat.png")',
      },
      screens: {
        xs: "360px",
        sm: "630px",
        md: "768px",
        ...defaultTheme.screens,
      },
      height: {
        "80vh": "80vh",
        "85vh": "85h",
        "90vh": "90h",
      },
      width: {
        70: "70%",
      },
      maxWidth: {
        70: "70%",
      },
      backgroundColor: {
        color2: "#212E35",
        color1: "#111B21",
        color3: "#1F2C33",
        color4: "#2A3942",
        colorActive: "#04A784",
        chatActive: "#2A3942",
      },
      borderRadius: {
        8: "8px",
      },
      borderColor: {
        color1: "#222D34",
        color2: "#303D45",
      },
      textColor: {
        color1: "#E9EDEF",
        colorActive: "#04A784",
        color2: "#76868F",
      },
    },
  },
  plugins: [],
};
