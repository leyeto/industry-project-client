import React from "react";
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
import trousers from "../../assets/images/trousers.jpg";
import SearchBar from "../SearchBar/SearchBar";

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <h2 className="home__title">Services Available</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={45}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="home__slides"
      >
        <SwiperSlide>
          <div className="home__slide-container">
            <img src={tools} alt="tools" className="home__slides-image" />
            <p className="home__slides-text">Stitching repairs</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={drawer1} alt="drawers" className="home__slides-image" />
          <p className="home__slides-text">Carpentry</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={stools} alt="stools" className="home__slides-image" />
          <p className="home__slides-text">Woodworking</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ceilingLamps}
            alt="ceiling lamps"
            className="home__slides-image"
          />
          <p className="home__slides-text">Upcycling</p>
        </SwiperSlide>
      </Swiper>
      <h2 className="home__title">Carbon Footprint</h2>
      <img src={trousers} alt="trousers" className="home__carbon-image" />
      <p className="home__slides-text"></p>
      <p>
        Did you know production of one pair of jeans creates 33.4kg of CO2
        (equivalent to driving 69 miles)? Save your old jeans <u>here</u>
      </p>
    </>
  );
}
