import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import brandLogoText from "../../assets/icons/Fixit.svg";
import brandLogoImage from "../../assets/icons/Vector.svg";

import "./FixitHeader.scss";

const FixitHeader = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img
              className="header__logo-text"
              src={brandLogoText}
              alt="FixIt Logo Text"
            />
            <img
              className="header__logo-img"
              src={brandLogoImage}
              alt="FixIt Logo Image"
            />
          </NavLink>
        </div>
        <h1 className="header__purpose">Find services near you!</h1>
      </div>
    </>
  );
};

export default FixitHeader;
