import React from "react";
import Timer from "./Timer";

const Pomodoro = () => {
  return (
    <div className="md:col-start-5 md:col-span-4 lg:col-start-6 lg:col-span-5 bg-gray-500">
      <Timer />
    </div>
  );
};

export default Pomodoro;
