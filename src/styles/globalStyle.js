import { createGlobalStyle } from "styled-components";
// import './normalize.css';

const globalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    overflow: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};
  }

  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    font-weight: 700;
  }

  h1, .h1 {font-size: 6rem;}
  h2, .h2 {font-size: 4rem;}
  h3, .h3 {font-size: 3rem;}
  h4, .h4 {font-size: 2rem;}
  h5, .h5 {font-size: 1.5rem;}
  h6, .h6 {font-size: 1.25rem;}  

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

`;

export default globalStyle;
