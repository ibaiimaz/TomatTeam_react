import { combineReducers } from 'redux';
import CurrentUserReducer from './reducer_current_user';
import TeamPomodoroesReducer from './reducer_team_pomodoroes';
import CurrentPomodoroReducer from './reducer_current_pomodoro';

const rootReducer = combineReducers({
  currentUser: CurrentUserReducer,
  teamPomodoroes: TeamPomodoroesReducer,
  currentPomodoro: CurrentPomodoroReducer
});

export default rootReducer;
