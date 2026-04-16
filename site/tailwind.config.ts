import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F4EFE4',
        card: '#FAF6ED',
        'card-alt': '#EFE8D8',
        ink: '#2A251C',
        'ink-dim': '#6B6357',
        gold: '#9E7325',
        'gold-light': '#BC9338',
        line: 'rgba(42,37,28,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
