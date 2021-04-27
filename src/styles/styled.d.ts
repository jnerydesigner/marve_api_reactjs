import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    widths: {
      xl: number;
    };
    colors: {
      primary: string;
      secondary: string;
      border: string;
      black: string;
    };
  }
}
