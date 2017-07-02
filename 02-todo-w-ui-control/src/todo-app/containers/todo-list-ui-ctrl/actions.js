import _ from 'lodash';
import c from 'root/actions-names';

const Action_setTodoFilter = {
  setFilterType(filterType) {
    return {
      type: c[`todosUi__filterSetting_changed`],
      payload: {
        filterType
      }
    }
  },
};

export default Action_setTodoFilter;
