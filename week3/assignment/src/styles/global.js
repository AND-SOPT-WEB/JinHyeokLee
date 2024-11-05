import { css } from '@emotion/react';
import Reset from './reset';

const GlobalStyle = css`
  ${Reset}
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: #dff2eb;
  }
`;

export default GlobalStyle;
