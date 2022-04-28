import React, { useState, useEffect } from "react";
import Alarm from "./Alarm";
import Timer from "./Timer";

const Pomodoro = () => {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [seconds, setSecond] = useState(0);

  const [stage, setStage] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [consumedSecond, setConsumedSecond] = useState(0);

  const switchStage = (index) => {
    const isYes =
      consumedSecond && stage !== index
        ? confirm("Are you sure you want to switch?")
        : false;
    if (isYes) {
      reset();
      setStage(index);
    } else if (!consumedSecond) {
      setStage(index);
    }
  };

  const getTickingTime = () => {
    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };

  const updateMinutes = () => {
    const updateStage = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };

  const reset = () => {
    setConsumedSecond(0);
    setTicking(false);
    setPomodoro(25);
    setShortBreak(5);
    setLongBreak(15);
    setSecond(0);
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinutes();

    if (minutes === 0 && seconds === 0) {
      reset();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSecond(59);
    } else {
      setSecond((second) => second - 1);
    }
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSecond ? "show warning" : null;
    };

    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSecond((value) => value + 1);
        clockTicking();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, pomodoro, shortBreak, longBreak, ticking]);

  return (
    <div className="md:col-start-5 md:col-span-4 lg:col-start-6 lg:col-span-5 bg-gray-500">
      <Timer
        stage={stage}
        switchStage={switchStage}
        getTickingTime={getTickingTime}
        seconds={seconds}
        ticking={ticking}
        setTicking={setTicking}
        reset={reset}
      />
      <Alarm />
    </div>
  );
};

export default Pomodoro;
