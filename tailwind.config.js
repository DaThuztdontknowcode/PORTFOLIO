/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(30, 30, 30)', // Tên tuỳ chỉnh
      },
    },
  },
  plugins: [],
}
