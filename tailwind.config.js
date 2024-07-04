/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)']
      },
      colors: {
        dark: "#000000",
        light: "#FFFFFF",
        primary: "#2f6674", 
        primaryDark: "#2f6674", 
        secondary: "#71115a",
        tertiary: "#5b0045"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      }  
    }
  },
  plugins: [],
}

