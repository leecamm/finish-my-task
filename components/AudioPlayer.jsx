import React, { useState, useEffect, useRef } from "react";

import IconPlay from "./icons/IconPlay";
import IconPause from "./icons/IconPause";
import IconList from "./icons/IconList";
import IconVolume from "./icons/IconVolume";

const AudioPlayer = (onPlayPauseClick, tracks) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  //   const { title } = tracks[trackIndex];

  //   const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  //   const { duration } = audioRef.current;
  //   const currentPercentage = duration
  //     ? `${(trackProgress / duration) * 100}%`
  //     : "0%";

  return (
    <div className="md:col-start-5 md:col-span-4 lg:col-start-6 lg:col-span-5">
      <h1>THIS IS AUDIO PLAYER</h1>
      <IconList />
      <div>
        {isPlaying ? (
          <button
            type="button"
            onClick={() => onPlayPauseClick(false)}
            aria-label="Pause"
          >
            <IconPause />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onPlayPauseClick(true)}
            aria-label="Play"
          >
            <IconPlay />
          </button>
        )}
        <IconPlay />
      </div>
      <IconVolume />
    </div>
  );
};

export default AudioPlayer;
