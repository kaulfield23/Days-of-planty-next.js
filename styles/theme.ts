import { createTheme, PaletteColorOptions } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

declare module '@mui/material/styles' {
  interface Palette {
    customYellow: PaletteColorOptions;
    customGrey: PaletteColorOptions;
    customGreen: PaletteColorOptions;
    customPink: PaletteColorOptions;
  }
  interface PaletteOptions {
    customYellow: PaletteColorOptions;
    customGrey: PaletteColorOptions;
    customGreen: PaletteColorOptions;
    customPink: PaletteColorOptions;
  }
}

export let theme = createTheme({
  typography: {
    fontFamily: rajdhani.style.fontFamily,
  },
  palette: {
    primary: {
      main: blue['A100'],
      dark: blue['A200'],
    },
    secondary: {
      main: green['600'],
      dark: green['800'],
    },
    customYellow: {
      main: '#fae790',
    },
    customGrey: {
      main: '#d3cece',
    },
    customGreen: {
      main: '#b9e7a3',
    },
    customPink: {
      main: '#ebb5a8',
    },
  },
});
