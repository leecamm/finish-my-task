import React, { useState } from "react";
import dynamic from "next/dynamic";

import Header from "../components/Header";
import Pomodoro from "../components/Pomodoro";

const Todo = dynamic(() => import("../components/Todo"), { ssr: false });

const Home = () => {
  return (
    <div className="mx-36">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-6 lg:gap-10">
        <Todo />
        <Pomodoro />
      </div>
    </div>
  );
};

export default Home;
