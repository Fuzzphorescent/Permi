import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ReqMenu = () => {
  return (
    <div className={"req-menu-req-menu-wrapper"}>
      <div className={"req-menu-req-menu"}>
        <div className={"req-menu-overlap-group-wrapper"}>
          <div className={"req-menu-overlap-group"}>
            <div className={"req-menu-requests"}>
              <div className={"req-menu-request-text"}>
                <h1 className={"req-menu-text-wrapper"}>Send a letter</h1>
                <p className={"req-menu-p"}>Book a hall / room</p>
                <div className={"req-menu-div"}>Get a duty leave</div>
                <div className={"req-menu-text-wrapper-2"}>Send an email</div>
              </div>
              <div className={"req-menu-request-buttons"}>
                <div className={"req-menu-hall-button"}>
                  <img className={"req-menu-icon"} src={"icon-7.svg"} />
                </div>
                <div className={"req-menu-dutyleave-button"}>
                  <img className={"req-menu-img"} src={"icon-8.svg"} />
                </div>
                <div className={"req-menu-mail-button"}>
                  <img className={"req-menu-icon-mail"} src={"icon-9.svg"} />
                </div>
                <div className={"req-menu-email-button"}>
                  <img className={"req-menu-icon-2"} src={"icon-10.svg"} />
                </div>
              </div>
            </div>
            <div
              className={"req-menu-new-request"}
              style={{
                backgroundImage: "url(rectangle-11.svg)",
              }}
            >
              <Link to="/req-menu">
                <img className={"req-menu-icon-3"} src={"icon-11.svg"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};