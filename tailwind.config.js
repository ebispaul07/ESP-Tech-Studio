/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0C10',
        accent: '#00ADB5',
        'accent-light': '#00F5FF',
        'accent-dark': '#007A82',
        background: '#F8F9FA',
        'electric-violet': '#8B5CF6',
        'vibrant-orange': '#FF6B00',
        'neon-cyan': '#00F5FF',
        'text-dark': '#222222',
        'text-muted': '#6B7280',
        'card-bg': '#12141A',
        'border-subtle': 'rgba(0,173,181,0.2)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'gradient': 'gradientShift 6s ease infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.5)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
