import React, { useState } from "react";

const Pomodoro = () => {
  const [Min, setMin] = useState(25);
  const [Sec, setSec] = useState(0);
  const [isStart, setStart] = useState(false);

  const increaseOneMin = () => {
    Min >= 59 ? setMin(0) : setMin(Min + 1);
  };

  const decreasOneMin = () => {
    Min <= 0 ? setMin(59) : setMin(Min - 1);
  };
  const decreaseTimerMin = () => {
    Min <= 0 ? setMin(0) : setMin(Min - 1);
    Sec <= 0 ? setSec(59) : null;
  };
  const decreasOneSec = () => {
    Sec <= 0 ? decreaseTimerMin() : setSec(Sec - 1);
    Sec === 0 && Min === 0 ? stopTimer : null;
  };

  const startTimer = () => {
    setInterval(decreasOneSec(), 1000);
    setStart(true);
  };

  const stopTimer = (timer) => {
    timer = startTimer.timer;
    clearInterval(timer);
    setStart(false);
  };

  const reset = () => {
    stopTimer();
    setMin(25);
    setSec(0);
  };

  return (
    <section className="timer">
      <h2>
        {Min === 0 ? "00" : Min < 10 ? "0" + Min : Min}:
        {Sec === 0 ? "00" : Sec < 10 ? "0" + Sec : Sec}
      </h2>
      <div className="buttons">
        <button onClick={increaseOneMin}>+</button>
        <button onClick={isStart === false ? startTimer : stopTimer}>
          {isStart === true ? "stop" : "start"}
        </button>
        <button onClick={reset}>reset</button>
        <button onClick={decreasOneMin}>-</button>
      </div>
    </section>
  );
};

export default Pomodoro;
