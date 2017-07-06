import _ from 'lodash';
import React from 'react';


import style from './style';
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`todoApp ${style['module-style']}`}>
        hello world
      </div>
    );
  }
};

export default TodoApp;

