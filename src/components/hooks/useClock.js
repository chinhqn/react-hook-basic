import React, { useState, useEffect } from 'react';


function useClock(props) {
  const [timeString, setTimeString] = useState('');
  function dateFormat() {
    const date = new Date();
    const hour = `0${date.getHours()}`.slice(-2);
    const minus = `0${date.getMinutes()}`.slice(-2);
    const second = `0${date.getSeconds()}`.slice(-2);
    return `${hour} : ${minus} : ${second}`;
  }
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = dateFormat(now);
      setTimeString(newTimeString);
    }, 1000);
    console.log(2342423);
    return () => {
      clearInterval(clockInterval);
    }
  }, [])
  return {timeString};
}

export default useClock;