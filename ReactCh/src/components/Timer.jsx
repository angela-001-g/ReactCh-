import "../styles/timer.css";
import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  return (
    <>
      <div className="divTimer">
        <div className="divLetters">
          <h1>Timer</h1>
          {hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </div>
        <div className="divButtons">
          <button className="butStart" onClick={() => setIsRunning(true)}>
            Start
          </button>
          <button className="butStop">Stop</button>
          <button className="butReset">Reset</button>
        </div>
      </div>
    </>
  );
}

export default Timer;
