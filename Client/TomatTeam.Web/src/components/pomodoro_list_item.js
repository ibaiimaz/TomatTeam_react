import React from 'react';

import Timer from './timer';
import PomodoroStatus from './pomodoro_status';

const PomodoroListItem = (props) => {
  return (
    <li className="list-group-item row">
      <div className="col-xs-4 col-md-4">
        <div className="member-name">{props.pomodoro.userName}</div>
        <PomodoroStatus status={props.pomodoro.status} />
      </div>
      <div className="col-xs-5 col-md-5">
        <Timer duration={10 * 60 * 1000} currentTime={new Date()} time={props.pomodoro.time} />
      </div>
      <div className="col-xs-3 col-md-3 align-right">
        {!props.pomodoro.helpAsked &&
          <button type="button" >Ask for help</button>
        }
        {props.pomodoro.helpAsked &&
          <div className="alert alert-warning">Request sent!</div>
        }
      </div>
    </li>
  );
};

export default PomodoroListItem;