import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: black;
    color: #FFFFFF;
    font-family: 'Poppins', cursive;
    font-size: 16px;
    scroll-behavior:smooth;
  }
`;

export default GlobalStyle;
