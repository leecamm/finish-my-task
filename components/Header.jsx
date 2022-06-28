import React, { useState } from "react";
import Image from "next/image";
import { default as logo } from "../public/static/logo.svg";

import ModalAbout from "./ModalAbout";
import IconQuestion from "./icons/IconQuestion";

const Header = () => {
  const [openAbout, setOpenAbout] = useState(false);
  return (
    <div className="">
      <div className="flex gap-x-5 md:justify-end items-center pt-5 justify-center">
        <a onClick={() => setOpenAbout((value) => !value)}>
          <p className="font-medium text-white text-sm md:text-base cursor-pointer">
            about
          </p>
        </a>
        <a href="#contact">
          <p className="font-medium text-white text-sm md:text-base">contact</p>
        </a>
        <a href="#contact">
          <p className="font-medium text-white text-sm md:text-base">
            <IconQuestion />
          </p>
        </a>
      </div>
      <div className="cursor-pointer logo flex justify-center mx-auto mt-5 mb-14 md:m-0">
        <Image src={logo} alt="logo" />
      </div>

      <ModalAbout openAbout={openAbout} setOpenAbout={setOpenAbout} />
    </div>
  );
};

export default Header;
