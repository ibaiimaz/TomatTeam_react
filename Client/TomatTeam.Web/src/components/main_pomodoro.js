import React, { Component } from 'react';

export default class MainPomodoro extends Component {
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
                <div>{this.props.pomodoro.id}</div>
            </div>
        )
    }
}