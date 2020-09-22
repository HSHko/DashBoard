import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const globalStyle = createGlobalStyle`
  
  

  body {
    
    font-family: 'Noto Sans KR', sans-serif;
    padding: 0;
    overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'visible')};
  }

  a {
    text-decoration: none;
    color: inherit;
  }




`;

export default globalStyle;

/*
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }  



    

*/