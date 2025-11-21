import React from "react";
import HeaderCss from "./Header.module.css";
import HeroImg from "../../assets/hero.png";
function Header() {
  return (
    <header>
      <div className={HeaderCss.hero_content}>
        <h1 className={HeaderCss.hero_title}>
          NEXORA <span>GAMING</span>
        </h1>
        <div className={HeaderCss.boxs}>
          <p>*Based in Paris, available worldwide</p>
          <div className={HeaderCss.hero_social}>
            <i className={`${HeaderCss.hero_icon} ri-facebook-box-fill`}></i>
            <i className={`${HeaderCss.hero_icon} ri-twitter-fill`}></i>
            <i className={`${HeaderCss.hero_icon} ri-instagram-fill`}></i>
            <i className={`${HeaderCss.hero_icon} ri-youtube-fill`}></i>
          </div>
        </div>
        <div className={HeaderCss.hero_bottom}>
          <div className={HeaderCss.hero_bottom_content}>
            <h2>SOME COOL & DROP CHARETERS</h2>
            <p>
              Driven by innovation and creativity, we're constantly evolving and
              expanding our platform to bring you the latest and greatest in
              gaming. From exciting new releases to classic favorites.
            </p>
            <button>
              NEXT CAN BE YOU
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className={"ri-arrow-right-line"}></i>
            </button>
          </div>
          <div className={HeaderCss.hero_bottom_img}>
            <img src={HeroImg} alt="Hero" />
          </div>
          <div className={HeaderCss.shape}></div>
          <div className={HeaderCss.shape2}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
