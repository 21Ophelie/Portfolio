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
        dark: "#221800",
        light: "#FFE7AD",
        primary: "#C4FCF0", 
        primaryDark: "#C4FCF0", 
        secondary: "#669B90",
        tertiary: "#00755D"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      }  
    }
  },
  plugins: [],
}

