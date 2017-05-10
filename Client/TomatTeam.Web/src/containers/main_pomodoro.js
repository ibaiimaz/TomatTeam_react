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
        let offset = new Date() - this.props.currentPomodoro.time;
        if(offset >= 60000) {
            this.setState({ currentTime:  null });
            this.endPomodoro();
            return;
        }

        this.setState({ currentTime:  new Date() });
    }

    setCurrentTime() {
        if(this.props.currentPomodoro.time != null && interval == null) {
            interval = setInterval(this.tick.bind(this), 1000)
        }
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

        const duration = this.props.currentPomodoro.status == 2 ? 5 : 1;

        return (
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-offset-1 col-lg-4">
                <h3>USER: { this.props.currentUser.userName }</h3>
                {/*<div className="panel">*/}
                    <div className="row panel">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <Timer duration={duration} currentTime={this.state.currentTime} time={this.props.currentPomodoro.time} />
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