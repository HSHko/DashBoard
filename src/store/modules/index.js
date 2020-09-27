import { combineReducers } from 'redux';
import counter from './counter';
import overlay from './overlay';

export default combineReducers({
  counter,
  overlay,
});