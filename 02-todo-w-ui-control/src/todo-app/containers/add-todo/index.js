import React from 'react';
import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';


const AddTodo = ({dispatch_addTodo}) => {
  let inputValue;
  let inputNode;
  return (
    <div>
      <form onSubmit={
        e=>{
          e.preventDefault();
          dispatch_addTodo(inputValue);
          inputValue = '';
          inputNode.value = '';
        }} >
        <input
          ref={ thisNode=>{ inputNode = thisNode }}
          onChange={e=>{ e.preventDefault(); inputValue=e.target.value;}}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};


export default connect(mapStoreToProps, mapDispatchToProps)(AddTodo);
