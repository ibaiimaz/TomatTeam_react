import React from 'react';

const PomodoroListItem = (props) => {
  return ( 
    <li>{props.pomodoro.time}</li>
  );
};

export default PomodoroListItem;