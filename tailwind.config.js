/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00E5FF',
        'electric-purple': '#8A2BE2',
        'neon-green': '#00FFB3',
        'bg-navy': '#050816',
        'panel-navy': '#0B1024',
        'soft-gray': '#A9B1C7',
      },
      fontFamily: {
        heading: ['Orbitron', 'Exo 2', 'sans-serif'],
        display: ['"Exo 2"', 'sans-serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0,229,255,0.45), 0 0 60px rgba(0,229,255,0.15)',
        'glow-purple': '0 0 20px rgba(138,43,226,0.45), 0 0 60px rgba(138,43,226,0.15)',
        'glow-green': '0 0 20px rgba(0,255,179,0.45), 0 0 60px rgba(0,255,179,0.15)',
      },
      backgroundImage: {
        'circuit-grid':
          'linear-gradient(rgba(0,229,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.06) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.12), transparent 70%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [],
}
