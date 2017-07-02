import React from 'react';
import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';

import style from './style.less';
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: '' };
  }

  handle_inputChanged = (e) => {
    const inputText = e.target.value;
    this.setState({inputText});
  }

  handle_buttonClicked = (e) => {
    if (this.state.inputText !=='' ) {
      this.props.dispatch_addTodo(this.state.inputText);
      this.setState({inputText:''});
    }
  }

  render() {
    return (
      <div className={`section_addTodo ${style['module-style']}`} >
        <input
          className="todoTextInput"
          placeholder="What needs to be done?"
          value={this.state.inputText}
          onChange={ this.handle_inputChanged}
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

export default connect(mapStoreToProps, mapDispatchToProps)(AddTodo);
