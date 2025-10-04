/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
    './assets/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00F6FF',
          dark: '#00D4E6',
          light: '#33F8FF'
        },
        accent: {
          DEFAULT: '#F5B6FF',
          dark: '#E894FF',
          light: '#F8C8FF'
        },
        background: {
          DEFAULT: '#0A0A0A',
          secondary: '#1A1A1A',
          tertiary: '#2A2A2A'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
          muted: '#666666'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        glow: {
          '0%': { 
            'box-shadow': '0 0 5px #00F6FF, 0 0 10px #00F6FF, 0 0 15px #00F6FF',
            'text-shadow': '0 0 5px #00F6FF'
          },
          '100%': { 
            'box-shadow': '0 0 10px #00F6FF, 0 0 20px #00F6FF, 0 0 30px #00F6FF',
            'text-shadow': '0 0 10px #00F6FF'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'crypto-gradient': 'linear-gradient(135deg, #00F6FF 0%, #F5B6FF 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2A2A2A 100%)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
