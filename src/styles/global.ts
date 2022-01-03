import { createGlobalStyle } from 'styled-components';

import { ThemeProps } from '~/types/theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    transition: 0.4s;
    font-family: font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.background};
  }

  p {
    color: ${({ theme }) => theme.p};
  }

  h1 {
    color: ${({ theme }) => theme.h1};
  }

  h3 {
    color: ${({ theme }) => theme.h3};
  }

  span {
    color: ${({ theme }) => theme.span};
  }

  strong {
    color: ${({ theme }) => theme.strong};
  }

`;

export default GlobalStyles;
