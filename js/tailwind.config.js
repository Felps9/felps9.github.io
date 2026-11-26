tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6e57e0',
          dark: '#5a43c8',
          light: '#ede9fe',
        },
        surface: {
          DEFAULT: '#fbfbfe',
          dark: '#1f1b2e',
          card: '#2a2540',
        },
      },
      boxShadow: {
        card: '0 4px 16px rgba(110, 87, 224, 0.12)',
      },
    },
  },
};