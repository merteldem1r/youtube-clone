/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#fcf1e5",
        orange: "#e87d30",
        footer: "#292524",
        dash: "#FFEAD0",
        dashDark: "#FFDDB2",
        simple: "#840000",
        luxury: "#161616",
        rugged: "#115e59",
      },
      backgroundImage: {
        homeImg: "url('/img/home-3.jpg')",
        aboutImg: "url('/img/about.jpg')",
      },
      boxShadow: {
        footer: "rgba(17, 12, 46, 0.15) 0px 10px 15px 0px;",
      },
    },
  },
  plugins: [],
};
