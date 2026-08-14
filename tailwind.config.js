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
        mutetext: '#6B6B6B',
        // Elegant expanded palette
        'gt-offwhite': '#FAFAFA',
        'gt-warmgray': '#F0EDE9',
        'gt-charcoal': '#1A1A1A',
        'gt-surface': '#F8F7F5',
        // Section accent colors for category badges
        'accent-blue': '#EFF6FF',
        'accent-purple': '#F5F3FF',
        'accent-amber': '#FFFBEB',
        'accent-green': '#ECFDF5',
        'accent-rose': '#FFF1F2',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui']
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    }
  },
  plugins: [],
}
