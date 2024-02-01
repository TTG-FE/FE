/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradation":
          "linear-gradient(91deg, #FF0068 0%, #FF4D27 51%, #FF7A01 73%, #FFD600 100%)",
        "custom-gradation-180":
          "linear-gradient(180deg, #FF0068 0%, #FF4D27 71%, #FF7A01 100%)",
      },
      boxShadow: {
        "custom-box-shadow": "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
        "custom-box-shadow-pink": "0px 0px 10px 0px #FF0069",
        "custom-button-shadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
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
      screens: {
        "phone":"376px",
      },
    },
  },
  plugins: ["./src/styles/index.css"], // 'index.css'에 @layer utilities로 선언된 클래스를 사용할 수 있도록 설정
};
