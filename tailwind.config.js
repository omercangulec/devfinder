/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        "light-mode-grey": "rgba(105, 124, 154, 1)", //#697C9A;
        "light-mode-grey-blue": "rgba(75, 106, 155, 1)", // #4B6A9B;
        "light-mode-dark-grey": "rgba(43, 52, 66, 1)", // #2B3442;
        "light-mode-light-grey": "rgba(246, 248, 255, 1)", //#F6F8FF;
        "light-mode-white-2": "rgba(254, 254, 254, 1)", //#F6F8FF;
        "dark-mode-white": "rgba(215, 220, 239, 1)", // #FEFEFE;

        "bg-light-mode": "rgba(215, 220, 239, 1)", // #FEFEFE;
        "bg-dark-mode": "#131c2f",
        "primary-blue": "#1d2a47",
        "secondary-blue": "#0279ff",
      },
    },
  },
  plugins: [],
};
