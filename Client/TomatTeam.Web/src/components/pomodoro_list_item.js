import React from 'react';

const PomodoroListItem = (props) => {
  return ( 
    <li>{props.pomodoro.userName}</li>
  );
};

export default PomodoroListItem;