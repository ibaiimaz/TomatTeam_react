import React from 'react';

const PomodoroStatus = (props) => {

    let statusText = '';
    let textColor = '';
    let backColor = '';

    switch(props.status) {
        case 0: 
            statusText = 'Not started';
            textColor = '#000';
            backColor = '#fff';
            break;
        case 1:
            statusText = 'Working ...';
            textColor = '#fff';
            backColor = '#ee4848';
            break;
        case 2:
            statusText = 'Resting ...';
            textColor = '#fff';
            backColor = '#55aa55';
            break;
    }
    
    const statusStyle = {
            'color': `${ textColor }`,
            'backgroundColor': `${ backColor }`,
            'borderRadius': '4px'
        };

  return ( 
    <div className="status" style={statusStyle}>{statusText}</div>
  );
};

export default PomodoroStatus;