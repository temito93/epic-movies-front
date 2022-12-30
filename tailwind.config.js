module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        s: '2px',
      },
      borderRadius: {
        s: '4px',
      },
      fontSize: {
        s: '8px',
        5.5: '50px',
      },
      colors: {
        'custom-orange-200': '#DDCCAA',
        'custom-red-600': '#E31221',
        'custom-zinc-300': '#D9D9D9',
      },
      backgroundImage: {
        'starting-gradient':
          'linear-gradient(180deg, #000000 10%, rgba(0, 0, 0, 0) 65.21%, rgba(0, 0, 0, 0) 100%)',
        'movies-gradient':
          'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 55.21%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 55.21%, rgba(0, 0, 0, 0) 100%)',
        'top-gradient':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        'footer-gradient':
          'linear-gradient(#181623 0,07%, #191725 50.66%, #0D0B14 96.88%)',
        interstellar: "url('/assets/interstellar.png')",
        lord: "url('/assets/lord.png')",
        royal: "url('/assets/royal.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animation-delay'),
  ],
};
