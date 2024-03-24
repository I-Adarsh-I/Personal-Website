/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-serif-4': ['var(--font-source-serif-4)', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'oswald': ['var(--font-oswald)', 'sans-serif'],
      },
      fontSize: {
        'main-head': 'var(--font-size-main-head)',
        'base': 'var(--font-size-base)',
        '5xl': 'var(--font-size-5xl)',
        'mob-small': 'var(--font-size-mob-small)',
        'main-head-mob': 'var(--font-main-head-mob)',
        'sub-size-mob': 'var(--font-sub-size-mob)',
      },
      colors: {
        'gray': 'var(--color-gray)',
        'black': 'var(--color-black)',
        'royalblue': 'var(--color-royalblue)',
        'orange': 'var(--color-orange)',
        'light-gray-outline': 'var(--color-light-gray-outline)',
        'icon-gray': 'var(--color-icon-gray)',
        'git': 'var(--color-git)',
        'sub-gray': 'var(--color-sub-gray)',
      },
    },
  },
  plugins: [],
}

