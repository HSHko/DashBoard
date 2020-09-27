import { createStore } from 'redux';
import modules from './modules';

// 스토어를 만들고, 내보내줌
// const configureStore = () => { ... export default configureStore;
// import .. export default configureStroe() 대신
export default function configureStore() {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(
    modules,
    devTools,
  );
  return store;
}