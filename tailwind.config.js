/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        circluarWeb: ["circular-web", "sans-serif"],
        general: ["general", "sans-serif"],
        robertMed: ["robert-medium", "sans-serif"],
        robert: ["robert-regular", "sans-serif"],
        zentry: ["zentry-regular", "sans-serif"],
      },
      colors:{
        blue:{
          50:"#DFDFF0",
          75:"#DFDFF2",
          100:"#F0F2FA",
          200:"#101010",
          300:"#4FB7DD"
        },
        violet:{
          300:"#5724FF"
        },
        yellow:{
          100:"#8E983F",
          300:"#EDFF66"
        }
      }
    },
  },
  plugins: [],
}