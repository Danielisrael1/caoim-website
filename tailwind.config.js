/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Matches the reference site's theme tokens exactly.
        brand: {
          DEFAULT: '#003DA5',
          light: '#3364b7',
          dark: '#003184',
        },
        gold: {
          DEFAULT: '#FBC457',
          light: '#fcd079',
          dark: '#c99d46',
        },
        ink: '#0b0b0c',
        paper: '#f4f4f4',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'none' },
        },
        kenburns: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.14)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        kenburns: 'kenburns 20s ease-out both',
      },
    },
  },
  plugins: [],
}
