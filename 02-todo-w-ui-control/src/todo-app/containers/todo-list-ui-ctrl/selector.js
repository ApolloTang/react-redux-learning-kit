import _ from 'lodash';
import Action from './actions';

const mapStoreToProps = (store, ownProps) => {
  const filterType = _.get(store, `todosUiControl.filterType`, 'all');
  return { filterType };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch_changeFilterSetting (filterType) {
      dispatch(Action.setFilterType(filterType));
  }
});

export {mapStoreToProps, mapDispatchToProps};
