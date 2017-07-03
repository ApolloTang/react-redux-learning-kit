import todoList from 'todo-app/containers/todo-list/actions-names';
import todoListUiCtrl from 'todo-app/containers/todo-list-ui-ctrl/actions-names';

const symbols = [
  ...todoList,
  ...todoListUiCtrl
].reduce((acc, eventName) => ({
    ...acc,
    [`${eventName}`]: acc[eventName] ? duplicateEventNameError(eventName) : Symbol.for(eventName)
}), {});

function duplicateEventNameError (eventName) {
    throw new Error(`Event ${eventName} already exists`);
}

export default symbols;

