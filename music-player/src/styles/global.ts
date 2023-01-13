import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: '$gray700',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale ',
    fontFamily: 'Roboto, sans-serif'
  },
})