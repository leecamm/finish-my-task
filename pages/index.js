import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import Header from "../components/Header";
import Pomodoro from "../components/Pomodoro";

const Todo = dynamic(() => import("../components/Todo"), { ssr: false });

const Home = () => {
  const css = [
    {
      title: "gradient",
      value: "gradient",
      backgroundImage: "linear-gradient(to bottom, #085467, #afa7bb, #f4c0b3)",
    },
  ];
  const baseStyle = {
    minWidth: "100vw",
    minHeight: "100vh",
  };

  const [selectedImg, setSelectedImg] = useState(css[0]);
  const handleSelected = (e) => {
    setSelectedImg(JSON.parse(e.target.value));
  };

  return (
    <div className="px-5 lg:px-36 bg" style={{ ...baseStyle, ...selectedImg }}>
      <Head>
        <title>Finish My Task - Not Just A Pomodoro Timer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="wX2DyPnwhuvTsvcpy1zhyy42l2KXNTx1SbhjXpM7Ufk"
        />
        <meta
          name="keywords"
          content="pomodoro, pomodoro timer, time management"
        />
        <meta
          name="description"
          content="A customizable Pomodoro timer that works on desktop and mobile browsers. You can add tasks, play ambient sounds, and change the website background to create the most pleasant working environment."
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-6 lg:gap-10">
        <Todo className="order-2 md:order-1" />
        <Pomodoro
          handleSelectedImg={handleSelected}
          className="order-1 md:order-2"
        />
      </div>
    </div>
  );
};

export default Home;
