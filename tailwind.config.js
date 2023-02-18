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
        accent: '#777FCA',
        main: '#1B1B1B',
        'text-main': '#E9E9E9',
        'text-sub': '#999999',
        card: '#272727',
        outline: '#373737',
      },
      boxShadow: {
        card: '0px 0px 10px 0px rgba(100, 100, 100, 0.25)',
      },
      fontFamily: {
        serif: 'var(--serif-font)',
        sans: 'var(--sans-font)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
