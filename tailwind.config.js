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
        primaryLight: '#436CF5',
        onPrimary: '#FFFFFF',
        primaryContainer: '#DCE1FF',
        onPrimaryContainer: '#001551',
        primary_20: '#002682',
        primary_90: '#DCE1FF',
        primary_95: '#EFEFFF',
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
        neutralBg: '#F2F0F4',
        neutral_40: '#5E5E62',
      },
      boxShadow: {
        elevated:
          '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
