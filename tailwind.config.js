const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
  'code::before': false,
  'code::after': false,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: { css: disabledCss },
        pink: {
          css: {
            '--tw-prose-invert-body': theme('colors.text-main'),
            '--tw-prose-invert-headings': theme('colors.text-main'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-bullets': theme('colors.accent'),
          },
        },
      }),
      colors: {
        main: '#232529',
        'main-light': '#232529',
        accent: '#6e6cd7',
        'text-main': '#d9d9d9',
        'text-sub': '#888888',
        card: '#282a2f',
        outline: '#373737',
      },
      boxShadow: {
        card: '0px 0px 10px 0px rgba(100, 100, 100, 0.25)',
      },
      fontFamily: {
        serif: 'var(--serif-font)',
        sans: 'var(--sans-font)',
        accent: 'var(--accent-font)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
