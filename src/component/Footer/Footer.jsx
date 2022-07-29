import searchWrench from "../../assets/icons/search-icon-menu-bar.svg";
import profileIcon from "../../assets/icons/profile-icon.svg";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__search-icon">
        <img src={searchWrench} alt="search-icon-wrench" />
        <h4>Setting</h4>
      </div>
      <div className="footer__profile-icon">
        <img src={profileIcon} alt="search-icon-wrench" />
        <h4>profile</h4>
      </div>
    </div>
  );
};

export default Footer;
