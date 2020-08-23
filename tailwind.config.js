// const defaultTheme = require("tailwindcss/defaultTheme");
// const plugin = require("tailwindcss/plugin");

module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  // },
  // experimental: {
  //   applyComplexClasses: true,
  // },
  purge: ["./docs/**/*.html"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/typography'),
    // plugin(function ({ addUtilities }) {
    //     const additionalUtils = {
    //       ".w-max-content": {
    //         "width": "max-content"
    //       },
    //     }
    //     addUtilities(additionalUtils, {
    //       variants: [],
    //     })
    // })
],
};
