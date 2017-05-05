import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPomodoro extends Component {
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
                <div>{this.props.currentPomodoro.time}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
      currentPomodoro: state.currentPomodoro
  };
}

export default connect(mapStateToProps)(MainPomodoro);