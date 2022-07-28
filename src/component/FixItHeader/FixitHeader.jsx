import { NavLink } from "react-router-dom";
import brandLogo from "../../assets/icons/Fixit.svg";
import "./FixitHeader.scss";

const FixitHeader = () => {
  return (
    <div className="header">
      <div className="header__brand-logo">
        <NavLink to="/">
          <img className="header__img" src={brandLogo} alt="FixIt Logo" />
        </NavLink>
      </div>
      <h1 className="header__purpose">What do you need</h1>
      <input
        className="header__search-bar"
        type="search"
        placeholder="type your post code"
        id="search-id"
        name="search-box"
      />
    </div>
  );
};

export default FixitHeader;
