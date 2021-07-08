module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "text-primary": "#275C62",
        "text-secondary": "#6B6C6E",
        dark: "#191D28",
        light: "#FFFFFF",
        primary: "#275C62",
        "button-bg": "#2e3241",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
