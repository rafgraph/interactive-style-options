import { createCss, StitchesCss } from '@stitches/react';

export const stitchesConfig = createCss({
  theme: {
    colors: {
      pageBackground: 'rgb(240,240,240)',
      backgroundContrast: 'rgb(216,216,216)',
      highContrast: 'rgb(0,0,0)',
      lowContrast: 'rgb(128,128,128)',
      red: 'hsl(0,100%,50%)',
      orange: 'hsl(30,100%,50%)',
      yellow: 'hsl(51,100%,40%)',
      green: 'hsl(120,100%,30%)',
      outlineGreen: 'hsl(120,40%,55%)',
      blueGreen: 'hsl(180,100%,35%)',
      blue: 'hsl(240,100%,50%)',
      outlineBlue: 'hsl(240,100%,70%)',
      purple: 'hsl(270,100%,60%)',
      backgroundPurple: 'hsl(270,100%,92%)',
    },
  },
});

export type CSS = StitchesCss<typeof stitchesConfig>;

export const {
  styled,
  theme,
  keyframes,
  global: createGlobalCss,
} = stitchesConfig;

export const darkThemeClass = theme({
  colors: {
    pageBackground: 'rgb(32,32,32)',
    backgroundContrast: 'rgb(64,64,64)',
    highContrast: 'rgb(192,192,192)',
    lowContrast: 'rgb(136,136,136)',
    red: 'hsl(0,100%,50%)',
    orange: 'hsl(30,90%,50%)',
    yellow: 'hsl(60,88%,50%)',
    green: 'hsl(120,85%,42%)',
    outlineGreen: 'hsl(120,80%,30%)',
    blueGreen: 'hsl(180,100%,50%)',
    blue: 'hsl(210,100%,60%)',
    outlineBlue: 'hsl(210,80%,40%)',
    purple: 'hsl(270,85%,60%)',
    backgroundPurple: 'hsl(270,100%,15%)',
  },
});

export const globalCss = createGlobalCss({
  // unset all styles on interactive elements
  'button, input, select, textarea, a, area': {
    all: 'unset',
  },
  // normalize behavior on all elements
  '*, *::before, *::after, button, input, select, textarea, a, area': {
    margin: 0,
    border: 0,
    padding: 0,
    boxSizing: 'inherit',
    font: 'inherit',
    fontWeight: 'inherit',
    textDecoration: 'inherit',
    textAlign: 'inherit',
    lineHeight: 'inherit',
    wordBreak: 'inherit',
    color: 'inherit',
    background: 'transparent',
    WebkitTapHighlightColor: 'transparent',
  },
  // set base styles for the app
  body: {
    color: '$highContrast',
    fontFamily: 'system-ui, Helvetica Neue, sans-serif',
    // use word-break instead of "overflow-wrap: anywhere" because of Safari support
    wordBreak: 'break-word',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontSize: '16px',
    boxSizing: 'border-box',
    textSizeAdjust: 'none',
  },
  code: {
    fontFamily: 'monospace',
  },
});
