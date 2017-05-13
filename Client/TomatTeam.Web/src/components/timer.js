import React, { Component } from 'react';

let offset = null;

export default class Timer extends Component {

    calculateCountdown() {
        let offset = this.props.currentTime - this.props.time;
        return this.secondsTommss((this.props.duration - offset) / 1000);
    }

    secondsTommss(totalSeconds) {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds - (minutes * 60));

        let result = (minutes < 10 ? "0" + minutes : minutes);
        result += ":" + (seconds < 10 ? "0" + seconds : seconds);

        return result;
    }

    timeToShow() {
        if(this.props.time != null && this.props.currentTime != null) {
            return this.calculateCountdown();
        } else {
            return this.secondsTommss(this.props.duration / 1000);
        }
    }

    render() {        
        const time = this.timeToShow();

        return (
            <div className="timer">{time}</div>
        );
    }
}