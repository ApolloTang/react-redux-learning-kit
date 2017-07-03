import React from 'react';

const TodoItem = ({text, handleComplete, handleRemove, complete}) => {
  return (
    <div className="tile todo-item" >
      <div className="tileContent todoItemContent"
        onClick={handleComplete} >
        <span className="todo-item-text"
          style={{ textDecoration: complete ? 'line-through':'none' }}
          >
          {text}
        </span>
        <button
          className="todo-item-delete"
          onClick={ handleRemove }>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
