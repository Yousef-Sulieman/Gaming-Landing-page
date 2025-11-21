import "swiper/css";

import GameCardsCss from "./GameCards.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // <--- هنا الفرق
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GameCard1 from "../../assets/game-card1.png";
import GameCard2 from "../../assets/game-card2.png";
import GameCard3 from "../../assets/game-card3.png";
import GameCard4 from "../../assets/game-card4.png";

function GameCards() {
  const gameCards = [
    GameCard1,
    GameCard2,
    GameCard3,
    GameCard4,
    GameCard1,
    GameCard2,
    GameCard3,
    GameCard4,
  ];

  return (
    <Swiper
      slidesPerView={4} // Desktop
      loop={true} // مهم جدًا
      loopedSlides={4} // عدد Slides اللي يتم تكرارها داخليًا
      breakpoints={{
        1400: { slidesPerView: 4 }, // أقل من عدد الـ Slides → Navigation شغال
        1200: { slidesPerView: 3 },
        900: { slidesPerView: 2 },
        500: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      }}
    >
      {gameCards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className={GameCardsCss.game_card}>
            <div className={GameCardsCss.game_card_img}>
              <img src={card} alt={`game-card-${index + 1}`} />
            </div>
            <button>
              DOWNLOAD
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className={"ri-arrow-right-line"}></i>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GameCards;
