import React from "react";
import "./FixerItem.scss";
import image1 from "../../assets/images/profile-image.jpg";
import image2 from "../../assets/images/blonde.jpg";
import image3 from "../../assets/images/omid-armin-UVx7Xx_b4a0-unsplash.jpg";

export default function FixerItem({ fixer }) {
  const distance = Math.round(fixer.distance * 100) / 100;

  return (
    <li className="fixer">
      {/* <Link to={`/fixer/${fixer.id}`}> */}
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
        <img src="" alt="" className="fixer__rating" />
      </div>
      {/* </Link> */}
    </li>
  );
}
