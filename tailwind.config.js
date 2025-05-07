/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4fc',
          100: '#dae3f7',
          200: '#b8c9ed',
          300: '#8aa5df',
          400: '#5577cd',
          500: '#3152b3',
          600: '#264095',
          700: '#1f3279',
          800: '#1b2a65',
          900: '#0F172A',
        },
        accent: {
          50: '#fef8e7',
          100: '#fdefc3',
          200: '#fae08c',
          300: '#f7cb49',
          400: '#f4b81b',
          500: '#EAB308',
          600: '#c78a04',
          700: '#9c6a05',
          800: '#7e550a',
          900: '#6a470d',
        },
        racing: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#EF4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        metal: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94A3B8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};