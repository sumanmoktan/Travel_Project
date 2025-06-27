import SectionTitle from "../title/SectionTitle";
import { Link } from "react-router-dom";
import {
  RiArrowLeftDoubleFill,
  RiArrowRightDoubleFill,
  RiTelegram2Fill,
  RiTreasureMapFill,
  RiCalendarCheckLine,
} from "react-icons/ri";
import { tours } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./tours.css";
import Stars from "./Stars";

const Tours = () => {
  return (
    <section className="tours container section">
      <div className="category-header">
        <SectionTitle
          subtitle="Epic Adventures Tour"
          title="Select Your Tour"
          description="Journey into the heart of the Himalayas with Asics Nepal Treks, where expertly crafted tours unveil Nepal’s awe-inspiring landscapes and vibrant cultural tapestry in an adventure of a lifetime!"
        />
        <div className="swiper-btns">
          <button className="swiper-btn prev-btn">
            <RiArrowLeftDoubleFill />
          </button>
          <button className="swiper-btn next-btn">
            <RiArrowRightDoubleFill />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        grabCursor={true}
        loop={true}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1208: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {tours.map((tour, index) => {
          return (
            <SwiperSlide className="tour-item" key={index}>
              <img src={tour.img} alt="image" className="tour-img" />
              <div className="tour-details">
                <Stars stars={tour.stars} />
                <h3 className="tour-title">{tour.title}</h3>
                <p className="tour-location">{tour.location}</p>

                <hr className="tour-separator" />
                <div className="tour-days">
                  <RiCalendarCheckLine className="tour-icon" />
                  {tour.days}
                </div>
                <div className="tour-bottom">
                  <p>
                    <span className="tour-price">{tour.price}</span>
                    <span className="tour-people">/person</span>
                  </p>
                  <Link to={`/tour/${tour.id}`} className="button">
                    Details<RiTelegram2Fill className="button-icon" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Tours;
