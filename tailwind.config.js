/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: ['20px'],
      base: ['24px'],
      lg: ['30px'],
      xl: ['40px'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    margin: {
      '15': '15px',
      '30': '30px',
      '60': '60px',
      '100': '100px',
      '880': '880px',
      '1030': '1030px',
      '1150': '1150px',
    },
    width: {
      '450': '450px',
      '120': '120px',
      '100': '100px',
      '260': '260px',
      '180': '180px',
      '450': '450px',
      '450': '450px',
    },
    height: {
      '60': '60px',
      '40': '40px',
      '450': '450px',
      '450': '450px',
      '450': '450px',
      '450': '450px',
      '450': '450px',
    }
  },
  plugins: [],
}
