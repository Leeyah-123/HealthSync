/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sg: '500px',
        sl: '700px',
        md: '860px',
      },
      colors: {
        green: '#00683e',
        lemon: '#CDFB47',
        lightGreen: 'rgba(205,251,71, .2)',
        lightGray1: '#F9FAFC',
        lightGray2: 'rgba(254,254,255, .4)',
        lightGray3: '#AAA8A8',
        bgray: '#f6f6f4',
        btblack: '#0f1412',
        tlgreen: '#cdfb47',
        darkgray: '#eaeaea',
        lightblack: '#4b4948',
        lightGray: '#efefef',
      },
      backgroundImage: {
        greenGradient:
          'linear-gradient(135deg, hsla(75, 96%, 63%, 1) 51%, rgba(205,251,71, .5) 100%)',
      },
    },
  },
  plugins: [],
};
