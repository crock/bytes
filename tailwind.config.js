module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      display: ['Kelson Sans', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    screens: {
      'sm': '568px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {}
  },
  variants: {},
  plugins: []
}