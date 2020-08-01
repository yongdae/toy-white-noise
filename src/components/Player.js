import React from "react";

const Player = (props) => {
  const { type, play } = props;
  return (
    <div style={{ display: "none" }}>
      {
        play && <audio src={`/sounds/${type}.mp3`} autoPlay loop/>
      }
    </div>
  );
};

export default Player;