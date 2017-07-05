import React from 'react';

import TodoItem from './todo-item';
import style from './style';

const TodoList = (props) => (
  <div className={`todo-list ${style['module-style']}`}>
    <div className={`tiles`}>
      {
        props.todos.map((todo, i)=>{
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              complete={todo.complete}
              handleRemove={ ()=>{props.handleRemove(todo.id)} }
              handleComplete={ ()=>{props.handleComplete(todo.id)} }
            />
          );
        })
      }
    </div>
  </div>
);

export default TodoList;

