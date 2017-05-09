import React, { Component } from 'react';

let offset = null;

export default class Timer extends Component {

    calculateCountdown() {
        console.log("currentTime" + this.props.currentTime.toString());
        console.log("time" + this.props.time.toString());
        let offset = this.props.currentTime - this.props.time;
        return this.secondsTommss(((this.props.duration * 60000) - offset + 1000) / 1000);
    }

    secondsTommss(totalSeconds) {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds - (minutes * 60));

        let result = (minutes < 10 ? "0" + minutes : minutes);
        result += ":" + (seconds < 10 ? "0" + seconds : seconds);

        return result;
    }

    render() {

        const time = this.props.time != null && this.props.currentTime != null ? this.calculateCountdown() : `${ this.props.duration }:00`;

        return (
            <h1>{time}</h1>
        );
    }
}