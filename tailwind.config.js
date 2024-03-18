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
      backgroundImage: {
        "mobile-hero": "url('./src/assets/home/mobile-hero.jpeg')",
        "tablet-hero": "url('./src/assets/home/tablet-hero.jpg')",
        "desktop-hero": "url('./src/assets/home/desktop-hero.jpg')",
        "footer-mobile": "url('./src/assets/general/bg-footer-mobile.svg')",
        "footer-tablet": "url('./src/assets/general/bg-footer-tablet.svg')",
        "footer-desktop": "url('./src/assets/general/bg-footer-desktop.svg')",
        "mobile-banner-one": "url('./src/assets/general/mobile-banner-1.jpg')",
        "tablet-banner-one": "url('./src/assets/general/tablet-banner-1.png')",
        "desktop-banner-one": "url('./src/assets/general/desktop-banner-1.png')",
        "mobile-banner-two": "url('./src/assets/general/mobile-banner-2.jpg')",
        "tablet-banner-two": "url('./src/assets/general/tablet-banner-2.png')",
        "desktop-banner-two": "url('./src/assets/general/desktop-banner-2.png')",
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
