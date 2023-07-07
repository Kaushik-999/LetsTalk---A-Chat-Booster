/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'chatMessageMaxWidth':'60%'
      }
    },
  },
  plugins: [],
};