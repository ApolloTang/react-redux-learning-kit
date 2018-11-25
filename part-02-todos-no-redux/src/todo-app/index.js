import _ from 'lodash';
import React from 'react';

import AddTodo from './add-todo/';

import TodoListView from 'todo-app/todos-view/';
import mockData from './mock-data';

import style from './style';
class TodoApp extends React.Component {
  constructor(props) {
    super();

    this.handle_createTodo = this.handle_createTodo.bind(this);
    this.handle_toggleTodo = this.handle_toggleTodo.bind(this);
    this.handle_deleteTodo = this.handle_deleteTodo.bind(this);

    this.state = {
      todoList: []
    };
  }

  handle_createTodo( todoText ) {
    const todoList = this.state.todoList;
    const todoItem_new = { id: _.uniqueId(), text: todoText, complete: false };
    todoList.push(todoItem_new);
    this.setState({
      todoList: todoList
    });
  }

  handle_toggleTodo(id) {
    const todoList = this.state.todoList;
    todoList.map( todoItem => {
      if (id === todoItem.id) {
        todoItem.complete = !todoItem.complete
      }
      return todoItem;
    });

    this.setState({
      todoList
    });
  }

  handle_deleteTodo(id) {
    const todoList = this.state.todoList;
    const todoList_itemDeleted = todoList.filter(
      todoItem_prev=>(id !== todoItem_prev.id)
    );

    this.setState({
      todoList: todoList_itemDeleted
    });
  }

  render() {
    return (
      <div className={`todoApp ${style['module-style']}`}>
        <div className="layout">
          <div className="add-todo-workspace">
            <AddTodo
              createTodo={this.handle_createTodo} />
          </div>
          <div className="todos-list-workspace">
            <TodoListView
              todos={this.state.todoList}
              handleComplete={this.handle_toggleTodo}
              handleRemove={this.handle_deleteTodo} />
          </div>
        </div>
      </div>
    );
  }
};


// const TodoApp = () => <div>Test TodoApp</div>
export default TodoApp;

