// Team.jsx (Swipper v9+)
import React from "react";
import TeamCss from "./Team.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // modules path
import Team1 from "../../assets/team-2-1.jpg";
import Team2 from "../../assets/team-2-2.jpg";
import Team3 from "../../assets/team-2-3.jpg";
import Team4 from "../../assets/team-2-4.jpg";

function Team() {
  const slides = [Team1, Team2, Team3, Team4];
  const doubled = [...slides, ...slides]; // يضمن وجود عناصر إضافية

  return (
    <section className={TeamCss.team}>
      <div className="headings">
        <h2>Our Team</h2>
        <h1>OUR AVENGERS</h1>
      </div>

      <Swiper
        className={TeamCss.swiper}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={4} // للعرض الكبير نعرض 4
        spaceBetween={30}
        loop={true}
        loopedSlides={4} // يساعد الـ loop لو احتجت
        breakpoints={{
          1400: { slidesPerView: 4 },
          1200: { slidesPerView: 3 }, // خليه 3 عند 1200 لتجنب التثبيت
          900: { slidesPerView: 2 },
          500: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {doubled.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className={TeamCss.team_card}>
              <div className={TeamCss.team_card_img}>
                <img src={img} alt="" />
                <span>Role</span>
              </div>
              <div className={TeamCss.team_date}>
                <div className={TeamCss.team_date_info}>
                  <h2>Member {idx + 1}</h2>
                  <p>Measure and analyze performance</p>
                </div>
                <div className={TeamCss.team_date_social}>
                  <i className="ri-facebook-fill"></i>
                  <i className="ri-twitter-fill"></i>
                  <i className="ri-instagram-fill"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Team;
