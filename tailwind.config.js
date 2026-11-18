/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#07080b', 900: '#0b0d12', 800: '#12151c', 700: '#1a1f29' },
        gold: { 300: '#f6d27a', 400: '#f2bf4b', 500: '#e9a825' },
        mint: { 300: '#7ee8d0', 400: '#34d3b4', 500: '#14b89a' },
        ivory: '#f5f0e6',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        drift: { '0%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(40px,-30px) scale(1.1)' }, '100%': { transform: 'translate(0,0) scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '200% 50%' } },
      },
      animation: { float: 'float 7s ease-in-out infinite', drift: 'drift 18s ease-in-out infinite', shimmer: 'shimmer 6s linear infinite' },
    },
  },
  plugins: [],
};
