import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
      colors: {
        gray100: '#E1E1E6',
        gray200: '#C4C4CC',
        gray300: '#D9D9D9',
        gray700: '#0F0D13',    
        card: '#2A2141',
      },
      fontSizes: {
        sm: '0.875rem',
        md: '1rem.',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
        }
    },
  })