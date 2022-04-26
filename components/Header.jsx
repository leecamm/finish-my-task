import React from "react";
import Image from "next/image";
import { default as logo } from "../static/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="pt-16">
        <Image src={logo} alt="logo" width={318} height={106} />
      </div>
      <div className="flex gap-x-5 pt-5">
        <a href="#about">
          <p className="font-medium text-white">about</p>
        </a>
        <a href="#contact">
          <p className="font-medium text-white">contact</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
