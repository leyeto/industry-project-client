import React from "react";
import image1 from "../../assets/images/profile-image.jpg";
import drawer2 from "../../assets/images/drawer2.jpg";
import ceilingLamps from "../../assets/images/ceiling-lamps.jpg";
import backArrow from "../../assets/icons/back-arrow.svg";
import fullStar from "../../assets/icons/full-star.svg";
import "./FixerProfile.scss";

const fixer = {
  id: "1",
  name: "Ryan Winter",
  description:
    "I am a carpenter with 10yrs+ of experience. My speciality is indoor furniture and upcycling",
  postcode: "EC1V 9LE",
  longitude: -0.080683,
  latitude: 51.527087,
  distance: null,
};

export default function FixerProfile() {
  return (
    <>
      <div className="profile__header">
        <img src={backArrow} alt="back" />
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={image1} alt="" />
        </div>
        <div className="profile__text">
          <h3 className="profile__name">Ryan Winter</h3>
          <p className="profile__bio">
            I am a carpenter with 10yrs+ of experience. My speciality is indoor
            furniture and upcycling", postcode: "EC1V 9LE",
          </p>
          <div className="profile__rating">
            <img src={fullStar} alt="star" className="profile__rating-star" />
            <img src={fullStar} alt="star" className="profile__rating-star" />
            <img src={fullStar} alt="star" className="profile__rating-star" />
            <img src={fullStar} alt="star" className="profile__rating-star" />
            <img src={fullStar} alt="star" className="profile__rating-star" />
          </div>
        </div>
        <div className="profile__cta">I want your service!</div>
      </div>
      <div className="profile__content">
        <img src={drawer2} alt="drawers" className="profile__product" />
        <img
          src={ceilingLamps}
          alt="ceiling lamps"
          className="profile__product"
        />
      </div>
    </>
  );
}
