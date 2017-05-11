import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startPomodoro, cancelPomodoro } from '../actions/index';

import { bindActionCreators } from 'redux';

import Timer from '../components/timer';
import PomodoroStatus from '../components/pomodoro_status';

let interval = null;

class MainPomodoro extends Component {
    constructor(props) {
        super(props)

        this.state = { currentTime: null }
    }

    componentDidMount() {
        this.setCurrentTime();
    }

    componentDidUpdate(prev_props, prev_state) {
        this.setCurrentTime();
    }

    tick() {
        if(this.props.currentPomodoro.time == null) return;

        const limitTime = this.calculateLimitTime();
        console.log(limitTime);
        const offset = new Date() - this.props.currentPomodoro.time;
        
        if(offset >= limitTime) {

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

        this.setState({ currentTime:  new Date() });
    }

    setCurrentTime() {
        if(this.props.currentPomodoro.time != null && interval == null) {
            interval = setInterval(this.tick.bind(this), 1000)
        }
    }

    calculateLimitTime() {
        return this.props.currentPomodoro.status != 2 ? this.props.settings.pomodoroTime : this.props.settings.restingTime;
    }

    startPomodoro() {
        this.setState({ currentTime:  null });

        this.props.currentPomodoro.time = new Date();
        this.props.currentPomodoro.status = 1;
        this.props.startPomodoro(this.props.currentPomodoro);
    }

    cancelPomodoro() {
        this.stopInterval();

        this.setState({ currentTime:  null });

        this.props.currentPomodoro.time = null;
        this.props.currentPomodoro.status = 0;
        this.props.cancelPomodoro(this.props.currentPomodoro);
    }

    endPomodoro() {
        this.stopInterval();

        this.setState({ currentTime:  null });

        this.props.currentPomodoro.time = null;
        this.props.currentPomodoro.status = 2;
        this.props.cancelPomodoro(this.props.currentPomodoro);
    }

    startBreak() {
        this.stopInterval();

        this.setState({ currentTime:  null });

        this.props.currentPomodoro.time = new Date();
        this.props.currentPomodoro.status = 2;
        this.props.startPomodoro(this.props.currentPomodoro);
    }

    endBreak() {
        this.stopInterval();

        this.setState({ currentTime:  null });

        this.props.currentPomodoro.time = null;
        this.props.currentPomodoro.status = 0;
        this.props.cancelPomodoro(this.props.currentPomodoro);
    }

    stopInterval() {
        if(interval != null) { 
            clearInterval(interval);
            interval = null;
        }
    }

    render() {
        const containerStyle = {
            border: '1px solid #ddd',
            padding: '5px',
            // width: '49%',
            // float: 'left'
        };

        return (
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-offset-1 col-lg-4">
                <h3>USER: { this.props.currentUser.userName }</h3>
                {/*<div className="panel">*/}
                    <div className="row panel">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <Timer duration={this.calculateLimitTime()} currentTime={this.state.currentTime} time={this.props.currentPomodoro.time} />
                            <PomodoroStatus status={this.props.currentPomodoro.status} />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 pomodoro-btn-group">
                            {this.props.currentPomodoro.status != 1 &&
                                <button type="button" onClick={() => this.startPomodoro()} >Start Pomodoro</button>
                            }
                            {this.props.currentPomodoro.status == 2 && this.props.currentPomodoro.time == null  &&
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