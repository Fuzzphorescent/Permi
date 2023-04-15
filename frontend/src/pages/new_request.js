
import React from "react";
import { NavBar } from "./NavBar";
// import "./style.css";

export const NewRequest = () => {
  return (
    <div className={"new-request-new-request-wrapper"}>
      <div className={"new-request-new-request"}>
        <div className={"new-request-overlap-group"}>
          <div className={"new-request-new-req-fields"}>
            <div className={"new-request-text-wrapper"}>To:</div>
            <div className={"new-request-div"}>Type:</div>
            <div className={"new-request-text-wrapper-2"}>Body:</div>
            <div className={"new-request-text-wrapper-3"}>Title:</div>
            <div className={"new-request-rectangle"} />
            <div className={"new-request-rectangle-20"} />
            <div className={"new-request-rectangle-21"} />
            <div className={"new-request-rectangle-22"} />
            <div className={"new-request-send-button"}>
              <div className={"new-request-text-wrapper-4"}>Send</div>
              <img className={"new-request-icon-paper-plane"} src={"telegram.svg"} />
            </div>
          </div>
          <h1 className={"new-request-title"}>Create a new request</h1>
          <NavBar
            heart="heart-2.svg"
            heartStyle={{
              cursor: "pointer",
            }}
            menuIconStyle={{
              cursor: "pointer",
              height: "30px",
              left: "2px",
              top: "5px",
              width: "37px",
            }}
            moon="moon-2.svg"
            moonStyle={{
              cursor: "pointer",
            }}
            notiifcations="notiifcations-2.svg"
            notiifcationsStyle={{
              cursor: "pointer",
            }}
            pStyle={{
              cursor: "pointer",
            }}
            profileStyle={{
              cursor: "pointer",
            }}
            style={{
              left: "0",
              position: "absolute",
              top: "0",
            }}
          />
        </div>
      </div>
    </div>
  );
};