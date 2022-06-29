import React from "react";
import IconClose from "./icons/IconClose";

const ModalContact = ({ openContact, setOpenContact }) => {
  return (
    <>
      <div
        className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${
          openContact ? "" : "hidden"
        }`}
        onClick={() => setOpenContact(false)}
      ></div>
      <div
        className={`max-w-xl bg-gray-600 absolute w-11/12 left-1/2 top-1/2 p-5 rounded-lg shadow-lg z-10 tracking-wide overflow-y-scroll no-scrollbar ${
          openContact ? "" : "hidden"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="text-gray-100 flex justify-between items-center font-semibold">
          <h2>Contact Us</h2>
          <button type="button" onClick={() => setOpenContact(false)}>
            <IconClose />
          </button>
        </div>
        <div className="h-0.5 w-full bg-gray-300 my-4"></div>
        <div className="flex gap-5">
          <div className="w-full text-gray-200">
            If you have any questions or any feedback about the website, please
            contact use by sending email to: <br />
            <a href="mailto:duchieule630@gmail.com" className="text-sky-400">
              duchieule630@gmail.com
            </a>
          </div>
        </div>
        <div className="text-gray-100 flex justify-between items-center font-semibold mt-6">
          <h2>
            Finish my task - made by{" "}
            <a
              href="https://github.com/leecamm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400"
            >
              Harry Le
            </a>
          </h2>
        </div>
        <div className="h-0.5 w-full bg-gray-300 my-4"></div>
        <div className="flex gap-5">
          <div className="w-full text-gray-200">
            If you find the website useful, please consider donating to me via:
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center mt-5">
          <a
            href="https://www.buymeacoffee.com/harryle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=harryle&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" />
          </a>
        </div>

        <div className="flex gap-4 my-2">
          <div
            className="text-sm underline flex items-center text-gray-300 hover:text-gray-200 mt-5 cursor-pointer"
            onClick={() => setOpenContact(false)}
          >
            close
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ModalContact);
