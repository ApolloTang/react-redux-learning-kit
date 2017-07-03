import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStoreToProps, mapDispatchToProps} from './selector';

import style from './style';

const FilterButton = ({filterType, onClick, currentfilterType}) => {
  const isActive = filterType === currentfilterType
  return (
    <div className="filterButton" >
      <a href="#"
         className={isActive ? 'isActive' : ''}
         onClick={e => {
           e.preventDefault();
           onClick(filterType);
         }} >
        {filterType}
      </a>
    </div>
  )
};


class TodoListUiCtrl extends Component {
  constructor(props) {
    super(props);
  }

  handle_filterChanged = (filterType) =>{
    this.props.dispatch_changeFilterSetting(filterType);
  }

  render() {
    const currentfilterType = this.props.filterType;
    return (
      <div className={`todo-list-ui-ctrl ${style['module-style']}`} >
        <div className="label"><span>Show:{' '}</span></div>
        <FilterButton filterType='all'       onClick={this.handle_filterChanged} currentfilterType={currentfilterType} />
        <FilterButton filterType='active'    onClick={this.handle_filterChanged} currentfilterType={currentfilterType} />
        <FilterButton filterType='completed' onClick={this.handle_filterChanged} currentfilterType={currentfilterType} />
      </div>
    );
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(TodoListUiCtrl);
