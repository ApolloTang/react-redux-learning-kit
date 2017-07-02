import React from 'react';
import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';

import style from './style.less';
const AddTodo = ({dispatch_addTodo}) => {
  let inputValue;
  let inputNode;
  return (
    <div className={`section_addTodo ${style['module-style']}`} >
      <input className="todoTextInput"
        defaultValue="What needs to be done?"
        ref={ thisNode=>{ inputNode = thisNode }}
        onChange={e=>{ e.preventDefault(); inputValue=e.target.value;}}
        />
      <button className="addTodo" onClick={()=>{dispatch_addTodo(inputValue)}}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default connect(mapStoreToProps, mapDispatchToProps)(AddTodo);
