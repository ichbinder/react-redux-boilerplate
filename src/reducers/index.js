import { combineReducers } from 'redux';
import todo from './todo';

let reduce = combineReducers({
  todo: todo
});

export default reduce;
