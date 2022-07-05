import React, { useState } from "react";
import Image from "next/image";
import { default as logo } from "../public/static/logo.svg";

import ModalAbout from "./ModalAbout";
import ModalQuestion from "./ModalQuestion";
import ModalContact from "./ModalContact";
import IconQuestion from "./icons/IconQuestion";

const Header = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(false);
  return (
    <div className="">
      <div className="flex gap-x-5 md:justify-end items-center pt-5 justify-center">
        <div onClick={() => setOpenAbout((value) => !value)}>
          <p className="font-medium text-white text-sm md:text-base cursor-pointer">
            about
          </p>
        </div>
        <div onClick={() => setOpenContact((value) => !value)}>
          <p className="font-medium text-white text-sm md:text-base cursor-pointer">
            contact
          </p>
        </div>
        <div onClick={() => setOpenQuestion((value) => !value)}>
          <p className="font-medium text-white text-sm md:text-base cursor-pointer">
            <IconQuestion />
          </p>
        </div>
      </div>
      <div className="cursor-pointer logo flex justify-center mx-auto mt-5 mb-14 md:m-0">
        <Image src={logo} alt="logo-finishmytask" />
      </div>

      <ModalAbout openAbout={openAbout} setOpenAbout={setOpenAbout} />
      <ModalQuestion
        openQuestion={openQuestion}
        setOpenQuestion={setOpenQuestion}
      />
      <ModalContact openContact={openContact} setOpenContact={setOpenContact} />
    </div>
  );
};

export default Header;
