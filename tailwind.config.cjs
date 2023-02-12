// tailwind.config.cjs
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const gray = colors.gray;
const primary = colors.blue;
const secondary = colors.pink;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './rehype/*.{js,ts}',
    './remark/*.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      sans: ['InterVariable', 'Inter',  ...defaultTheme.fontFamily.sans],
      mono: ['Fira CodeVariable', 'Fira Code', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        gray: gray,
        primary: primary,
        secondary: secondary,
        background: {
          DEFAULT: '#f5f5fa',
          light: '#f5f5fa',
          dark: gray[900],
        },
        text: {
          primary: {
            DEFAULT: gray[900],
            light: gray[900],
            dark: gray[300],
          },
          secondary: {
            DEFAULT: gray[600],
            light: gray[600],
            dark: gray[400],
          },
          disabled: {
            DEFAULT: gray[400],
            light: gray[400],
            dark: gray[600],
          }
        },
        plate: {
          DEFAULT: colors.white,
          light: colors.white,
          dark: gray[800],
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            overflowWrap: 'break-word',
            lineHeight: 1.6,
            fontSize: '0.9375rem',
            '--tw-prose-body': colors.gray[700],
            '--tw-prose-headings': colors.gray[800],
            '--tw-prose-lead': colors.gray[600],
            '--tw-prose-links': colors.gray[900],
            '--tw-prose-bold': colors.gray[900],
            '--tw-prose-hr': colors.gray[300],
            '--tw-prose-quotes': colors.gray[800],
            '--tw-prose-code': colors.gray[900],
            '--tw-prose-pre-code': colors.gray[300],
            '--tw-prose-pre-bg': colors.gray[800],

            '--tw-prose-invert-body': colors.gray[400],
            '--tw-prose-invert-headings': colors.gray[300],
            '--tw-prose-invert-lead': colors.gray[500],
            '--tw-prose-invert-links': colors.gray[200],
            '--tw-prose-invert-bold': colors.gray[200],
            '--tw-prose-invert-hr': colors.gray[600],
            '--tw-prose-invert-quotes': colors.gray[300],
            '--tw-prose-invert-code': colors.gray[200],
            '--tw-prose-invert-pre-code': colors.gray[300],
            '--tw-prose-invert-pre-bg': colors.gray[900],
            hr: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            a: {
              textDecoration: 'none',
            },
            'a:hover': {
              borderBottom: '1px solid currentColor',
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            kbd: {
              background: theme('colors.gray.100'),
              borderWidth: '1px',
              borderColor: theme('colors.gray.200'),
              padding: '0.125em 0.25em',
              color: theme('colors.gray.700'),
              fontWeight: 500,
              fontSize: '0.75em',
              fontVariantLigatures: 'none',
              borderRadius: '4px',
              margin: '0 1px',
            },
            code: {
              fontVariantLigatures: 'none',
            },
            pre: {
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
            },
            'figure figcaption': {
              textAlign: 'center',
            },
            'ol, ul, li': {
              margin: 0,
            },
            'ul ul, ul ol, ol ul, ol ol': {
              margin: 0,
            },
          },
        },
        dark: {
          css: {
            kbd: {
              background: theme('colors.gray.700'),
              borderColor: theme('colors.gray.600'),
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/typography'),
    require('tailwind-clip-path'),
    // add a "ring-highlight" utility
    // which sets a top border highlight using box-shadow
    // thus conflicting with any other ring utilities
    // shadow utilities are not affected
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.ring-highlight': {
          'box-shadow': [
            `inset 0 1px 0 0 var(--tw-ring-color)`,
            `var(--tw-shadow, 0 0 #0000)`,
          ].join(', ')
        }
      })
    }),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.plate-bg': {
          '@apply bg-plate-light dark:bg-plate-dark': {}
        },
        '.plate-shadow': {
          '@apply shadow-lg shadow-gray-900/10 dark:shadow-black/20': {}
        },
        '.border-highlight': {
          '@apply ring-1 ring-gray-600/10 dark:ring-highlight dark:ring-white/5': {}
        },
        '.text-primary': {
          '@apply text-text-primary-light dark:text-text-primary-dark': {}
        },
        '.text-secondary': {
          '@apply text-text-secondary-light dark:text-text-secondary-dark': {}
        },
        '.text-disabled': {
          '@apply text-text-disabled-light dark:text-text-disabled-dark': {}
        },
        '.pressable': {
          '@apply active:scale-90': {}
        }
      })
    })
  ],
}