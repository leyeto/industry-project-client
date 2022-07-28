import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HomePage.scss";

// import required modules
import { Pagination } from "swiper";

// import images
import tools from "../../assets/images/tools.jpg";
import drawer1 from "../../assets/images/drawer1.jpg";
import stools from "../../assets/images/stools.jpg";
import ceilingLamps from "../../assets/images/ceiling-lamps.jpg";

export default function HomePage() {
  return (
    <>
      <h2 className="home__title">Services Available:</h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slides"
      >
        <SwiperSlide>
          <img src={tools} alt="tools" className="slides__image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={drawer1} alt="drawers" className="slides__image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={stools} alt="stools" className="slides__image" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ceilingLamps}
            alt="ceiling lamps"
            className="slides__image"
          />
        </SwiperSlide>
      </Swiper>
      <h2 className="home__title">Carbon Footprint</h2>
    </>
  );
}
