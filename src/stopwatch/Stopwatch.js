import { useState, useEffect } from "react";
import "./style.css";

const Stopwatch = () => {
  // to store time
  const [time, setTime] = useState(0);

  // to check whether time is running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  //Hours calculation
  const hours = Math.floor(time / 360000);

  //Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  //seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  //milliseconds calculation
  const milliseconds = time % 100;

  //method to start & stop the timer
  const handleStartAndStop = () => {
    setIsRunning(!isRunning);
  };

  //method to reset the time to 0
  const handleReset = () => {
    setTime(0);
  };

  return (
    <div className="container">
      <h1 className="heading">Stopwatch using React Js</h1>
      <p className="showTime">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="buttons">
        <button className="btn" onClick={handleStartAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
