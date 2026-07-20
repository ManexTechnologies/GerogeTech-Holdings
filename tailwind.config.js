/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gtblack: '#0D0D0D',
        gtwhite: '#FFFFFF',
        gtred: '#E10600',
        gtreddark: '#B00000',
        gtgrey: '#F5F5F5',
        mutetext: '#6B6B6B'
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
