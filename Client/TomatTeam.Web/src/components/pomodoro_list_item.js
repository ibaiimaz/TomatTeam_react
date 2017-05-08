import React from 'react';

const PomodoroListItem = (props) => {
  return ( 
    <li className="list-group-item">{props.pomodoro.time.toString()}</li>
  );
};

export default PomodoroListItem;