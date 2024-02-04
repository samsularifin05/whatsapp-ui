/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        color2: "#212E35",
        color1: "#111B21",
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
