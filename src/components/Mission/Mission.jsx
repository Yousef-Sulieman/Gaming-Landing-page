import React from "react";
import MissionCss from "./Mission.module.css";
import SkullImg from "../../assets/skull-icon3.png";
function Mission() {
  return (
    <section className={MissionCss.mission}>
      <div className={MissionCss.mission_head}>
        <div className={MissionCss.skullImg}>
          <img src={SkullImg} alt="" />
        </div>
        <h2>
          OUR MISSION IS TO CREATE A VIBRANT AND INCLUSIVE GAMING COMMUNITY
        </h2>
      </div>
      <div className={MissionCss.mission_infos}>
        <div className={MissionCss.info_box}>
          <h1>370+</h1>
          <h2>Creating and optimizing websites</h2>
        </div>
        <div className={MissionCss.info_box}>
          <h1>10+</h1>
          <h2>Brand awareness and recognition</h2>
        </div>
        <div className={MissionCss.info_box}>
          <h1>4X</h1>
          <h2>Measure and analyze performance</h2>
        </div>
        <div className={MissionCss.info_box}>
          <h1>50%+</h1>
          <h2>Increase conversions and sales</h2>
        </div>
      </div>
    </section>
  );
}

export default Mission;
