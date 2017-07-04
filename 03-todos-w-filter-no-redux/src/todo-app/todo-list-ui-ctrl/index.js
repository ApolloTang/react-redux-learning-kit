import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
FilterButton.proptypes = {
  currentfilterType: PropTypes.string,
  onClick: PropTypes.func,
  filterType: PropTypes.string
}




class TodoListUiCtrl extends Component {
  constructor(props) {
    super(props);
    this.handle_filterChanged=this.handle_filterChanged.bind(this);
  }

  handle_filterChanged(filterType) {
    this.props.selectFilter(filterType);
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
TodoListUiCtrl.propTypes = {
  selectFilter: PropTypes.func,
  filterType: PropTypes.string
}

export default TodoListUiCtrl;
