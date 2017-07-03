import _ from 'lodash';
import c from 'root/actions-names';

const initialState = {};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case c[`todos__add`]: {
      const state_prev = state;
      const state_next = {
        ...state_prev,
        [action.payload.id]: {
          text: action.payload.text,
          id: action.payload.id,
          complete: false
        }
      };
      return state_next;
    }
    case c[`todos__remove`]: {
      const state_prev = state;
      const state_next = {
        ...state_prev
      }
      delete state_next[action.payload.id];
      return state_next;
    }
    case c[`todos__toggle`]: {
      const state_prev = state;
      const state_next = {...state_prev};
      const prevComplete = state_prev[action.payload.id].complete;
      state_next[action.payload.id].complete = !prevComplete;
      return state_next;
    }
    default:
      return state
  }
}

export default todos
