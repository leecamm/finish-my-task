import React, { useState, useEffect, useRef } from "react";
import Alarm from "./Alarm";
import AudioPlayer from "./AudioPlayer";
import ModalSetting from "./ModalSetting";
import Timer from "./Timer";

const Pomodoro = () => {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [seconds, setSecond] = useState(0);

  const [stage, setStage] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [consumedSecond, setConsumedSecond] = useState(0);

  const [openSetting, setOpenSetting] = useState(false);

  const alarmRef = useRef();
  const pomodoroRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();

  const updateTimeDefaultValue = () => {
    setPomodoro(pomodoroRef.current.value);
    setShortBreak(shortBreakRef.current.value);
    setLongBreak(longBreakRef.current.value);
    setOpenSetting(false);
    setSecond(0);
    setConsumedSecond(0);
  };

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
    updateTimeDefaultValue();
    setSecond(0);
  };

  const timeUp = () => {
    // let i = 0;
    // while (i < 4) {
    //   console.log("running while loop");
    //   if (stage === 0) {
    //     setStage(1);
    //     alarmRef.current.play();
    //     reset();
    //   } else if (stage === 1) {
    //     setStage(0);
    //     alarmRef.current.play();
    //     reset();
    //   }
    //   if (i === 3) {
    //     console.log(i);
    //     break;
    //   }
    // }

    alarmRef.current.play();
    reset();
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinutes();

    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSecond(59);
    } else {
      setSecond((second) => second - 1);
    }
  };

  // const muteAlarm = () => {
  //   alarmRef.current.pause();
  //   alarmRef.current.currentTime = 0;
  // };

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
    <div className="md:col-start-5 md:col-span-4 lg:col-start-6 lg:col-span-5 ">
      <Timer
        stage={stage}
        switchStage={switchStage}
        getTickingTime={getTickingTime}
        seconds={seconds}
        ticking={ticking}
        setTicking={setTicking}
        reset={reset}
        // muteAlarm={muteAlarm}
        setOpenSetting={setOpenSetting}
      />
      <Alarm ref={alarmRef} />
      <ModalSetting
        openSetting={openSetting}
        setOpenSetting={setOpenSetting}
        pomodoroRef={pomodoroRef}
        shortBreakRef={shortBreakRef}
        longBreakRef={longBreakRef}
        updateTimeDefaultValue={updateTimeDefaultValue}
      />
      <AudioPlayer />
    </div>
  );
};

export default Pomodoro;
