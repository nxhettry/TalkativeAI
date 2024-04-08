module.exports =  {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        'navColor': 'rgb(2, 0, 36)',
      },
      gradients: {
        'navGradient': ['90deg', 'rgba(2, 0, 36, 1) 0%', 'rgba(52, 52, 60, 1) 44%', 'rgba(75, 75, 79, 1) 100%'],
      },
      fontFamily: {
        'body': ['Roboto', 'sans-serif'],
      },
      width: {
        'drawer': '20vw',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}