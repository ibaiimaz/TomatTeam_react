export function clockTick(currentTime, teamPomodoroes) {
    teamPomodoroes.forEach(function(element) {
        
    }, this);

    return {
        type: 'CLOCK_TICK',
        payload: { currentTime, teamPomodoroes }
    };
}

export function startPomodoro(pomodoro) {
    //console.log(`User ${ pomodoro.userId } started a Pomodoro at ${ pomodoro.time.toString() }`, pomodoro);
    return {
        type: 'POMODORO_STARTED',
        payload: pomodoro
    };
}

export function cancelPomodoro(pomodoro) {
    return {
        type: 'POMODORO_CANCELLED',
        payload: pomodoro
    };
}