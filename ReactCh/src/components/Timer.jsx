import "../styles/timer.css";

function Timer() {
  return (
    <>
      <div className="divTimer">
        <div className="divLetters">
          <h1>Timer</h1>
          <b>0 mins 0 secs</b>
        </div>
        <div className="divButtons">
          <button className="butStart">Start</button>
          <button className="butStop">Stop</button>
          <button className="butReset">Reset</button>
        </div>
      </div>
    </>
  );
}

export default Timer;
