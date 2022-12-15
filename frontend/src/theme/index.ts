import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#fff', '#2d3142')(props),
      color: colors.text,
      fontSize: '16px',
    },
  }),
};

const colors = {
  black: '#151515',
  text: '#151515',
  brandColorMain: '#FFFFFF',
  brandColor1: '#DFFFFF',
  borderGray: '#1B1B1B4D',
};

const fonts = {
  heading: `Noto Sans, sans-serif`,
  body: `Noto Sans, sans-serif`,
};

const components = {
  Text: {
    variants: {
      ar: {
        textAlign: 'end',
      },
    },
  },
  Alert: {
    variants: {
      toast: (P: any) => {
        return {
          title: P.title,
          description: P.description,
          status: P.description,
          duration: 2000,
          isClosable: false,
        };
      },
    },
  },
  Button: {
    variants: {
      blum: {
        w: 'max-content',
        backgroundColor: 'background',
        borderRadius: 'full',
        fontWeight: 'normal',
        px: 3,
        py: 2,
        h: '35px',
        border: '1px solid black',
        _focus: { outline: 'none' },
        _hover: { bg: 'brandColorMain01' },
        fontSize: 'sm',
      },
      blumBlack: {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 'full',
        fontWeight: 'normal',
        fontSize: 'sm',
        px: '3',
        py: '2',
        h: '35px',
        _focus: { outline: 'none' },
        _hover: { opacity: '0.7' },
        _active: { backgroundColor: 'black' },
        _disabled: {
          _hover: {
            backgroundColor: 'black !important',
            opacity: '0.5',
            cursor: 'not-allowed',
          },
          backgroundColor: 'black',
          opacity: '0.7',
        },
      },
    },
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const fontSizes = {
  '2md': '2rem', //32px
  11: '2.75rem', // 44px
  '5.5xl': '3.25rem', //52px
};

const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em'];
// 0-30em (0-480px)
// 30em-48em (480px - 768px)
// 48em-62em (768px - 992px)
// 62em-80em (992px - 1280px)
// 80em-96em+ (1280px - 1536px)
// 96em+ (1536px+)

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
  breakpoints,
  fontSizes,
});
export default theme;

// fontSizes
//     -xs: 0.75rem; 12px
//     -sm: 0.875rem; 14px
//     -md: 1rem;      16px
//     -lg: 1.125rem; 18px
//     -xl: 1.25rem; 20px
//     -2xl: 1.5rem; 24px
//     -3xl: 1.875rem; 30 px
//     -2md: '2rem' 32px
//     -4xl: 2.25rem; 36px
//     -5xl: 3rem;
//     -6xl: 3.75rem;
//     -7xl: 4.5rem;
//     -8xl: 6rem;
//     -9xl: 8rem;

//fintWeight
//     -hairline: 100;
//     -thin: 200;
//     -light: 300;
//     -normal: 400;
//     -medium: 500;
//     -semibold: 600;
//     -bold: 700;
//     -extrabold: 800;
//     -black: 900;
// lineHeights: {
//   normal: "normal",
//   none: 1,
//   shorter: 1.25,
//   short: 1.375,
//   base: 1.5,
//   tall: 1.625,
//   taller: "2",
//   "3": ".75rem",
//   "4": "1rem",
//   "5": "1.25rem",
//   "6": "1.5rem",
//   "7": "1.75rem",
//   "8": "2rem",
//   "9": "2.25rem",
//   "10": "2.5rem",

// px	1px	1px
// 0.5	0.125rem	2px
// 1	0.25rem	4px
// 1.5	0.375rem	6px
// 2	0.5rem	8px
// 2.5	0.625rem	10px
// 3	0.75rem	12px
// 3.5	0.875rem	14px
// 4	1rem	16px
// 5	1.25rem	20px
// 6	1.5rem	24px
// 7	1.75rem	28px
// 8	2rem	32px
// 9	2.25rem	36px
// 10	2.5rem	40px
// 12	3rem	48px
// 14	3.5rem	56px
// 16	4rem	64px
// 18 4.5rem 72px
// 20	5rem	80px
// 24	6rem	96px
// 28	7rem	112px
// 32	8rem	128px
// 36	9rem	144px
// 40	10rem	160px
// 44	11rem	176px
// 48	12rem	192px
// 56	14rem	224px
// 60	15rem	240px
// 64	16rem	256px
// 72	18rem	288px
// 80	20rem	320px
// 96	24rem	384px
