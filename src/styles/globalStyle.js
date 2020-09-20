import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const globalStyle = createGlobalStyle`
  
  /* 브라우저(모바일 브라우저를 포함하여)를 광범위하게 지원하며, HTML5 요소, 타이포그래피, 목록(lists), embeded 콘텐츠, 폼과 테이블을 일관성있게 통일시키는 CSS를 포함한다.    */
  @import url('./normalize.css');

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