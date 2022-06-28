import React from "react";
import IconClose from "./icons/IconClose";

const ModalQuestion = ({ openQuestion, setOpenQuestion }) => {
  return (
    <>
      <div
        className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${
          openQuestion ? "" : "hidden"
        }`}
        onClick={() => setOpenQuestion(false)}
      ></div>
      <div
        className={`max-w-xl bg-gray-600 absolute w-11/12 left-1/2 top-1/2 p-5 rounded-lg shadow-lg z-10 tracking-wide overflow-y-scroll no-scrollbar ${
          openQuestion ? "" : "hidden"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="text-gray-100 flex justify-between items-center font-semibold">
          <h1>How to use the Pomodoro Timer?</h1>
          <button type="button" onClick={() => setOpenQuestion(false)}>
            <IconClose />
          </button>
        </div>
        <div className="h-0.5 w-full bg-gray-300 my-4"></div>
        <div className="flex gap-5">
          <div className="w-full text-gray-200">
            <ul className="list-decimal mx-4 space-y-1 ">
              <li>
                <b className="text-sky-300">Add tasks</b> to work on today
              </li>
              <li>
                <b className="text-sky-300">Set your preference time</b>{" "}
                (default: 25 min)
              </li>
              <li>
                <b className="text-sky-300">Start a timer</b> and focus on the
                task for 25 minutes
              </li>
              <li>
                <b className="text-sky-300">Take a break</b> for 5 minutes when
                the alarm rings
              </li>
              <li>
                <b className="text-sky-300">Take a 15-minute break</b> after
                finishing 4 pomodoros
              </li>
              <li>
                <b className="text-sky-300">Repeat</b> until you finish the
                tasks
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 my-2">
          <div
            className="text-sm underline flex items-center text-gray-300 hover:text-gray-200 mt-5 cursor-pointer"
            onClick={() => setOpenQuestion(false)}
          >
            close
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ModalQuestion);
