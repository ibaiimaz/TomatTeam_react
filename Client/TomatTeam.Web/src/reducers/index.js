import { combineReducers } from 'redux';
import CurrentUserReducer from './reducer_current_user';

const rootReducer = combineReducers({
  currentUser: CurrentUserReducer
});

export default rootReducer;
