/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  extend: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    colors: {
      'primary': {
        'DEFAULT': '#FF6551',
      },
      'secondary': {
        'DEFAULT': '#26335D',
      },
      'paragraph': {
        'DEFAULT': '#737373',
      },
    }
    },
  },
  plugins: [],
}
