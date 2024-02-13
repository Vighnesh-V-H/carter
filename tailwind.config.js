/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backGround: '#294b29',
      },
      screens: {
        medium: '1000px',
        small: '450px',
      },
      height: {
        fit: '85vh',
        chat: '84vh',
        chatSm: '78vh',
        message: '90vh',
        texts: '33rem',
        textResp: '22rem',
      },
      width: {
        chat: '50vw',
      },
    },
  },
  plugins: [],
};
