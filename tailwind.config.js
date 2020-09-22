// const defaultTheme = require("tailwindcss/defaultTheme");
// const plugin = require("tailwindcss/plugin");

module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
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
    // plugin(function ({ addUtilities, addComponents, addBase }) {

      /**
       *    Additional Utilities
       */
      // const additionalUtils = {
      //   ".w-max-content": {
      //     "width": "max-content"
      //   },
      // }

      // addUtilities(additionalUtils, {
      //   variants: [],
      // })

      /**
       *    Components
       */
      // const components = {
      //   ".iframe-parent": {
      //     "position": "relative",
      //     "height": 0,
      //     "padding-bottom": "calc(var(--aspect-ratio-vertical, 9) / var(--aspect-ratio-horizontal, 16) * 100%)",
      //   },
      //   ".iframe-parent > iframe": {
      //     "position": "absolute",
      //     "width": "100%",
      //     "height": "100%",
      //   },
      // }

      // addComponents(components, {
      //   variants: [],
      // })

      /**
       *    Additional Base Styles
       */
      // const additionalBaseStyles = {}

      // addBase(additionalBaseStyles, {
      //   variants: [],
      // })

    // })
  ],
};
