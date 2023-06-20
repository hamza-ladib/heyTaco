/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'handlee':['Handlee', 'cursive'],
        'sans':['Open Sans', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
        'quicksand':['Quicksand', 'sans-serif'],
        'raleway':['Raleway', 'sans-serif'],
        'roboto':['Roboto Mono', 'monospace'] 
      }
    },
  },
  plugins: [],
}



