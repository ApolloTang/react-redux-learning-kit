import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TodoListView from 'todo-app/todos-view/';
import mockData from './mock-data';

function getFilteredTodos(todos, filterType='all') {
  const todos_array = _(todos)
    .map(todo=>todo)
    .filter( todo=>{
      switch (filterType) {
        case 'all':
          return true;
          break;
        case 'completed':
          return todo.complete
          break;
        case 'active':
          return !todo.complete
          break;
        default:
          return true;
      }
    }).value();
  return todos_array;
}

const FilteredTodoList = (props) => {
  const filterBy = props.todoListFilter;
  const todos_unfiltered = props.todoList;

  return (
    <TodoListView
      todos={
        // mockData
        getFilteredTodos(props.todoList, props.todoListFilter)
      }
      handleComplete={props.toggleTodo}
      handleRemove={props.deleteTodo}
    />
  )
}
FilteredTodoList.propTypes = {
  todoList: PropTypes.array,
  todoListFilter: PropTypes.string,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};

export default FilteredTodoList;
