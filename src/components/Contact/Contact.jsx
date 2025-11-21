import React from "react";
import ContactCss from "./Contact.module.css";
function Contact() {
  return (
    <section className={ContactCss.contact}>
      <div className={ContactCss.head}>
        <h1>Contact Us</h1>
        <div className={ContactCss.head_text}>
          <div className={ContactCss.line}></div>
          <h1>HAVE A PROJECT?</h1>
        </div>
      </div>
      <div className={ContactCss.container}>
        <div className={ContactCss.Contact_form}>
          <div className={ContactCss.Contact_form_head}>
            <h2>WHAT CAN WE DO FOR YOU?</h2>
            <div className={ContactCss.Contact_btns}>
              <button className={ContactCss.Contact_btn}>Design</button>
              <button className={ContactCss.Contact_btn}>Animation</button>
              <button className={ContactCss.Contact_btn}>Development</button>
              <button className={ContactCss.Contact_btn}>Other</button>
            </div>
          </div>
          <div className={ContactCss.Contact_inputs}>
            <div className={ContactCss.Contact_input_head}>
              <div className={ContactCss.inputs}>
                <input type="text" placeholder="Your Name" />
                <i className="ri-user-3-line"></i>
              </div>
              <div className={ContactCss.inputs}>
                <input type="text" placeholder="Your Email" />
                <i className="ri-mail-open-line"></i>
              </div>
            </div>
            <div className={ContactCss.textarea}>
              <textarea name="" id="" placeholder="Project Details"></textarea>
              <i className="ri-pencil-fill"></i>
            </div>
            <button>
              Working with us
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className={"ri-arrow-right-line"}></i>
            </button>
          </div>
        </div>
        <div className={ContactCss.Contact_contant}>
          <p>
            Driven by innovation and creativity, we're constantly evolving and
            expanding our platform to bring you the latest and greatest in
            gaming. From exciting new releases to classic favorites.
          </p>
          <div className={ContactCss.Contact_social}>
            <i className="ri-facebook-line"></i>
            <i className="ri-twitter-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-youtube-line"></i>
            <i className="ri-linkedin-line"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
