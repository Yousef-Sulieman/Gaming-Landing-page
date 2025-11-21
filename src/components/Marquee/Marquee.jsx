import React from "react";
import MarqueeCss from "./Marquee.module.css";
import skullImg from "../../assets/skull-icon.png";

export default function Marquee() {
  const items = [
    "NEW GAMES",
    "Inclusive Events",
    "NEW GAMES",
    "Inclusive Events",
  ];

  return (
    <div className={MarqueeCss.marquee}>
      <div className={MarqueeCss.marquee_content}>
        {[...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <h1>{item}</h1>
            <img src={skullImg} alt="skull" className={MarqueeCss.skull_img} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
