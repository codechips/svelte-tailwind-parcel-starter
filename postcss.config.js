const plugins =
  process.env.NODE_ENV === 'production'
    ? ['tailwindcss', 'autoprefixer', '@fullhuman/postcss-purgecss']
    : ['tailwindcss'];

module.exports = {plugins};
