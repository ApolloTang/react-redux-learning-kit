import React from 'react';

const TodoItem = ({text, handleComplete, handleRemove, complete}) => {
    return (
        <div className="todo-item" >
            <span className="todo-item-text"
                style={{ textDecoration: complete ? 'line-through':'none' }}
                onClick={handleComplete}>
                {text}
            </span>
            <span className="todo-item-delete" onClick={handleRemove}>x</span>
        </div>
    );
}

export default TodoItem;
