module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  purge: {
    content: ['./src/index.html', './src/**/*.svelte'],
    whitelistPatterns: [/svelte-/],
  },
  theme: {
    interFontFeatures: {
      default: ['calt', 'liga', 'kern'],
      numeric: ['tnum', 'salt', 'ss02'],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-font-inter')({
      importFontFace: true,
      disableUnusedFeatures: true,
    }),
  ],
};
