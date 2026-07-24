/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Dark tiles (Apple's black product panels) ──
        ink: {
          DEFAULT: '#0A0A0A', // matte black base
          soft: '#111113',    // raised surface
          card: '#161617',    // black tile (Apple)
          line: '#26262A',    // hairline border on dark
        },
        chalk: {
          DEFAULT: '#F5F5F7', // crisp off-white text on dark
          dim: '#C7C7CC',     // secondary on dark
        },
        muted: {
          DEFAULT: '#86868B', // muted gray accent
          deep: '#6E6E73',
        },
        // ── Apple light system ──
        appleink: '#1D1D1F',   // Apple near-black text
        applesub: '#6E6E73',   // Apple secondary text
        applegray: '#F5F5F7',  // Apple light section bg
        appleline: '#D2D2D7',  // Apple hairline on light
        appleblue: '#0066CC',  // Apple link/CTA blue
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        content: '1120px',
      },
      transitionTimingFunction: {
        // Apple's signature easing
        apple: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};
