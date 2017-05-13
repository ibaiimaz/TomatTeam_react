import React, { Component } from 'react';
import { connect } from 'react-redux';

import PomodoroListItem from '../components/pomodoro_list_item';

class PomodoroList extends Component {

  renderList() {
    return this.props.teamPomodoroes.map((pomodoro) => {
      return <PomodoroListItem key={pomodoro.id} pomodoro={pomodoro} />
    });
  }

  render() {
    const containerStyle = {
      border: '1px solid #666',
      // padding: '5px',
      // width: '49%',
      // float: 'right'
    };

    return (
      <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
        <h3>TEAM: {this.props.currentUser.teamName} </h3>
        <div className="row clear-margin">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <ul className="list-group">
              {this.renderList()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teamPomodoroes: state.teamPomodoroes
  };
}

export default connect(mapStateToProps)(PomodoroList);