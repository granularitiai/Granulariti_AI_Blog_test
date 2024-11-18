/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: '#f3f4f6',
            a: {
              color: '#22d3ee',
              '&:hover': {
                color: '#67e8f9',
              },
            },
            h1: {
              color: '#f3f4f6',
            },
            h2: {
              color: '#f3f4f6',
            },
            h3: {
              color: '#f3f4f6',
            },
            strong: {
              color: '#f3f4f6',
            },
            code: {
              color: '#22d3ee',
            },
            blockquote: {
              borderLeftColor: '#22d3ee',
              color: '#d1d5db',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}