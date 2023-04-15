import React from "react";
// import "./style.css";

export const MainMenu = () => {
  return (
    <div className={"main-menu-main-menu-wrapper"}>
      <div className={"main-menu-main-menu"}>
        <div className={"main-menu-div-wrapper"}>
          <div className={"main-menu-overlap-group-wrapper"}>
            <div className={"main-menu-overlap-group"}>
              <h1 className={"main-menu-text-wrapper"}>Dashboard</h1>
              <div className={"main-menu-div"}>Request</div>
              <div className={"main-menu-text-wrapper-2"}>Halls</div>
              <div className={"main-menu-text-wrapper-3"}>Contacts</div>
              <div className={"main-menu-text-wrapper-4"}>Resources</div>
              <div className={"main-menu-text-wrapper-5"}>Calendar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};