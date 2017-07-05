import _ from 'lodash';
import c from 'root/actions-names';

const Action_todoList = {
  addTodo(text) {
    return {
      type: c[`todos__add`],
      payload: {
        id: _.uniqueId(),
        text
      }
    }
  },
  removeTodo(id) {
    return {
      type: c[`todos__remove`],
      payload: {
        id
      }
    }
  },
  toggleTodo(id) {
    return {
      type: c[`todos__toggle`],
      payload: {
        id
      }
    }
  }
};

export default Action_todoList;
