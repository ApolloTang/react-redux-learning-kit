import React from 'react';
import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';

import TodoListView from 'todo-app/presentation/todos-view';

export default connect(mapStoreToProps, mapDispatchToProps)(TodoListView);
