// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
        heading: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      // YENİ RƏNG PALİTRASINI BURA ƏLAVƏ EDİRİK
      colors: {
        'upgrade-blue': {
          DEFAULT: '#0055ff', // Tünd mavi (əsas rəng)
          light: '#3b82f6',   // Bir az daha açıq ton
          dark: '#1e3a8a',    // Daha tünd ton
        },
        'upgrade-cyan': '#22d3ee' // Köhnə cyan rəngini də saxlayaq, bəlkə lazım olar
      }
    },
  },
  plugins: [],
};