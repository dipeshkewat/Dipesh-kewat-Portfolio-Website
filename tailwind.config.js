/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neo-Brutalism Color Palette
        cream: '#FFFDF5',    // main bg (warm off-white)
        yellow: '#F7CB46',   // primary CTA / accent (yellow)
        black: '#000000',    // dark base / text
        lit: '#000000',      // primary text (black for Neo-Brutalism)
        soft: '#555555',     // muted text
        edge: '#000000',     // borders (hard black)
        neon: '#99E885',     // green highlight
        blood: '#FE90E8',    // pink accent
        white: '#FFFFFF',    // card surface
        surface: '#FFFFFF',
        pink: '#FE90E8',     // neo pink
        cyan: '#C0F7FE',     // neo cyan/light blue
        green: '#99E885',    // neo green
        peach: '#FFDC8B',    // soft yellow/peach
        orange: '#F7CB46',   // yellow (same as yellow)
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        header: ['"Courier Prime"', 'monospace'],
        body: ['"IBM Plex Mono"', 'monospace'],
        label: ['"Source Code Pro"', 'monospace'],
      },
      boxShadow: {
        brutal: '4px 4px 0px #000000',
        'brutal-hover': '2px 2px 0px #000000',
        'brutal-lg': '6px 6px 0px #000000',
        'brutal-pink': '4px 4px 0px #FE90E8',
        'brutal-yellow': '4px 4px 0px #F7CB46',
        'brutal-cyan': '4px 4px 0px #C0F7FE',
      },
      borderWidth: { 3: '3px', 4: '4px' },
      animation: {
        ticker: 'ticker 22s linear infinite',
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        pulseDot: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.2' } },
      },
    },
  },
  plugins: [],
}
