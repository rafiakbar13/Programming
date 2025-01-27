/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        men: "#002772",
        women: "#720060",
      },
      backgroundImage: {
        hero: 'url("/src/assets/bg-pattern.svg")',
      },
    },
  },
  plugins: [],
};
