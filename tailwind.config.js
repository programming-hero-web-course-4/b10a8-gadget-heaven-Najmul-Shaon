/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#9538E2",
        black_color: "#0B0B0B",
      },
    },
  },
  plugins: [require("daisyui")],
};
