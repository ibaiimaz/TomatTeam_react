import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import MainPomodoro from './main_pomodoro';
import PomodoroList from './pomodoro_list';

let interval = null;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { currentTime: null }
  }

  componentDidMount() {
    this.setCurrentTime();
  }

  setCurrentTime() {
    if (interval == null) {
      interval = setInterval(this.tick.bind(this), 1000)
    }
  }

  tick() {
    this.setState({ currentTime: new Date() });
  }

  render() {
    const settings = {
      pomodoroTime: 10 * 1000, //in miliseconds
      restingTime: 5 * 1000 ////in miliseconds
    };
    return (
      <div>
        <div className="row clear-margin">
          <Header currentUser={this.props.currentUser} />
        </div>
        <div className="row clear-margin">
          <MainPomodoro settings={settings} currentUser={this.props.currentUser} currentTime={this.state.currentTime} />
          <PomodoroList settings={settings} currentUser={this.props.currentUser} currentTime={this.state.currentTime} />
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
