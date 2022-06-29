import React from "react";
import IconClose from "./icons/IconClose";

const ModalAbout = ({ openAbout, setOpenAbout }) => {
  return (
    <>
      <div
        className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${
          openAbout ? "" : "hidden"
        }`}
        onClick={() => setOpenAbout(false)}
      ></div>
      <div
        className={`max-w-xl bg-gray-600 absolute w-11/12 h-[30rem] left-1/2 top-1/2 p-5 rounded-lg shadow-lg z-10 tracking-wide overflow-y-scroll no-scrollbar ${
          openAbout ? "" : "hidden"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="text-gray-100 flex justify-between items-center font-semibold">
          <h2>What is Pomodoro technique?</h2>
          <button type="button" onClick={() => setOpenAbout(false)}>
            <IconClose />
          </button>
        </div>
        <div className="h-0.5 w-full bg-gray-300 my-4"></div>
        <div className="flex gap-5">
          <div className="w-full text-gray-200">
            The{" "}
            <a
              href="https://francescocirillo.com/pages/pomodoro-technique"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400"
            >
              Pomodoro Technique
            </a>{" "}
            is a time management method developed by Francesco Cirillo in the
            late 1980s. It uses a kitchen timer to break work into intervals,
            typically 25 minutes in length, separated by short breaks. Each
            interval is known as a pomodoro, from the Italian word for tomato,
            after the tomato-shaped kitchen timer Cirillo used as a university
            student. -{" "}
            <a
              href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400"
            >
              Wikipedia
            </a>
          </div>
        </div>
        <div className="text-gray-100 flex justify-between items-center font-semibold mt-6">
          <h2>What is Finish my task website?</h2>
        </div>
        <div className="h-0.5 w-full bg-gray-300 my-4"></div>
        <div className="flex gap-5">
          <div className="w-full text-gray-200">
            Finish my task is a customizable pomodoro timer that works on
            desktop and mobile browsers. This website can help you to stay
            focused on any task you are working on, such as studying, writing,
            or coding. You can add tasks, play ambient sounds, and change the
            website background to create the most pleasant working environment.
          </div>
        </div>
        <div className="text-gray-100 flex justify-between items-center font-semibold mt-6">
          <h2>Features</h2>
        </div>
        <div className="h-0.5 w-full bg-gray-300 my-4"></div>
        <div className="flex gap-5">
          <div className="w-full text-gray-200">
            <ul className="list-disc mx-4 space-y-1 ">
              <li>
                <b className="text-sky-300">Responsive design</b> that works on
                both desktop and mobile browsers
              </li>
              <li>
                <b className="text-sky-300">Customizable timer</b> intervals to
                suit your preference
              </li>
              <li>
                <b className="text-sky-300">Audio notification</b> at the end of
                a timer period to notify you
              </li>
              <li>
                <b className="text-sky-300">Background ambient sounds</b> to
                help you stay focused and relaxed
              </li>
              <li>
                <b className="text-sky-300">Beautiful background images</b> to
                add mood to your work
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 my-2">
          <div
            className="text-sm underline flex items-center text-gray-300 hover:text-gray-200 mt-5 cursor-pointer"
            onClick={() => setOpenAbout(false)}
          >
            close
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ModalAbout);
