/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        yellow: '#FFE500',
        black: '#0D0D0D',
        neon: '#00FF41',
        blood: '#FF2600',
        white: '#FFFFFF',
        surface: '#FFFFFF',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        header: ['"Courier Prime"', 'monospace'],
        body: ['"IBM Plex Mono"', 'monospace'],
        label: ['"Source Code Pro"', 'monospace'],
      },
      boxShadow: {
        brutal: '4px 4px 0px #0D0D0D',
        'brutal-hover': '2px 2px 0px #0D0D0D',
        'brutal-lg': '6px 6px 0px #0D0D0D',
      },
      borderWidth: {
        3: '3px',
        4: '4px',
      },
      animation: {
        'ticker': 'ticker 22s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
}
