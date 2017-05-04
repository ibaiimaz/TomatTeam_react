import React from 'react';
import PomodoroListItem from './pomodoro_list_item';

const PomodoroList = (props) => {
  const PomodoroItems = props.pomodoroes.map((pomodoro) => {
    return <PomodoroListItem key={pomodoro.id} pomodoro={pomodoro} />
  });

  const containerStyle = {
    border: '1px solid #666',
    padding: '5px',
    width: '49%',
    float: 'right'
  };

  return (
    <div style={containerStyle}> 
      <ul className="col-md-4 list-groups">
        {PomodoroItems}
      </ul>
    </div>
  );
};

export default PomodoroList;