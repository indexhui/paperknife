import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  fonts: {
    heading: "'Montserrat', Sans-serif",
    body: "'Montserrat', Sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'black',
      },
    },
  },
  colors: {
    brand: {
      500: '#3DB9FF',
      600: '#186DD1',
      700: '#0A2C54',
    },
    grass: '#61CE70',
  },
};

const theme = extendTheme(customTheme);

export default theme;
