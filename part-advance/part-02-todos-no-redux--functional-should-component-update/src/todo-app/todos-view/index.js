import React from 'react';

import TodoItem from './todo-item';
import style from './style';

class TodoList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    const isShallowEqual = nextProps.todos === this.props.todos
    console.log('this.props', this.props )
    console.log('nextProps', nextProps )
    console.log('xxx isShalowEqual', isShallowEqual)
    return !isShallowEqual;
  }

  render(){
    const props = this.props;
    return (
        <div className={`todo-list ${style['module-style']}`} >
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
    )
  }
}
export default TodoList;

