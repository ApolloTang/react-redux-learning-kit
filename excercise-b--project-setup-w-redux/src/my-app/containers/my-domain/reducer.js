import _ from 'lodash';
import c from 'root/actions-names';

const initialState = {};

const fooBar = (state = initialState, action) => {
  switch (action.type) {
    case c[`myDomain__doSomthing`]: {
      const state_prev = state;
      const state_next = {
        ...state_prev,
        [action.payload.id]: action.payload
      };
      return state_next;
    }
    default:
      return state
  }
}

export default fooBar
