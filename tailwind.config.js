/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aguafina: ["Aguafina Script", "cursive"],
        krylon: ["Krylon"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        140: "140px",
      },
      lineHeight: {
        140: "140px",
      },
      width: {
        821: "821px",
      },
      maxWidth: {
        118: "118px",
        225: "225px",
        291: "291px",
        293: "293px",
        325: "325px",
        330: "330px",
        391: "391px",
        393: "393px",
        420: "420px",
        430: "430px",
        600: "600px",
        640: "640px",
        709: "709px",
        730: "730px",
        850: "850px",
        1100: "1100px",
        1200: "1300px",
        1400: "1400px",
      },
      height: {
        72: "72px",
        118: "118px",
        362: "362px",
        574: "574px",
        616: "616px",
        751: "751px",
        1040: "1040px",
      },
      colors: {
        title: "#191919",
        orange: "#DF6951",
        gray: "#5E6282",
      },
    },
  },
  plugins: [],
};
