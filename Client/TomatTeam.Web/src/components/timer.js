import React from 'react';

const Timer = (props) => {
    const time = props.time ? props.time.toTimeString() : '25:00'
  return ( 
    <h4>{time}</h4>
  );
};

export default Timer;