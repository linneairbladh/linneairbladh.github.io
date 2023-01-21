module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "rgb(198,160,45)",
      },
    },
  },
  plugins: [],
};
