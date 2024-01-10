import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue-bg-dark': '#0D1117',
        'blue-bg-light': '#161B22',
        'red-bg-dark': '#221616',
        'grey-light': '#C9D1D9',
        'grey-medium': '#8B949E',
        'grey-dark': '#6E7681',
        'grey-border': '#30363D',
        'blue-accent': '#388BFD',
        'blue-link': '#58A6FF',
        'blue-light': '#79C0FF',
        'blue-lightest': '#A5D6FF',
        'red-accent': '#D47616',
      },
      height: {
        '50px': '50px',
        '150px': '150px',
      },
    },
  },
  plugins: [],
}
export default config
