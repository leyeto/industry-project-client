import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import brandLogoText from "../../assets/icons/Fixit.svg";
import brandLogoImage from "../../assets/icons/Vector.svg";
import filter from "../../assets/icons/filter-icon.svg";
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
        <h1 className="header__purpose">What do you need</h1>
        <div className="header__bottom">
          <input
            className="header__search-bar"
            type="search"
            placeholder="Type your post code"
            id="search-id"
            name="search-box"
          />
          <img
            className="header__filter"
            src={filter}
            alt="FIlter icon"
            onClick={() => {
              if (isFilterOpen) {
                setIsFilterOpen(false);
              } else {
                setIsFilterOpen(true);
              }
            }}
          />
        </div>
      </div>
      <div
        className={`filter-dropdown filter-dropdown${
          isFilterOpen ? "--show" : "--hide"
        }`}
      >
        <h3 className="filter-dropdown__title">Price Range:</h3>
        <ul className="prices">
          <li>
            <input type="radio" id="10-20" name="price" />
            <label for="10-20">10 - 20</label>
          </li>
          <li>
            <input type="radio" id="20-30" name="price" />
            <label for="20-30">20 - 30</label>
          </li>
          <li>
            <input type="radio" id="30-40" name="price" />
            <label for="30-40">30 - 40</label>
          </li>
          <li>
            <input type="radio" id="40-50" name="price" />
            <label for="40-50">40 - 50</label>
          </li>
          <li>
            <input type="radio" id="50-60" name="price" />
            <label for="50-60">50 - 60</label>
          </li>
          <li>
            <input type="radio" id="60-70" name="price" />
            <label for="60-70">60 - 70</label>
          </li>
          <li>
            <input type="radio" id="70-80" name="price" />
            <label for="70-80">70 - 80</label>
          </li>
          <li>
            <input type="radio" id="80-90" name="price" />
            <label for="80-90">80 - 90</label>
          </li>
          <li>
            <input type="radio" id="90-100" name="price" />
            <label for="90-100">90 - 100</label>
          </li>
          <li>
            <input type="radio" id="100+" name="price" />
            <label for="100+">100+</label>
          </li>
        </ul>
        <h3 className="filter-dropdown__title">Type of Product:</h3>
        <ul className="products">
          <li>
            <input type="radio" id="bedroom-furniture" name="product" />
            <label for="bedroom-furniture">Bedroom Furniture</label>
          </li>
          <li>
            <input type="radio" id="clothing" name="product" />
            <label for="clothing">Clothing</label>
          </li>
          <li>
            <input type="radio" id="office-furniture" name="product" />
            <label for="office-furniture">Office Furniture</label>
          </li>
          <li>
            <input type="radio" id="kitchen" name="product" />
            <label for="kitchen">Kitchen</label>
          </li>
          <li>
            <input type="radio" id="living-room" name="product" />
            <label for="living-room">Living Room</label>
          </li>
          <li>
            <input type="radio" id="upcycle" name="product" />
            <label for="upcycle">Upcycle</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FixitHeader;
