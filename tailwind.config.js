module.exports = {
    content: ['./.{html,js}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          'booger-green': '#387478',
        }
      },
    },
    plugins: [],
  }