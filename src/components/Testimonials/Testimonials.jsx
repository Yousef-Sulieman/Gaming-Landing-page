import React from "react";
import TestimonialsCss from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial1 from "../../assets/testimonial-1.png";
import testimonial2 from "../../assets/testimonial-2.png";
import testimonial3 from "../../assets/testimonial-3.png";
function Testimonials() {
  return (
    <section className={TestimonialsCss.slider_card_info}>
      <div className="headings">
        <h2>testimonials</h2>
        <h1>WHAT PEOPLE ARE SAYING ABOUT US</h1>
      </div>
      <Swiper
        className={TestimonialsCss.swiper}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          1400: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 2,
          },
          650: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {/* Slider 1 */}
        <SwiperSlide>
          <div className={TestimonialsCss.slider_box}>
            <div className={TestimonialsCss.slider_card}>
              <div className={TestimonialsCss.slider_card_info}>
                <h2>Nick Davis</h2>
                <h5>UI/UX Designer</h5>
              </div>
              <p>
                Driven by innovation and creativity, we're constantly evolving
                and expanding our platform to bring you the latest and greatest
                in gaming.
              </p>
            </div>
            <div className={TestimonialsCss.slider_card_img}>
              <img src={testimonial1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        {/* Slider 1 */}
        <SwiperSlide>
          <div className={TestimonialsCss.slider_box}>
            <div className={TestimonialsCss.slider_card}>
              <div className={TestimonialsCss.slider_card_info}>
                <h2>Alonso Dowson</h2>
                <h5>Ceo</h5>
              </div>
              <p>
                Driven by innovation and creativity, we're constantly evolving
                and expanding our platform to bring you the latest and greatest
                in gaming.
              </p>
            </div>
            <div className={TestimonialsCss.slider_card_img}>
              <img src={testimonial2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        {/* Slider 1 */}
        <SwiperSlide>
          <div className={TestimonialsCss.slider_box}>
            <div className={TestimonialsCss.slider_card}>
              <div className={TestimonialsCss.slider_card_info}>
                <h2>Miranda Halim</h2>
                <h5>Founder</h5>
              </div>
              <p>
                Driven by innovation and creativity, we're constantly evolving
                and expanding our platform to bring you the latest and greatest
                in gaming.
              </p>
            </div>
            <div className={TestimonialsCss.slider_card_img}>
              <img src={testimonial3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
