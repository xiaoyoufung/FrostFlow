/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'storage-status': {
          'OUT_OF_STOCK': '#DC8583',
          'LOW_STOCK': '#EAA05F',
          'WELL_STOCK': '#F6C86B',
          'FULL_STOCK': '#4E9E83',
        },
      },
    },
  },
  plugins: [],
}