module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      main: 'rgb(29, 155, 240)',
      white: '#FFFFFF',
      black: '#000000',
      darkblue: '#3C87DF',
      border: '#cfd9de',
      gray: '#94adc1',
      dGray: '#293E50',
      invisible: '#A3B6C2',
      transparent: 'rgba(0,0,0,0)',
      silver: '#e9ecef',
      hover: 'rgba(0,0,0,0.1)',

      lighterIndigo: '#3C6478',
      indigo: '#0D3D56',
      darkerIndigo: '#0C374D',
      darkestIndigo: '#093145',

      lighterAlice: '#43ABC9',
      alice: '#1496BB',
      darkerAlice: '#1287A8',
      darkestAlice: '#107896',

      lighterCoral: '#F58B4C',
      coral: '#F26D21',
      darkerCoral: '#DA621E',
      darkestCoral: '#C2571A',

      lighterRuby: '#CD594A',
      ruby: '#C02F1D',
      darkerRuby: '#AD2A1A',
      darkestRuby: '#9A2617',
    },
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide')],
}
