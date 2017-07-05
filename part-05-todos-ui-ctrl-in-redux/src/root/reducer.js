import {combineReducers} from 'redux';

import todos from  'todo-app/containers/todo-list/reducer';
import todosUiControl from  'todo-app/containers/todo-list-ui-ctrl/reducer';

const rootReducer = combineReducers({
  todos,
  todosUiControl
})

export default rootReducer;
