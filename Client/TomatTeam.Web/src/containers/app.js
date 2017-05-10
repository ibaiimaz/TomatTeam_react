import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import MainPomodoro from './main_pomodoro';
import PomodoroList from './pomodoro_list';

class App extends Component {
  
  render() {
    return (
      <div> 
        <div className="row">
          <Header currentUser={this.props.currentUser} />
        </div>
        <div className="row">
          <MainPomodoro currentUser={this.props.currentUser} />
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
