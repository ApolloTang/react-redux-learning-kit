import React from 'react';
import PropTypes from 'prop-types';

import style from './style.less';
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handle_inputChange = this.handle_inputChange.bind(this);
    this.handle_keyUp = this.handle_keyUp.bind(this);
    this.handle_buttonClicked = this.handle_buttonClicked.bind(this);
    this.state = { inputText: '' };
  }

  handle_inputChange(e) {
    const inputText = e.target.value;
    this.setState({ inputText });
  }

  handle_keyUp(e) {
    const RETURN = 13;
    const keyCode = e.keyCode;
    if (keyCode === RETURN && !/^\s*$/.test(this.state.inputText)) {
      this.props.createTodo(this.state.inputText);
      this.setState({ inputText: ''});
    }
  }

  handle_buttonClicked(e) {
    if (!/^\s*$/.test(this.state.inputText)) {
      this.props.createTodo(this.state.inputText);
      this.setState({ inputText: ''});
    }
  }

  render() {
    return (
      <div className={`section-addTodo ${style['module-style']}`} >
        <input
          className="todo-textInput"
          placeholder="What needs to be done?"
          value={this.state.inputText}
          onChange={ this.handle_inputChange }
          onKeyUp={ this.handle_keyUp }
        />
        <button
          className="addTodo"
          onClick={ this.handle_buttonClicked }>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    );
  };
}
AddTodo.proptypes = {
    createTodo: PropTypes.func
}

export default AddTodo;
