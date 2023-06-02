/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // Primary
        primary: '#2151DA',
        onPrimary: '#FFFFFF',
        primaryContainer: '#DCE1FF',
        onPrimaryContainer: '#001551',
        // Secondary
        secondary: '#5A5D72',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#DEE1F9',
        onSecondaryContainer: '#171B2C',
        // Tertiary
        tertiary: '#75546F',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#FFD7F5',
        onTertiaryContainer: '#2C1229',
        // Error
        error: '#BA1A1A',
        onError: '#FFFFFF',
        errorContainer: '#FFDAD6',
        onErrorContainer: '#410002',
        // background
        background: '#FEFBFF',
        onBackground: '#1B1B1F',
      },
    },
  },
  plugins: [],
};
