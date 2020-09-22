import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import configureStore from 'store/store';

// react로 작성된 컴포넌트들을 Provider안에 넣으면 
// 하위 컴포넌트들이 Provider를 통해 redux store에 접근이 가능해진다.
const store = configureStore();

ReactDOM.render(
  // React의 props처럼 redux로 만든 store를 Provider에적용한다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);