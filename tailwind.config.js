import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(212, 45%, 89%)',
      'grayish-blue': 'hsl(220, 15%, 55%)',
      'dark-blue': 'hsl(218. 44%, 22%)',
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', ...defaultTheme.fontFamily.serif],
      },
    },
  },
};
