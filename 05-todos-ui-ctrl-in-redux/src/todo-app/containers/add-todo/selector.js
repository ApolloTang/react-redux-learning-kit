import Action_todoList from 'todo-app/containers/todo-list/actions';

const mapStoreToProps = store=>({});

const mapDispatchToProps = dispatch => ({
    dispatch_addTodo(text) { dispatch( Action_todoList.addTodo(text) ); }
});


export {mapStoreToProps, mapDispatchToProps};
