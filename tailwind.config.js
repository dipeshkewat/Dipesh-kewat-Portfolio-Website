/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark Luxe Palette
        void: '#0A0A0F',       // deepest bg
        abyss: '#111118',      // section bg
        surface: '#18181F',    // card bg
        elevated: '#1F1F2A',   // raised surface
        border: '#2A2A3A',     // subtle borders
        'border-light': '#3A3A4E', // hover borders
        gold: '#C9A84C',       // primary accent (classic gold)
        'gold-light': '#E8C96A', // lighter gold
        'gold-muted': '#8B7730',  // muted gold
        amber: '#D4A843',      // warm amber
        cream: '#F5ECD7',      // warm light text
        silver: '#B8B8CC',     // secondary text
        mist: '#7A7A92',       // muted text
        pearl: '#E8E4DD',      // headings
        emerald: '#4ADE80',    // success/green accent
        sapphire: '#6366F1',   // blue accent
        rose: '#F472B6',       // pink/rose accent
        'glass-white': 'rgba(255,255,255,0.04)',
        'glass-border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Georgia"', 'serif'],
        sans: ['"Inter"', '"Helvetica Neue"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(201,168,76,0.15)',
        'glow-lg': '0 0 40px rgba(201,168,76,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5)',
      },
      borderWidth: { 1: '1px' },
      animation: {
        ticker: 'ticker 25s linear infinite',
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        pulseSoft: { '0%, 100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        glowPulse: { '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.1)' }, '50%': { boxShadow: '0 0 30px rgba(201,168,76,0.25)' } },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C, #E8C96A, #C9A84C)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0F 0%, #111118 100%)',
      },
    },
  },
  plugins: [],
}
