module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        cBlue: {
          50: '#ABC3BA',
          100: '#8AABA4',
          200: '#699292',
          300: '#487079',
          400: '#284B60',
          500: '#082446',
          600: '#06143E',
          700: '#040636',
          800: '#0B032E',
          900: '#100225',
        },
        cLightBlue: {
          50: '#CCFFDD',
          100: '#AAFFD9',
          200: '#88FFE3',
          300: '#44F0FF',
          400: '#22C0FF',
          500: '#0085FF',
          600: '#0044DF',
          700: '#000DBF',
          800: '#0C009F',
          900: '#270080',
        },
        cLightGreenBlue: {
          50: '#D1FFFF',
          100: '#C8F4FF',
          200: '#C3EAFF',
          300: '#C3EAFF',
          400: '#BFE0FF',
          500: '#A4CFDF',
          600: '#8ABDBF',
          700: '#709F9F',
          800: '#587F7A',
          900: '#405E55',
        },
        cUclaBlue: {
          50: '#8294A9',
          100: '#7B8DA2',
          200: '#74869C',
          300: '#65788E',
          400: '#5E7187',
          500: '#576A80',
          600: '#516379',
          700: '#4A5C72',
          800: '#44566A',
          900: '#3E4F63',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        waves: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        waves: 'waves 1s ease-in-out infinite',
      },
      flex: {
        2: '2 2 0%',
      },
      width: {
        128: '32rem',
        144: '36rem',
      },
      height: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '5rem',
        '6xl': '10rem',
      },
    },
  },
};
