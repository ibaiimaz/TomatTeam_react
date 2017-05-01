import React from 'react';
import PomodoroListItem from './pomodoro_list_item';

const PomodoroList = (props) => {
  const PomodoroItems = props.pomodoroes.map((pomodoro) => {
    return <PomodoroListItem pomodoro={pomodoro} />
  });

  return ( 
    <ul className="col-md-4 list-groups">
      {PomodoroItems}
    </ul>
  );
};

export default PomodoroList;