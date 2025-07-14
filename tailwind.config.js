const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002228",
        secondary: "#0ff1f6",
        foreground: "#07292f",
        background: "#FFFFFF",
        border: "#E2E8F0",
        accent: "#183a40",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
