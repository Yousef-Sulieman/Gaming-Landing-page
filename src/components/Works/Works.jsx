import React from "react";
import WorksCss from "./Works.module.css";
import workCardBg1 from "../../assets/work-card-bg1-1.png";
function Works() {
  return (
    <div className={WorksCss.works}>
      <div className={WorksCss.works_head}>
        <h1>WORKS</h1>
      </div>
      <div className={WorksCss.works_container}>
        {/* Card1 */}
        <div className={WorksCss.works_card}>
          <div className={WorksCss.works_box}>
            <div className={WorksCss.works_text}>
              <h1>Upcoming Game Release</h1>
              <span>/ CyberSaga Chronicles</span>
            </div>
            <h2>Action - Adventure</h2>
          </div>
          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>Upcoming Game Release</h1>
              <span>/ </span>
              <h1>Upcoming Game Release</h1>
              <span>/ </span>
              <h1>Upcoming Game Release</h1>
              <span>/ </span>
              <h1>Upcoming Game Release</h1>
              <span>/ </span>
              <h1>Upcoming Game Release</h1>
              <span>/ </span>
              <h1>Upcoming Game Release</h1>
              <span>/ </span>
              <h1>Upcoming Game Release</h1>
              <span>/ </span>
              <h1>Upcoming Game Release</h1>
              <span>/ </span>
            </div>
          </marquee>
        </div>
        {/* Card2 */}
        <div className={WorksCss.works_card}>
          <div className={WorksCss.works_box}>
            <div className={WorksCss.works_text}>
              <h1>The Rise of Cloud Gaming</h1>
              <span>/ Multiplayer</span>
            </div>
            <h2>Action - Adventure</h2>
          </div>
          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>The Rise of Cloud Gaming</h1>
              <span>/ </span>
              <h1>The Rise of Cloud Gaming</h1>
              <span>/ </span>
              <h1>The Rise of Cloud Gaming</h1>
              <span>/ </span>
              <h1>The Rise of Cloud Gaming</h1>
              <span>/ </span>
              <h1>The Rise of Cloud Gaming</h1>
              <span>/ </span>
              <h1>The Rise of Cloud Gaming</h1>
              <span>/ </span>
              <h1>The Rise of Cloud Gaming</h1>
              <span>/ </span>
              <h1>The Rise of Cloud Gaming</h1>
              <span>/ </span>
            </div>
          </marquee>
        </div>
        {/* Card3 */}
        <div className={WorksCss.works_card}>
          <div className={WorksCss.works_box}>
            <div className={WorksCss.works_text}>
              <h1>Behind the Scene</h1>
              <span>/ Infinity Forge</span>
            </div>
            <h2>Strategy</h2>
          </div>
          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>Behind the Scene</h1>
              <span>/ </span>
              <h1>Behind the Scene</h1>
              <span>/ </span>
              <h1>Behind the Scene</h1>
              <span>/ </span>
              <h1>Behind the Scene</h1>
              <span>/ </span>
              <h1>Behind the Scene</h1>
              <span>/ </span>
              <h1>Behind the Scene</h1>
              <span>/ </span>
              <h1>Behind the Scene</h1>
              <span>/ </span>
              <h1>Behind the Scene</h1>
              <span>/ </span>
            </div>
          </marquee>
        </div>
        {/* Card4 */}
        <div className={WorksCss.works_card}>
          <div className={WorksCss.works_box}>
            <div className={WorksCss.works_text}>
              <h1>Gaming Event Spotlight</h1>
              <span>/ 2023 Recap</span>
            </div>
            <h2>Sports - Racing</h2>
          </div>
          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>Gaming Event Spotlight</h1>
              <span>/ </span>
              <h1>Gaming Event Spotlight</h1>
              <span>/ </span>
              <h1>Gaming Event Spotlight</h1>
              <span>/ </span>
              <h1>Gaming Event Spotlight</h1>
              <span>/ </span>
              <h1>Gaming Event Spotlight</h1>
              <span>/ </span>
              <h1>Gaming Event Spotlight</h1>
              <span>/ </span>
              <h1>Gaming Event Spotlight</h1>
              <span>/ </span>
              <h1>Gaming Event Spotlight</h1>
              <span>/ </span>
            </div>
          </marquee>
        </div>
        {/* Card5 */}
        <div className={WorksCss.works_card}>
          <div className={WorksCss.works_box}>
            <div className={WorksCss.works_text}>
              <h1>Gaming for a Cause</h1>
              <span>/ Community Spotlight</span>
            </div>
            <h2>battle royale - pvp</h2>
          </div>
          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>Gaming for a Cause</h1>
              <span>/ </span>
              <h1>Gaming for a Cause</h1>
              <span>/ </span>
              <h1>Gaming for a Cause</h1>
              <span>/ </span>
              <h1>Gaming for a Cause</h1>
              <span>/ </span>
              <h1>Gaming for a Cause</h1>
              <span>/ </span>
              <h1>Gaming for a Cause</h1>
              <span>/ </span>
              <h1>Gaming for a Cause</h1>
              <span>/ </span>
              <h1>Gaming for a Cause</h1>
              <span>/ </span>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Works;
