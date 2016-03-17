import { combineReducers } from 'redux';
import {
  SOME_ACTION
} from '../actions';

function entities(state = {}, action) {
  switch (action.type) {
    case SOME_ACTION:
      return Object.assign({}, state, {
          receivedAt: action.receivedAt
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  entities
});

export default rootReducer;
