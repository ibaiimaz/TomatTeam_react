import React from 'react';

const PomodoroListItem = (props) => {
  return ( 
    <li>{props.pomodoro.time.toString()}</li>
  );
};

export default PomodoroListItem;