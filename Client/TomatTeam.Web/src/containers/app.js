import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import MainPomodoro from '../components/main_pomodoro';
import PomodoroList from '../components/pomodoro_list';

class App extends Component {
  
  render() {
    const pomodoro = {
      id: 1,
      userId: 1,
      time: new Date('2017-05-01T09:04:00'),
      status: 1 //0: Not started 1: Working 2: Resting
    };

    const pomodoroes = [{
        id: 2,
        userName: 'Member 2',
        time: new Date('2017-05-01T09:04:00'),
        status: 1
      },{
        id: 3,
        userName: 'Member 2',
        time: new Date('2017-05-01T09:04:00'),
        status: 1
      },{
        id: 4,
        userName: 'Member 2',
        time: new Date('2017-05-01T09:04:00'),
        status: 1
      },{
        id: 5,
        userName: 'Member 2',
        time: new Date('2017-05-01T09:04:00'),
        status: 1
      }
    ];

    return (
      <div>
        <Header currentUser={this.props.currentUser} />
        <MainPomodoro currentUser={this.props.currentUser} pomodoro={pomodoro} />
        <PomodoroList pomodoroes={pomodoroes} />      
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(App);
