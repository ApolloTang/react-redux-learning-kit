import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStoreToProps, mapDispatchToProps} from './selector';

import style from './style';

const FilterButton = ({filterType, onClick, currentfilterType}) => {
  if ( filterType === currentfilterType ) {
    return <div><span>{filterType}</span></div>
  }
  return (
    <div>
      <a href="#"
         onClick={e => {
           e.preventDefault()
           onClick(filterType)
         }} >
        {filterType}
      </a>
    </div>
  )
};


class TodoListFilterSettingCtrl extends Component {
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
        <FilterButton filterType='all'       onClick={this.handle_filterChanged} currentfilterType={currentfilterType} />
        <FilterButton filterType='active'    onClick={this.handle_filterChanged} currentfilterType={currentfilterType} />
        <FilterButton filterType='completed' onClick={this.handle_filterChanged} currentfilterType={currentfilterType} />
      </div>
    );
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(TodoListFilterSettingCtrl);
