import React from 'react';
import Header from './header';
import MainPomodoro from './main_pomodoro';
import PomodoroList from './pomodoro_list';

const App = () => {
  const pomodoro = {
    time: new Date('2017-05-01T09:04:00'),
    status: 1 //0: Not started 1: Working 2: Resting
  };

  const pomodoroes = [{
      userName: 'Member 2',
      time: new Date('2017-05-01T09:04:00'),
      status: 1
    },{
      userName: 'Member 2',
      time: new Date('2017-05-01T09:04:00'),
      status: 1
    },{
      userName: 'Member 2',
      time: new Date('2017-05-01T09:04:00'),
      status: 1
    },{
      userName: 'Member 2',
      time: new Date('2017-05-01T09:04:00'),
      status: 1
    }
  ];

  return ( 
    <div>
      <Header userName='Ibai' teamName='Orange Team' />
      <MainPomodoro pomdoro={pomodoro} />
      <PomodoroList pomodoroes={pomodoroes} />      
    </div>
  );
};

export default App;
