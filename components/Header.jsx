import React from "react";
import Image from "next/image";
import { default as logo } from "../static/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="flex gap-x-5 justify-end pt-5">
        <a href="#about">
          <a className="font-medium text-white">about</a>
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
