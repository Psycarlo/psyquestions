module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#2da44f',
        light: '#2da44f',
        dark: '#168149',
      },
      secondary: {
        DEFAULT: '#2589bd',
      },
      error: {
        DEFAULT: '#cc0000',
      },
      warning: {
        DEFAULT: '#ffa300',
        light: '#f13333',
        dark: '#b51a1a',
      },
      light: {
        DEFAULT: '#ffffff',
        input: '#f1f3f4',
        text: '#1e1e1e',
      },
      dark: {
        DEFAULT: '#202124',
        input: '#525355',
        text: '#ffffff',
      },
    },
    extend: {
      fontFamily: {
        brand: "'Poppins', sans-serif",
        mono: "'PT Mono', monospace",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
