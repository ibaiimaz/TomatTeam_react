import React, { Component } from 'react';

let interval = null, offset = null;

export default class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = { countdown: null }
    }

    componentDidMount() {
        this.checkCountdown();
    }

    componentDidUpdate(prev_props, prev_state) {
        this.checkCountdown();
    }

    tick() {
        let countdown = this.calculateCountdown();
        this.setState({ countdown:  countdown });
    }

    checkCountdown() {
        if(this.props.time != null && interval == null) {
            interval = setInterval(this.tick.bind(this), 1000)
        }
    }

    calculateCountdown() {
        let offset = new Date() - this.props.time;
        return this.secondsTommss(((25 * 60000) - offset + 1000) / 1000);
    }

    secondsTommss(totalSeconds) {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds - (minutes * 60));

        let result = (minutes < 10 ? "0" + minutes : minutes);
        result += ":" + (seconds < 10 ? "0" + seconds : seconds);

        return result;
    }

    render() {
        const time = this.state.countdown || '25:00'

        return (
            <h1>{time}</h1>
        );
    }
}