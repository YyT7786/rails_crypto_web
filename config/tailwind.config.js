const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#ecfae5',
          100: '#d0f1c0',
          200: '#afe695',
          300: '#8cdc68',
          400: '#6dd440',
          500: '#4bcc00',
          600: '#38bc00',
          700: '#0ea700',
          800: '#009300',
          900: '#007100',
        }
      },
      screens: {
        '2lg': '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
