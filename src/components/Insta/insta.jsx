import React from "react";
import instaCss from "./insta.module.css";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
import insta1 from "../../assets/insta-1.png";
import insta2 from "../../assets/insta-2.png";
import insta3 from "../../assets/insta-3.png";
import insta4 from "../../assets/insta-4.png";
import insta5 from "../../assets/insta-5.png";
import insta6 from "../../assets/insta-6.png";

function insta() {
  return (
    <Swiper
      className={instaCss.insta_swiper}
      //   modules={[Navigation, Pagination, Autoplay]}
      // navigation
      // pagination={{ clickable: true }}
      // autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={6} // للعرض الكبير نعرض 4
      loop={true}
      //   loopedSlides={6}
      // يساعد الـ loop لو احتجت
      breakpoints={{
        1400: { slidesPerView: 6 },
        1200: { slidesPerView: 5 }, // خليه 3 عند 1200 لتجنب التثبيت
        900: { slidesPerView: 4 },
        500: { slidesPerView: 3 },
        0: { slidesPerView: 2 },
      }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className={instaCss.insta_slide}>
          <img src={insta1} alt="insta-1" />
          <i className="ri-instagram-line"></i>
        </div>
      </SwiperSlide>
      {/* Slide 2 */}
      <SwiperSlide>
        <div className={instaCss.insta_slide}>
          <img src={insta2} alt="insta-2" />
          <i className="ri-instagram-line"></i>
        </div>
      </SwiperSlide>
      {/* Slide 3 */}
      <SwiperSlide>
        <div className={instaCss.insta_slide}>
          <img src={insta3} alt="insta-3" />
          <i className="ri-instagram-line"></i>
        </div>
      </SwiperSlide>
      {/* Slide 4 */}
      <SwiperSlide>
        <div className={instaCss.insta_slide}>
          <img src={insta4} alt="insta-4" />
          <i className="ri-instagram-line"></i>
        </div>
      </SwiperSlide>
      {/* Slide 5 */}
      <SwiperSlide>
        <div className={instaCss.insta_slide}>
          <img src={insta5} alt="insta-5" />
          <i className="ri-instagram-line"></i>
        </div>
      </SwiperSlide>
      {/* Slide 6 */}
      <SwiperSlide>
        <div className={instaCss.insta_slide}>
          <img src={insta6} alt="insta-6" />
          <i className="ri-instagram-line"></i>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default insta;
