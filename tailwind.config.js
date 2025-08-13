/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7c3eff",
          50:"#f1eaff",100:"#e6d8ff",200:"#cab3ff",300:"#ad8cff",
          400:"#9166ff",500:"#7c3eff",600:"#622fe0",700:"#4a23ad",
          800:"#34187a",900:"#200f4d",
        },
        coal: {
          50:"#f7f7f8",100:"#eeeeef",200:"#dcdcde",300:"#bdbdc1",
          400:"#8a8a92",500:"#6b6b74",600:"#4a4a51",700:"#2f2f35",
          800:"#17171b",900:"#0b0b0d"
        }
      },
      boxShadow: { glass: "0 10px 30px rgba(124,62,255,0.18)" },
      borderRadius: { xl: "1.25rem", "2xl": "1.5rem" },
      keyframes: {
        shine: { to: { backgroundPositionX: "-200%" } },
        blurIn: { from: { filter: "blur(8px)", opacity: "0" }, to: { filter: "blur(0)", opacity: "1" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } }
      },
      animation: {
        shine: "shine 2.2s linear infinite",
        blurIn: "blurIn .5s ease both",
        marquee: "marquee 20s linear infinite"
      }
    },
    container: { center: true, padding: "1rem", screens: { lg: "1120px", xl: "1200px" } }
  },
  plugins: [],
};
