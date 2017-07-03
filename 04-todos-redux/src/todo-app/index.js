import React from 'react';
import { render } from 'react-dom';

import TodoList from './containers/todo-list';
import AddTodo from './containers/add-todo';
import Control from './presentation/todo-list-ui-ctrl';


import style from './style';
const TodoApp = (props) => {
  const filterType = _.get(props, `match.params.filtertype`, 'all');

  return (
    <div className={`todoApp ${style['module-style']}`}>
      <div className="layout">
        <div className="add-todo-container">
          <AddTodo/>
        </div>
        <div className="ui-ctr-container">
          <Control />
        </div>
        <div className="todos-list-container">
          <TodoList filterType={filterType} />
        </div>
      </div>
    </div>
  );
};

// const TodoApp = () => <div>Test TodoApp</div>
export default TodoApp;
