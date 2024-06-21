/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bomb-blast-gray": "#3b3b3b",
        "bomb-blast-yellow": "#f6e05e",
        "bomb-blast-orange": "#fbbf24",
        "bomb-blast-red": "#f87171",
        "bomb-blast-blue": "#60a5fa",
        "bomb-blast-green": "#34d399",
        "bomb-blast-purple": "#8b5cf6",
        "bomb-blast-white": "#ffffff",
        "bomb-blast-black": "#000000",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "bomb-blast": "0 5px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
};
