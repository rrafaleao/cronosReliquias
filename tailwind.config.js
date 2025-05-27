/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#191970',
        onyx: '#0D0D0D',
        gold: '#CFB53B',
        copper: '#B87333',
        goldLight: '#E6D592',
        copperLight: '#D9A97C',
        timepiece: {
          50: '#F0F0F8',
          100: '#E0E0F0',
          200: '#C2C2E0',
          300: '#A4A4D0',
          400: '#8686C0',
          500: '#6868B0',
          600: '#4A4A8E',
          700: '#3C3C70',
          800: '#2E2E52',
          900: '#202034',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'gear': '0 4px 6px -1px rgba(207, 181, 59, 0.1), 0 2px 4px -1px rgba(207, 181, 59, 0.06)',
        'copper': '0 4px 6px -1px rgba(184, 115, 51, 0.1), 0 2px 4px -1px rgba(184, 115, 51, 0.06)',
      },
      keyframes: {
        gearRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'gear-spin-slow': 'gearRotate 20s linear infinite',
        'gear-spin-medium': 'gearRotate 15s linear infinite',
        'gear-spin-fast': 'gearRotate 10s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in': 'slideIn 0.8s ease-out',
      },
    },
  },
  plugins: [],
};