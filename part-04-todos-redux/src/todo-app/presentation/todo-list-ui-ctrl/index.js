import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

import style from './style';

const FilterButton = (props) => {
  return (
    <div className="filterButton">
      {props.children}
    </div>
  )
};


class TodoListUiCtrl extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`todo-list-filter-setting-ctrl ${style['module-style']}`} >
        <div className="label"><span>Show:{' '}</span></div>
        <FilterButton><NavLink activeClassName="isActive" to="all"      >all</NavLink></FilterButton>
        <FilterButton><NavLink activeClassName="isActive" to="active"   >active</NavLink></FilterButton>
        <FilterButton><NavLink activeClassName="isActive" to="completed">completed</NavLink></FilterButton>
      </div>
    );
  }
}

export default TodoListUiCtrl;
