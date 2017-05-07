export default function(state = null, action) {
    switch(action.type) {
        case 'POMODORO_STARTED':
            return action.payload;
    }

    //Temporaly we'll return default values
    return {
        id: 1,
        userId: 1,
        time: null,
        status: 0 //0: Not started 1: Working 2: Resting
    };
}