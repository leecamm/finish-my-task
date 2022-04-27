import React from "react";
import Image from "next/image";
import { default as logo } from "../public/static/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="flex gap-x-5 justify-end pt-5">
        <a href="#about">
          <p className="font-medium text-white">about</p>
        </a>
        <a href="#contact">
          <p className="font-medium text-white">contact</p>
        </a>
      </div>
      <div className="">
        <Image src={logo} alt="logo" width={318} height={106} />
      </div>
    </div>
  );
};

export default Header;
