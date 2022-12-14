import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/profile-image.jpg";
import drawer2 from "../../assets/images/drawer2.jpg";
import ceilingLamps from "../../assets/images/ceiling-lamps.jpg";
import chat from "../../assets/images/web-chat.jpeg";
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
  const [isCtaOpen, setIsCtaOpen] = useState(false);

  return (
    <>
      <div
        className={`profile__chat profile__chat${
          isCtaOpen ? "--show" : "--hide"
        }`}
      >
        <img
          className={`profile__chat-window profile__chat-window${
            isCtaOpen ? "--show" : "--hide"
          }`}
          src={chat}
          alt="placeholder chat window"
        />
        <p
          className={`profile__chat-close profile__chat-close${
            isCtaOpen ? "--show" : "--hide"
          }`}
          onClick={() => {
            setIsCtaOpen(false);
          }}
        >
          Close chat
        </p>
      </div>

      <div className="profile__header">
        <Link to="/fixers">
          <img src={backArrow} alt="back" />
        </Link>
        <div className="profile__fixer">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={image1} alt="" />
          </div>
          <div className="profile__text">
            <h3 className="profile__name">Ryan Winter</h3>
            <p className="profile__bio">
              I am a carpenter with 10yrs+ of experience. My speciality is
              indoor furniture and upcycling
            </p>
            <div className="profile__rating">
              <img src={fullStar} alt="star" className="profile__rating-star" />
              <img src={fullStar} alt="star" className="profile__rating-star" />
              <img src={fullStar} alt="star" className="profile__rating-star" />
              <img src={fullStar} alt="star" className="profile__rating-star" />
              <img src={fullStar} alt="star" className="profile__rating-star" />
            </div>
          </div>
        </div>
        <div
          className="profile__cta"
          onClick={() => {
            if (isCtaOpen) {
              setIsCtaOpen(false);
            } else {
              setIsCtaOpen(true);
            }
          }}
        >
          <p className="profile__cta-text">I want your service!</p>
        </div>
      </div>
      <div className="profile__content">
        <h2 className="profile__header">Previous products</h2>
        <div className="profile__product">
          <img src={drawer2} alt="drawers" className="profile__product-image" />
          <div className="profile__product-price">??80</div>
          <p className="profile__product-text">
            Century Curved Chestnut Bedside Table
          </p>
        </div>
        <div className="profile__content profile__content--bottom">
          <img
            src={ceilingLamps}
            alt="ceiling lamps"
            className="profile__product-image"
          />
          <div className="profile__product-price">??40</div>
          <p className="profile__product-text">Upcycled bottle lightbulbs</p>
        </div>
      </div>
    </>
  );
}
