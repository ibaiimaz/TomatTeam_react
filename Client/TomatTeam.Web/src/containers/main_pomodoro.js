import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startPomodoro, cancelPomodoro } from '../actions/index';

import { bindActionCreators } from 'redux';

import Timer from '../components/timer';
import PomodoroStatus from '../components/pomodoro_status';

let interval = null;

class MainPomodoro extends Component {
    componentDidMount() {
        this.tick();
    }

    componentDidUpdate(prev_props, prev_state) {
        this.tick();
    }

    tick() {
        if (this.props.currentPomodoro.time == null) return;

        const limitTime = this.calculateLimitTime();
        const offset = this.props.currentTime - this.props.currentPomodoro.time;

        if (offset >= limitTime) {
            switch (this.props.currentPomodoro.status) {
                case 1:
                    this.endPomodoro();
                    break;
                case 2:
                    this.endBreak();
                    break;
            }
            return;
        }
    }

    calculateLimitTime() {
        return this.props.currentPomodoro.status != 2 ? this.props.settings.pomodoroTime : this.props.settings.restingTime;
    }

    startPomodoro() {
        this.props.currentPomodoro.time = new Date();
        this.props.currentPomodoro.status = 1;
        this.props.startPomodoro(this.props.currentPomodoro);
    }

    cancelPomodoro() {
        this.props.currentPomodoro.time = null;
        this.props.currentPomodoro.status = 0;
        this.props.cancelPomodoro(this.props.currentPomodoro);
    }

    endPomodoro() {
        this.props.currentPomodoro.time = null;
        this.props.currentPomodoro.status = 2;
        this.props.cancelPomodoro(this.props.currentPomodoro);
    }

    startBreak() {
        this.props.currentPomodoro.time = new Date();
        this.props.currentPomodoro.status = 2;
        this.props.startPomodoro(this.props.currentPomodoro);
    }

    endBreak() {
        this.props.currentPomodoro.time = null;
        this.props.currentPomodoro.status = 0;
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
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-offset-1 col-lg-4 main-pomodoro">
                <h3>USER: {this.props.currentUser.userName}</h3>
                {/*<div className="panel">*/}

                <div className="row clear-margin panel panel-default">
                    <div className="col-xs-6 col-sm-6 col-md-6 panel-body">
                        <Timer duration={this.calculateLimitTime()} currentTime={this.props.currentTime} time={this.props.currentPomodoro.time} />
                        <PomodoroStatus status={this.props.currentPomodoro.status} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 pomodoro-btn-group panel-body">
                        {this.props.currentPomodoro.status != 1 &&
                            <button type="button" onClick={() => this.startPomodoro()} >Start Pomodoro</button>
                        }
                        {this.props.currentPomodoro.status == 2 && this.props.currentPomodoro.time == null &&
                            <button type="button" onClick={() => this.startBreak()} >Start Break</button>
                        }
                        {this.props.currentPomodoro.status == 1 &&
                            <button type="button" onClick={() => this.cancelPomodoro()} >Cancel Pomodoro</button>
                        }
                    </div>
                </div>
            </div>
            // </div>
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