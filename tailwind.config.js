/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a2f8f',
        'navy-dark': '#061c5c',
        blue: {
          DEFAULT: '#1a4fd1',
          hover: '#133db0',
          light: '#e0ebff',
        },
        sky: '#dbeafe',
        mist: '#f2f7ff',
        ink: '#0e1f4d',
      },
      fontFamily: {
        ml: ['"Noto Sans Malayalam"', '"Manjari"', '"Nirmala UI"', 'sans-serif'],
        ui: ['"Sora"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 10px 30px rgba(20, 60, 160, 0.14)',
        'glass-hover': '0 16px 40px rgba(20, 60, 160, 0.22)',
        'card': '0 8px 24px rgba(10, 47, 143, 0.08)',
        'card-hover': '0 16px 36px rgba(10, 47, 143, 0.16)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
        'drip': 'drip 1.8s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.35' },
        },
        drip: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

