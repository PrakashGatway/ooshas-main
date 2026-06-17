/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff4f0',
          100: '#ffe4d9',
          200: '#ffc4ab',
          300: '#ff9f7a',
          400: '#f97141',
          500: '#E8512A',
          600: '#d43e18',
          700: '#b03010',
          800: '#8c2610',
          900: '#732211',
        },
        navy: {
          50: '#f0f3f9',
          100: '#dde4f0',
          200: '#b9cae2',
          300: '#8aadd0',
          400: '#5b8dbc',
          500: '#3a6fa5',
          600: '#2a5489',
          700: '#243f68',
          800: '#1A2B4A',
          900: '#12203a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
