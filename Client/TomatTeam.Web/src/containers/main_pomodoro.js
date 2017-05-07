import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startPomodoro } from '../actions/index';
import { bindActionCreators } from 'redux';

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

        const time = this.props.currentPomodoro.time ? this.props.currentPomodoro.time.toString() : "";

        return (
            <div style={containerStyle}>
                <h4>Main Pomodoro</h4>
                <div>{time}</div>
                <h5>{ this.props.currentPomodoro.status }</h5>
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