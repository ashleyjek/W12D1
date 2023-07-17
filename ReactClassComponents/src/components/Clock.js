import React, { useEffect, useState } from 'react';

export const ClockToggle = (props) => {

  return (
      <button 
        type="button"
        className="clock-toggle" 
        onClick={props.toggleClock}
      >
        Toggle Clock
      </button>
  );
};

export const Clock = (props) => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const id = setInterval(tick, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  
  const tick = () => {
    setTime(new Date());
  }
  

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  const timezone = time
    .toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
    .replace(/[^A-Z]/g, "") // Strip out all but capitals
    .slice(3); // Eliminate initial GMT

  return (
    <section className="clock-section">
      <h1>Clock</h1>
      <div className='clock'>
        <p className="time">
          <span>
            Time:
          </span>
          <span>
            {`${hours}:${minutes}:${seconds} ${timezone}`}
          </span>
        </p>
        <p className="date">
          <span>
            Date: 
          </span>
          <span>
            {time.toDateString()}
          </span>
        </p>
      </div>
    </section>
  );


};

  

export default Clock;