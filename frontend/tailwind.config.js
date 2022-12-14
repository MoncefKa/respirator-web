module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '90': "20rem",
        '128': '45rem',
        '144': '95rem',
        '120':"50rem",
        '110':"35rem"
      },
      fontFamily: {
        'custom': ['Orbitron', 'sans-serif'],
    },
      backgroundImage: {
        'hero': "url('./assets/images/deepmind-kKYDdRoTydk-unsplash.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  
   

}