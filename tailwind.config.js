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
        primaryLight: "#71115a", 
        secondary: "#a25107",
        tertiary: "#5b0045"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
       circularLight: 'repeating-radial-gradient(rgba(255,255,255,0.4) 8px, #71115a 5px, #5b0045 100px);'
      } 
    }
  },
  plugins: [],
}

