/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['PT Sans', 'sans-serif'],
      serif: ['PT Serif', 'serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
    }
  },
  plugins: [],
}

