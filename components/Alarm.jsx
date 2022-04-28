import React from "react";

const Alarm = () => {
  return (
    <audio controls>
      <source src="/alarm.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Alarm;
