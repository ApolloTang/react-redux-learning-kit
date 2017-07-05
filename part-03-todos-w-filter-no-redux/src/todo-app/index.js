import _ from 'lodash';
import React from 'react';

import AddTodo from './add-todo/';
import TodoListFiltered from './todo-list-filtered/';
import Control from './todo-list-ui-ctrl/';

import style from './style';
class TodoApp extends React.Component {
  constructor(props) {
    super();

    this.handle_createTodo = this.handle_createTodo.bind(this);
    this.handle_toggleTodo = this.handle_toggleTodo.bind(this);
    this.handle_deleteTodo = this.handle_deleteTodo.bind(this);
    this.handle_selectFilter = this.handle_selectFilter.bind(this);

    this.state = {
      todoList: [],
      todoListFilter: 'all'
    };
  }

  handle_createTodo( todoText ) {
    const todoList_prev = this.state.todoList;
    const todoList_next = _.cloneDeep(todoList_prev);

    const todoItem_next = { id: _.uniqueId(), text: todoText, complete: false };

    todoList_next.push(todoItem_next);

    this.setState({
      todoList: todoList_next
    });
  }

  handle_toggleTodo(id) {
    const todoList_prev = this.state.todoList;
    const todoList_next = todoList_prev.map( todoItem_prev=>{
      let todoItem_next;

      if (id === todoItem_prev.id) {
        todoItem_next = {
          ...todoItem_prev,
          complete: !todoItem_prev.complete
        };
      } else {
        todoItem_next = todoItem_prev;
      }

      return todoItem_next;
    });

    this.setState({
      todoList: todoList_next
    });
  }

  handle_deleteTodo(id) {
    const todoList_prev = this.state.todoList;
    const todoList_next = todoList_prev.filter(
      todoItem_prev=>(id !== todoItem_prev.id)
    );

    this.setState({
      todoList: todoList_next
    });
  }

  handle_selectFilter(filterType) {
    this.setState({
      todoListFilter: filterType
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
          <div className="ui-ctr-workspace">
            <Control
              filterType={this.state.todoListFilter}
              selectFilter={this.handle_selectFilter} />
          </div>
          <div className="todos-list-workspace">
            <TodoListFiltered
              todoListFilter={this.state.todoListFilter}
              todoList={this.state.todoList}
              toggleTodo={this.handle_toggleTodo}
              deleteTodo={this.handle_deleteTodo} />
          </div>
        </div>
      </div>
    );
  }
};


// const TodoApp = () => <div>Test TodoApp</div>
export default TodoApp;

