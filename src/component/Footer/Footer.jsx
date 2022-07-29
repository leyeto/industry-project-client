import searchWrench from "../../assets/icons/search-icon-menu-bar.svg";
import profileIcon from "../../assets/icons/profile-icon.svg";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__search-icon">
        <img
          className="footer__search-icon-icon"
          src={searchWrench}
          alt="search-icon-wrench"
        />
        <h4>settings</h4>
      </div>
      <div className="footer__profile-icon">
        <img
          className="footer__search-icon-icon"
          src={profileIcon}
          alt="search-icon-wrench"
        />
        <h4>profile</h4>
      </div>
    </div>
  );
};

export default Footer;
