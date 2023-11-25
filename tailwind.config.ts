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
    },
  },
  plugins: [],
}
export default config
