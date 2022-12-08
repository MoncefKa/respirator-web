module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '90': "20rem",
        '128': '32rem',
        '144': '50rem',
      },
      backgroundImage: {
        'hero': "url('./assets/images/oussa.webp')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  
   

}