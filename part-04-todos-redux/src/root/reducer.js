import {combineReducers} from 'redux';

import todos from  'todo-app/containers/todo-list/reducer';

const rootReducer = combineReducers({
  todos,
})

export default rootReducer;
