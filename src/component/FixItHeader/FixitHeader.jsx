import { NavLink } from "react-router-dom";
import brandLogoText from "../../assets/icons/Fixit.svg";
import brandLogoImage from "../../assets/icons/Vector.svg";
import "./FixitHeader.scss";

const FixitHeader = () => {
  return (
    <div className="header">
      <div className="header__brand-logo">
        <NavLink to="/">
          <img
            className="header__img"
            src={brandLogoText}
            alt="FixIt Logo Text"
          />
          <img src={brandLogoImage} alt="FixIt Logo Image" />
        </NavLink>
      </div>
      <h1 className="header__purpose">What do you need</h1>
      <input
        className="header__search-bar"
        type="search"
        placeholder="Type your post code"
        id="search-id"
        name="search-box"
      />
    </div>
  );
};

export default FixitHeader;
