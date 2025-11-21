import React from "react";
import VideoCss from "./Video.module.css";

function VideoBg() {
  return (
    <div className={VideoCss.video_bg}>
      <i className={`${VideoCss.play_btn} ri-play-fill`}></i>
    </div>
  );
}

export default VideoBg;
