import React from 'react';
import { render } from 'react-dom';

import TodoList from './containers/todo-list';
import AddTodo from './containers/add-todo';
import Control from './containers/todo-list-ui-ctrl';


import style from './style';
const TodoApp = (props) => {
  return (
    <div className={`todoApp ${style['module-style']}`}>
      <div className="layout">
        <div className="add-todo-container">
          <AddTodo/>
        </div>
        <div className="ui-ctr-container">
          <Control/>
        </div>
        <div className="todos-list-container">
          <TodoList/>
        </div>
      </div>
    </div>
  );
};

// const TodoApp = () => <div>Test TodoApp</div>
export default TodoApp;
