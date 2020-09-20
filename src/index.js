import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import configureStore from 'store/store';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

// react로 작성된 컴포넌트들을 Provider안에 넣으면 
// 하위 컴포넌트들이 Provider를 통해 redux store에 접근이 가능해진다.
ReactDOM.render(
  
  // React의 props처럼 redux로 만든 store를 Provider에적용한다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
