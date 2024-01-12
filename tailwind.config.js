/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradation":
          "linear-gradient(91deg, #FF0068 0%, #FF4D27 51%, #FF7A01 73%, #FFD600 100%)",
      },
      colors: {
        "custom-pink": "#FF0069",
        "custom-orange": "#FF7A00",
        "custom-yellow": "#FFD600",
        "custom-gray-100": "#545454",
        "custom-gray-200": "#898989",
        "custom-gray-300": "#C1C1C1",
        "custom-gray-400": "#D9D9D9",
      },
      fontFamily: {
        inter: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
