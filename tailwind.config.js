/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coquette: {
          50: '#fff5f7',
          100: '#ffe8ec',
          200: '#ffd1dc',
          300: '#ffb3c4',
          400: '#ff85a1',
          500: '#f75c82',
          600: '#e53e6d',
          700: '#c22353',
          800: '#a11f46',
          900: '#861e3d',
        },
        cream: {
          50: '#faf8f5',
          100: '#f5f0ea',
          200: '#ebe1d5',
          300: '#dfcfbe',
        },
        roseGold: '#B76E79',
        vintageGold: '#D4AF37',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cursive: ['"Dancing Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'coquette': '0 10px 25px -5px rgba(255, 182, 193, 0.4), 0 8px 10px -6px rgba(255, 182, 193, 0.2)',
        'coquette-lg': '0 20px 35px -10px rgba(244, 114, 182, 0.35)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'float-slow': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 0.4s ease-in-out',
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(4deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
