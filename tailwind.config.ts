import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        spaceBlue: '#D2D8F9'
      },
      backgroundImage: {
        'home': "url('/assets/home/background-home-desktop.jpg')",
        'destination': "url('/assets/destination/background-destination-desktop.jpg')",
        'crew': "url('/assets/crew/background-crew-desktop.jpg')",
        'technology': "url('/assets/technology/background-technology-desktop.jpg')",
        'homeMobile': 'url(/assets/home/background-home-mobile.jpg)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'open-menu': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'close-menu': {
          from: {right: '-100' },
          to: {right: '-100%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-out': 'fade-out 0.5s ease-in-out',
        'open-menu': 'open-menu 0.5s ease-in-out',
        'close-menu': 'close-menu 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config
