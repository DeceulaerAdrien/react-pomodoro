import React, { useState, useEffect } from "react";

const Pomodoro = () => {
  const [Min, setMin] = useState(25);
  const [Sec, setSec] = useState(0);
  const [isStart, setStart] = useState(false);

  const increaseMin = () => {
    Min >= 59 ? setMin(0) : setMin(Min + 1);
  };

  const decreaseMin = () => {
    Min <= 0 ? setMin(59) : setMin(Min - 1);
  };

  const decreaseTimerMin = () => {
    Min <= 0 ? setMin(0) : setMin(Min - 1);
    Sec <= 0 ? setSec(59) : null;
  };

  const decreasOneSec = () => {
    Sec <= 0 ? decreaseTimerMin() : setSec(Sec - 1);
    Sec === 0 && Min === 0 ? stopTimer() : null;
  };

  const Timer = () => {};

  const reset = () => {
    setMin(25) + setSec(0);
  };

  return (
    <section className="timer">
      <h2>
        {Min === 0 ? "00" : Min < 10 ? "0" + Min : Min}:
        {Sec === 0 ? "00" : Sec < 10 ? "0" + Sec : Sec}
      </h2>
      <div className="buttons">
        <button onClick={increaseMin}>+</button>
        <button onClick={Timer}>{isStart === true ? "stop" : "start"}</button>
        <button onClick={reset}>reset</button>
        <button onClick={decreaseMin}>-</button>
      </div>
    </section>
  );
};

export default Pomodoro;
