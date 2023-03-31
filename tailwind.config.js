module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      main: '#2C78BA',
      white: '#FFFFFF',
      black: '#000000',
      darkblue: '#3C87DF',
      border: '#cfd9de',
      gray: '#94adc1',
      dGray: '#293E50',
      invisible: '#A3B6C2',
      transparent: 'rgba(0,0,0,0)',
    },
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide')],
}
