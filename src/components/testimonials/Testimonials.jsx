import React, { useRef, useState } from "react";
import { testimonialData } from "./Data";

import "./Testimonials.css";

// ?=============== SWIPER
// -Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// -Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// -required modules
import { Pagination } from "swiper";

function Testimonials() {
  return (
    <section className="testimonial section">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container"
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {testimonialData.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img
                src={image}
                alt="testimonial_image"
                className="testimonial__img"
              />

              <h3 className="testimonial__name"> {title} </h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* 
      loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
       */}
    </section>
  );
}

export default Testimonials;
