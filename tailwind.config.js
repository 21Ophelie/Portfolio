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
        tertiary: "#5b0045",
        other:"#a29607"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
       circularLight: 'repeating-radial-gradient(#5b0045, #5b0045 10px, #000000 100px);',
       lgCircularLight: 'repeating-radial-gradient(#5b0045, #5b0045 10px, #000000 70px);'
      } 
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      
      lgmin: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    }
  },
  plugins: [],
}

