import React from "react";
import { Link } from "react-router-dom";

import "./FixerItem.scss";
import image1 from "../../assets/images/profile-image.jpg";
import image2 from "../../assets/images/blonde.jpg";
import image3 from "../../assets/images/omid-armin-UVx7Xx_b4a0-unsplash.jpg";
import fullStar from "../../assets/icons/full-star.svg";
import emptyStar from "../../assets/icons/empty-star.svg";
import ReactRating from "react-rating"; //If const doesn't work IMPORT will, didn't get to test require but tested import on App.js

export default function FixerItem({ fixer }) {
  const distance = Math.round(fixer.distance * 100) / 100;

  return (
    <li className="fixer">
      <Link className="fixer__profile" to={`/fixers/1`}>
        <div className="fixer__image-container">
          <img
            className={`fixer__image ${
              fixer.id !== "1" ? "fixer__image--hide" : "fixer__image--show"
            }`}
            src={image1}
          />
          <img
            className={`fixer__image ${
              fixer.id !== "2" ? "fixer__image--hide" : "fixer__image--show"
            }`}
            src={image2}
          />
          <img
            className={`fixer__image ${
              fixer.id !== "3" ? "fixer__image--hide" : "fixer__image--show"
            }`}
            src={image3}
          />
        </div>
        <div className="fixer__text">
          <h3 className="fixer__name">{fixer.name}</h3>
          <p className="fixer__distance">{`${distance}km away`}</p>
          <p className="fixer__description">{fixer.description}</p>
          <div className="fixer__rating">
            <ReactRating
              initialRating={fixer.stars}
              emptySymbol={<img src={emptyStar} className="icon" />}
              fullSymbol={<img src={fullStar} className="icon" />}
            />
          </div>
        </div>
      </Link>
    </li>
  );
}
