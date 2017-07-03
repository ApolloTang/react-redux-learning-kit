import _ from 'lodash';
import Action_todoList from './actions';
import mockData from './mock-data.js';

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


const mapStoreToProps = (store, ownProps) => {
  const filterType = _.get(store, `todosUiControl.filterType`, 'all');
  const unFilteredTodos =  _.get(store, `todos`, {});
  const filteredTodos = getFilteredTodos(unFilteredTodos, filterType);

  return {
    todos: filteredTodos
    // todos: mockData
  }
};


const mapDispatchToProps = (dispatch) => ({
  dispatch_complete(id) {
    dispatch( Action_todoList.toggleTodo(id) );
  },
  dispatch_remove(id) {
    dispatch( Action_todoList.removeTodo(id) );
  }
});


export {mapStoreToProps, mapDispatchToProps};
