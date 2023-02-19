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

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
      },
      colors: {
        main: '#1f1f1f',
        'main-light': '#232323',
        accent: '#777FCA',
        'text-main': '#d9d9d9',
        'text-sub': '#888888',
        card: '#272727',
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
