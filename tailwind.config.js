/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope-Regular", "sans-serif"],
        ManropeBold: ["Manrope-Bold", "sans-serif"],
        manropeExtraBold: ["Manrope-ExtraBold", "sans-serif"],
        ManropeExtraLight: ["Manrope-ExtraLight", "sans-serif"],
        ManropeLight: ["Manrope-Medium", "sans-serif"],
        ManropeMedium: ["Manrope-Medium", "sans-serif"],
        ManropeSemiBold: ["Manrope-SemiBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}