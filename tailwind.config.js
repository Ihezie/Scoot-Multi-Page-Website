/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FCB72B",
        "dark-navy": "#495567",
        "dim-gray": "#939CAA",
        "light-gray": "#E5ECF4",
        snow: "#F2F5F9",
        "light-yellow": "#FFF4DF",
        "dark-gray": "#333A44",
      },
      screens: {
        "1.5xl": "1440px",
        xs: "376px",
      },
      fontFamily: {
        "space-mono": "Space Mono, monospace",
      },
    },
  },
  plugins: [],
};
