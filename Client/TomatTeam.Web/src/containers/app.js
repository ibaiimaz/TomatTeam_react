import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import MainPomodoro from './main_pomodoro';
import PomodoroList from './pomodoro_list';

class App extends Component {
  
  render() {
    const settings = {
      pomodoroTime: 10 * 1000, //in miliseconds
      restingTime: 5 * 1000 ////in miliseconds
    };
    return (
      <div> 
        <div className="row">
          <Header currentUser={this.props.currentUser} />
        </div>
        <div className="row">
          <MainPomodoro settings={settings} currentUser={this.props.currentUser} />
          <PomodoroList currentUser={this.props.currentUser} />
        </div>
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
