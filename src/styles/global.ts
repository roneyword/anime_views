import { createGlobalStyle } from 'styled-components';
import {
  colors
} from './template/colors'

import {
  fontFamily
} from './template/typographys'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body{
    padding-bottom: 20px;
    background: ${colors.background};
    -webkit-font-smooth: antialiased;
  }

  body, input, text-area, button{
    font-family: ${fontFamily.nunito}, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;