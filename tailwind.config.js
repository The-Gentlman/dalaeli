/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Samim", ...defaultTheme.fontFamily.sans],
      serif: ["Samim", ...defaultTheme.fontFamily.serif],
      mono: ["Samim", ...defaultTheme.fontFamily.mono],
      fd: ["Samim-FD", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      fontSize: {
        xxs: ["0.625rem", "0.75rem"],
      },
      colors: {
        blue: { 500: "#0717a8", 600: "#01094c" },
        primary: "#F1884D",
        "gray-1": "#F6F6F6",
        "gray-l-1": "#F6F6F6",
        "gray-l-2": "#E6E6E6",
        "gray-l-3": "#D6D6D6",
        "gray-d-2": "#747474",
        "gray-d-3": "#ADADAD",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        page: "calc(100vh - 6rem)",
      },
      lineHeight: {
        4.5: "1.112rem",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      borderRadius: {
        base: "10px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
};
