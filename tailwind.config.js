/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
      },
      colors: {
        purple: "#8362F2",
        charcoal: "#C8C8C8",
        jadeGreen: "#8DD4CC",
        darkGrey: "#525252",
      },
      lineHeight: {
        small: "14.32px",
        medium: "16.71px",
        regular: "21.48px",
        large: "57.28px",
        header: "85.92px",
      },
      boxShadow: {
        suggestions:
          "-4px -4px 4px rgba(0, 0, 0, 0.02), 4px 4px 4px rgba(0, 0, 0, 0.02)",
      },
      backgroundPosition: {
        "right-top": "200% -5%",
      },
    },
  },
  plugins: [],
};
