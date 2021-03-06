import { createGlobalStyle } from "styled-components";
import { gCss } from "./theme";

const globalStyle = createGlobalStyle`
  * {margin: 0; padding: 0;}
  *, *::before, *::after {box-sizing: border-box;}

  body {
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    overflow: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};
  }

  h1, .h1 {font-size: ${gCss.h1};}
  h2, .h2 {font-size: ${gCss.h2};}
  h3, .h3 {font-size: ${gCss.h3};}
  h4, .h4 {font-size: ${gCss.h4};}
  h5, .h5 {font-size: ${gCss.h5};}
  h6, .h6 {font-size: ${gCss.h6};}  

  a, button {
    display: flex;
    margin: auto 0.5rem;
    padding: 0.25rem 0.5rem;
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
  .disp-flex {display: flex;}
  .disp-inline {display: inline;}
  .width80 {width: 80%;}
  .width60 {width: 60%;}
  .width50 {width: 50%;}
  .width40 {width: 40%;}
  .width20 {width: 20%;}
`;

export default globalStyle;
