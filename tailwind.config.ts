import type { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8ff',
          100: '#e6f0ff',
          200: '#bfdaff',
          300: '#99c4ff',
          400: '#4d99ff',
          500: '#0066ff',
          600: '#005ce6',
          700: '#0040a3',
          800: '#002b70',
          900: '#001a47'
        }
      }
    }
  },
  plugins: [lineClamp]
};

export default config;

