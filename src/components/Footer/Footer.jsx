import React from "react";
import footerCss from "./Footer.module.css";

function Footer() {
  return (
    <section className={footerCss.footer}>
      <div className={footerCss.footer_logo}>
        <a href="#">
          Zex<span>ora</span>
        </a>
      </div>
      <div className={footerCss.footer_menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Highlights</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </div>
      <div className={footerCss.footer_inputs}>
        <input type="text" placeholder="Enter your email" />
        <i className="ri-mail-line"></i>
      </div>
      <div className={footerCss.footer_social}>
        <i className="ri-facebook-fill"></i>
        <i className="ri-twitter-fill"></i>
        <i className="ri-instagram-fill"></i>
        <i className="ri-linkedin-fill"></i>
      </div>
    </section>
  );
}

export default Footer;
