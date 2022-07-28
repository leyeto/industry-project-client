import React from "react";
import "./FixerItem.scss";

export default function FixerItem({ fixer }) {
  const distance = Math.round(fixer.distance * 100) / 100;

  return (
    <li className="fixer">
      {/* <Link to={`/fixer/${fixer.id}`}> */}
      <div className="fixer__image"></div>
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
