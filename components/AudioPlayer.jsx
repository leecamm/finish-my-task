import React, { useState, useEffect, useRef } from "react";

import IconPlay from "./icons/IconPlay";
import IconPause from "./icons/IconPause";
import IconList from "./icons/IconList";
import IconVolume from "./icons/IconVolume";

const AudioPlayer = () => {
  const tracks = [
    {
      value: "coffee shop",
      title: "coffee shop",
      src: "https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg",
    },
    {
      value: "rainy weather",
      title: "rainy weather",
      src: "https://actions.google.com/sounds/v1/weather/light_rain.ogg",
    },
  ];
  const [selectedTrack, setSelectedTrack] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const handleSelected = (e) => {
    setSelectedTrack(JSON.parse(e.target.value));
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  };

  return (
    <div className="md:col-start-5 md:col-span-4 lg:col-start-6 lg:col-span-5">
      <h1>THIS IS AUDIO PLAYER</h1>
      <div className="flex gap-5">
        <IconList />
        <select onChange={handleSelected}>
          <option disabled>Select a track</option>
          {tracks.map((track) => (
            <option key={track.value} value={JSON.stringify(track)}>
              {track.title}
            </option>
          ))}
        </select>
        <p>{selectedTrack.title}</p>
        <audio
          ref={audioPlayer}
          src={selectedTrack.src}
          preload="true"
          loop
        ></audio>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={togglePlayPause}>
          {isPlaying ? <IconPause /> : <IconPlay />}
        </button>
        <input
          type="range"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>
      <IconVolume />
    </div>
  );
};

export default AudioPlayer;
