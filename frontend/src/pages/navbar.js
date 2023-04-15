import React from "react";
import PropTypes from "prop-types";
import { Menu } from "./Menu";
import "./style.css";

export const NavBar = ({
  pStyle,
  profileStyle,
  menuIconStyle,
  notiifcationsStyle,
  notiifcations = "notiifcations-1.svg",
  heartStyle,
  heart = "heart-1.svg",
  moonStyle,
  moon = "moon-1.svg",
}) => {
  return (
    <div className={"nav-bar-nav-bar"}>
      <div className={"nav-bar-p"} style={pStyle}>
        P.
      </div>
      <div className={"nav-bar-profile"} style={profileStyle} />
      <Menu
        icon="icon-1.svg"
        iconStyle={menuIconStyle}
        style={{
          height: "40px",
          left: "40px",
          position: "absolute",
          top: "20px",
          width: "40px",
        }}
      />
      <img className={"nav-bar-notiifcations"} style={notiifcationsStyle} src={notiifcations} />
      <div className={"nav-bar-search-bar"}>
        <img className={"nav-bar-search"} src={"search.svg"} />
      </div>
      <img className={"nav-bar-heart"} style={heartStyle} src={heart} />
      <img className={"nav-bar-moon"} style={moonStyle} src={moon} />
    </div>
  );
};

NavBar.propTypes = {
  notiifcations: PropTypes.string,
  heart: PropTypes.string,
  moon: PropTypes.string,
};