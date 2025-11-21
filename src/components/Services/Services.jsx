import React from "react";
import ServicesCss from "./Services.module.css";
import ServiceImg1 from "../../assets/service-icon1.png";
import ServiceImg2 from "../../assets/service-icon2.png";
function Services() {
  return (
    <section className={ServicesCss.services}>
      <div className={ServicesCss.services_head}>
        <h2>What We Offer</h2>
      </div>
      <img
        src={ServiceImg1}
        alt="Service"
        className={ServicesCss.services_shape}
      />
      <img
        src={ServiceImg2}
        alt="Service"
        className={`${ServicesCss.services_shape} ${ServicesCss.services_shape2}`}
      />
      <div className={ServicesCss.services_content}>
        <div className={ServicesCss.services_box}>
          <span>1</span>
          <h1>Game Streaming</h1>
        </div>
        <div className={ServicesCss.services_box}>
          <span>2</span>
          <h1>Game Testing</h1>
        </div>
        <div className={ServicesCss.services_box}>
          <span>3</span>
          <h1>AR/VR Integration</h1>
        </div>
        <div className={ServicesCss.services_box}>
          <span>4</span>
          <h1>Game Development</h1>
        </div>
        <div className={ServicesCss.services_box}>
          <span>5</span>
          <h1>Game Streaming</h1>
        </div>
      </div>
    </section>
  );
}

export default Services;
