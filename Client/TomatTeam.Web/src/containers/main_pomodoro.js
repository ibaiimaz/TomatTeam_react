import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startPomodoro } from '../actions/index';
import { bindActionCreators } from 'redux';

import Timer from '../components/timer';
import PomodoroStatus from '../components/pomodoro_status';

class MainPomodoro extends Component {
    startPomodoro() {
        this.props.currentPomodoro.time = new Date();
        this.props.currentPomodoro.status = 1;
        this.props.startPomodoro(this.props.currentPomodoro);
    }

    render() {
        const containerStyle = {
            border: '1px solid #666',
            padding: '5px',
            width: '49%',
            float: 'left'
        };

        return (
            <div style={containerStyle}>
                <h4>Main Pomodoro</h4>
                <Timer time={this.props.currentPomodoro.time} />
                <PomodoroStatus status={this.props.currentPomodoro.status} />
                <button type="button" onClick={() => this.startPomodoro()}>Start</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
      currentPomodoro: state.currentPomodoro
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ startPomodoro }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPomodoro);