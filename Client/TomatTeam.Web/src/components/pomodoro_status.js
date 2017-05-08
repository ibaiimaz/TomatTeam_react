import React from 'react';

const PomodoroStatus = (props) => {

    let statusText = '';
    let statusColor = '';

    switch(props.status) {
        case 0: 
            statusText = 'Not started';
            statusColor = '#000';
            break;
        case 1:
            statusText = 'Working ...';
            statusColor = 'red';
            break;
        case 2:
            statusText = 'Resting ...';
            statusColor = 'green';
            break;
    }
    
    const statusStyle = {
            color: `${ statusColor }`
        };

  return ( 
    <h5 style={statusStyle}>{statusText}</h5>
  );
};

export default PomodoroStatus;