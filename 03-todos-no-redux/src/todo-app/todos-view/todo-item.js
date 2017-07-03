import React from 'react';

const TodoItem = ({text, handleComplete, handleRemove, complete}) => {
  return (
    <div className="tile todo-item" >
      <div className={`tileContent ${ complete ? 'is-completed' : '' }`}
        onClick={handleComplete} >
        <span className="todo-item-text" >
          {text}
        </span>
        <button
          className="todo-item-delete"
          onClick={
            (e)=>{
              e.stopPropagation();
              handleRemove();
            }
            }>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
