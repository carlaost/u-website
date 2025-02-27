const { slate } = require('@radix-ui/colors');

/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          1: slate.slate1,
          2: slate.slate2,
          3: slate.slate3,
          4: slate.slate4,
          5: slate.slate5,
          6: slate.slate6,
          7: slate.slate7,
          8: slate.slate8,
          9: slate.slate9,
          10: slate.slate10,
          11: slate.slate11,
          12: slate.slate12,
        },
        'slate-alpha': {
          1: '#F9F9FB05',
        },
        accent: {
          DEFAULT: '#5151CD',
          hover: '#5151CD99',
          muted: '#9B9EF0',
          light: '#B1A9FF',
        },
        dark: {
          bg: '#13131E',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    function({ addBase }) {
      addBase({
        'html': { 
          'scroll-behavior': 'smooth' 
        },
      })
    }
  ],
};
