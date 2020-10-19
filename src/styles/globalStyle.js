import { createGlobalStyle } from "styled-components";
import { gCss } from "./theme";

const globalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    overflow: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};
  }

  h1, .h1 {font-size: ${gCss.h1}; margin: 0;}
  h2, .h2 {font-size: ${gCss.h2}; margin: 0;}
  h3, .h3 {font-size: ${gCss.h3}; margin: 0;}
  h4, .h4 {font-size: ${gCss.h4}; margin: 0;}
  h5, .h5 {font-size: ${gCss.h5}; margin: 0;}
  h6, .h6 {font-size: ${gCss.h6}; margin: 0;}  

  a, button {
    display: flex;
    margin: auto 0.5rem;
    padding: 0;
    outline: none;
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    font-size: ${gCss.h6};
  }

  .text-center {text-align: center;}
`;

export default globalStyle;
