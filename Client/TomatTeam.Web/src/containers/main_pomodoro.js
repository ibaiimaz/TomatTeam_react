import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startPomodoro, cancelPomodoro } from '../actions/index';

import { bindActionCreators } from 'redux';

import Timer from '../components/timer';
import PomodoroStatus from '../components/pomodoro_status';

class MainPomodoro extends Component {
    startPomodoro() {
        this.props.currentPomodoro.time = new Date();
        this.props.currentPomodoro.status = 1;
        this.props.startPomodoro(this.props.currentPomodoro);
    }

    cancelPomodoro() {
        this.props.currentPomodoro.time = null;
        this.props.currentPomodoro.status = 2;
        this.props.cancelPomodoro(this.props.currentPomodoro);
    }

    render() {
        const containerStyle = {
            border: '1px solid #ddd',
            padding: '5px',
            // width: '49%',
            // float: 'left'
        };

        return (
            <div className="col-xs-12 col-sm-6 col-md-5">
                <h3>USER: { this.props.currentUser.userName }</h3>
                <div className="panel row">
                    <div className="col-md-7">
                        <Timer time={this.props.currentPomodoro.time} />
                        <PomodoroStatus status={this.props.currentPomodoro.status} />
                    </div>
                    <div className="col-md-5">
                        {this.props.currentPomodoro.status == 0 &&
                            <button type="button" onClick={() => this.startPomodoro()} >Start</button>
                        }
                        {this.props.currentPomodoro.status != 0 &&
                            <button type="button" onClick={() => this.cancelPomodoro()} >Cancel</button>
                        }
                    </div>
                </div>
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
    return bindActionCreators({ startPomodoro, cancelPomodoro }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPomodoro);