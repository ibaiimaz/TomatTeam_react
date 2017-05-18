import React, {Component} from 'react';

import Timer from './timer';
import PomodoroStatus from './pomodoro_status';

class PomodoroListItem extends Component {
  calculateLimitTime() {
    return this.props.pomodoro.status != 2 ? this.props.settings.pomodoroTime : this.props.settings.restingTime;
  }

  render() {
    return (
      <li className="list-group-item row">
        <div className="col-xs-4 col-md-4">
          <div className="member-name">{this.props.pomodoro.userName}</div>
          <PomodoroStatus status={this.props.pomodoro.status} />
        </div>
        <div className="col-xs-5 col-md-5">
          <Timer duration={this.calculateLimitTime()} currentTime={this.props.currentTime} time={this.props.pomodoro.time} />
        </div>
        <div className="col-xs-3 col-md-3 align-right">
          {!this.props.pomodoro.helpAsked &&
            <button type="button" >Ask for help</button>
          }
          {this.props.pomodoro.helpAsked &&
            <div className="alert alert-warning">Request sent!</div>
          }
        </div>
      </li>
    );
  }
}

export default PomodoroListItem;