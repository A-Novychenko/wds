import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      '2xl': '1920px',

      smOnly320: { max: '319.98px' },
      smOnly480: { max: '479.98px' },
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        sm: '24px',
        md: '24px',
        xl: '120px',
        '2xl': '120px',
      },
    },

    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito_sans)'],
      },
      lineHeight: {
        normal: '1.15',
      },
      colors: {
        mainBg: '#354483',
        lightBg: '#F6F7F9',
        whiteBg: '#FFFFFF',
        accentBg: '#F6CD00',
        accentBgEffect: '#D19C00',

        primaryText: '#F6F7F9',
        secondaryText: '#354483',
        lightText: '#FFFFFF',
        strongDarkText: '#000000',
        accentText: '#F6CD00',

        error: '#ff0000',
      },

      // colors: {
      //   mainBg: 'var(--main-bg)',
      //   lightBg: 'var(--light-bg)',
      //   whiteBg: 'var(--white-bg)',
      //   accentBg: 'var(--accent-bg)',
      //   accentBgEffect: 'var(--accent-bg-effect)',

      //   primaryText: 'var(--primary-text)',
      //   secondaryText: 'var(--secondary-text)',
      //   lightText: 'var(--light-text)',
      //   strongDarkText: 'var(--strong-dark-text)',
      //   accentText: 'var(--accent-text)',

      //   error: '#ff0000',
      // },
      boxShadow: {
        mobMenuHeader: '0px 0px 40px 0px rgba(0, 0, 0, 0.10)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
