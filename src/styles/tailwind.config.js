/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",    // for app directory
    "./pages/**/*.{js,ts,jsx,tsx}",  // for pages directory
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // <-- add this for DaisyUI
  daisyui: {
    themes: ["light", "dark"], // optional, you can add more themes
  },
};
