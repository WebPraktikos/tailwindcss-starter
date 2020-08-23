module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "build" ? [require("cssnano")] : []),
  ],
};
