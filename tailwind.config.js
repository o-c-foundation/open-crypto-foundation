module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f0f0',
          100: '#e0e0e0',
          200: '#c0c0c0',
          300: '#a0a0a0',
          400: '#808080',
          500: '#606060',
          600: '#404040',
          700: '#303030',
          800: '#202020',
          900: '#101010',
        },
        secondary: {
          50: '#f2fcf9',
          100: '#d3f8e9',
          200: '#a8efd6',
          300: '#6be0c0',
          400: '#36c4a1',
          500: '#1aaa88',
          600: '#11886c',
          700: '#126a57',
          800: '#115547',
          900: '#11473c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      backgroundColor: {
        'site': '#121212',
        'card': '#1e1e1e',
        'elevated': '#2a2a2a',
      },
      textColor: {
        'site': '#ffffff',
        'muted': '#a0a0a0',
      },
    },
  },
  plugins: [],
} 