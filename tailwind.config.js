/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "240px",
        sm: "600px",
        md: "768px",
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
        color3: "#1D282F",
        color4: "#2A3942",
        color5: "#015C4B",
        color6: "#666F73",
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
        color3: "#C5CACD",
        color4: "#8696A0",
        color5: "#667681",
      },
    },
  },
  plugins: [],
};
