import SectionTitle from "../title/SectionTitle";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import { categories } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./category.css";

const Category = () => {
  return (
    <section className="categories container section">
      <div className="category-header">
        <SectionTitle
          title="Categories"
          description="From thrilling Himalayan treks and vibrant cultural temple tours to serene lake retreats and wild jungle safaris, Nepal’s diverse tour categories offer unforgettable adventures for every traveler."
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {categories.map((cate, index) => {
          return (
            <SwiperSlide className="category-slide" key={index}>
              <img src={cate.img} alt="image" className="category-img" />
              <h3 className="category-title">{cate.title}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Category;
