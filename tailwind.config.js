/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html"],
  theme: {
    fontFamily: {
      serif: ['PT Serif', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
    }
  },
  plugins: [],
}

