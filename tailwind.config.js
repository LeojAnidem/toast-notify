/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 8px 0px #00000087'
      },
      animation: {
        'fade-out': 'fadeOut 1.2s ease-out',
        'fade-out-left': 'fadeOutLeft 1.2s ease-out'
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        fadeOutLeft: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(80px)'
          }
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
