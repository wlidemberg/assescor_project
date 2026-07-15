/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        assescor: {
          blue: {
            50: '#f0f7ff',
            100: '#e0effe',
            200: '#bce0fe',
            300: '#84c6fd',
            400: '#45a5fa',
            500: '#1d7ef4',
            600: '#0e61d8',
            700: '#0c4dae',
            800: '#0f428f',
            900: '#123974',
            950: '#0a1d3f', // Dark corporate blue
          },
          gold: {
            50: '#fdfbeb',
            100: '#fbf3c9',
            200: '#f6e492',
            300: '#f0cf52',
            400: '#eab925',
            500: '#d99e12',
            600: '#b97a0b',
            700: '#94580c',
            800: '#794710',
            900: '#683c11',
            950: '#3c1f06', // Discret gold
          },
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
