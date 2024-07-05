import { useState } from "react";
import "./PlayButton.css";

const PlayButton = ({ onPlayed, onPaused, children, message }) => {
  const [playing, setPlaying] = useState("false");
  const handleClick = (e) => {
    console.log(e);
    e.stopPropagation();
    // e.preventDefault();
    console.log({ message });

    if (playing) onPaused();
    else onPlayed();

    setPlaying(!playing);
  };
  return (
    <button onClick={handleClick}>
      {children} :{playing ? "Pause⏸️ " : "Play⏯️"}
    </button>
  );
};

export default PlayButton;
