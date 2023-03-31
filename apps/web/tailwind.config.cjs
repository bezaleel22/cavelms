/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("autoprefixer")],
  daisyui: {
    themes: ["light", "dark", "night", "winter"],
    darkTheme: "night",
  },
};

