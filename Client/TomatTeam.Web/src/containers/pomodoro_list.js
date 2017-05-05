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
      padding: '5px',
      width: '49%',
      float: 'right'
    };

    return (
      <div style={containerStyle}> 
        <ul className="col-md-4 list-groups">
          {this.renderList()}
        </ul>
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