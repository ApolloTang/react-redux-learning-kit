import _ from 'lodash';
import c from 'root/actions-names';

const initialState = {
  filterType:'all'
};

const todoFilterControl = (state = initialState, action) => {
  switch (action.type) {
    case c[`todosUi__filterSetting_changed`]: {
      const state_prev = state;
      const filterType = action.payload.filterType
      console.log('filterType: ', filterType)
      const state_next = {
        filterType
      };
      return state_next;

    }
    default:
      return state
  }
}

export default todoFilterControl
