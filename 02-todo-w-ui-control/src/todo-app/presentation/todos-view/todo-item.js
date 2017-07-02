import React from 'react';

const TodoItem = ({text, handleComplete, handleRemove, complete}) => {
  return (
    <div className="tile todo-item" >
      <div className="tileContent" >
        <span className="todo-item-text"
          style={{ textDecoration: complete ? 'line-through':'none' }}
          onClick={handleComplete}>
          {text}
        </span>
        <span className="todo-item-delete" onClick={handleRemove}>x</span>
      </div>
    </div>
  );
}

export default TodoItem;
