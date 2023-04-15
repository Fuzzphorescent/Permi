
import React from "react";
import { NavBar } from "./NavBar";
// import "./style.css";

export const Requests = () => {
  return (
    <div className={"requests-requests-wrapper"}>
      <div className={"requests-requests"}>
        <div className={"requests-overlap"}>
          <div className={"requests-overlap-group3"}>
            <div className={"requests-sample-requests"}>
              <div className={"requests-direction-sample"}>
                <div className={"requests-text-wrapper"}>Outgoing</div>
                <div className={"requests-div"}>Incoming</div>
                <div className={"requests-text-wrapper-2"}>Incoming</div>
                <div className={"requests-text-wrapper-3"}>Outgoing</div>
                <div className={"requests-text-wrapper-4"}>Incoming</div>
                <div className={"requests-text-wrapper-5"}>Outgoing</div>
                <div className={"requests-text-wrapper-6"}>Incoming</div>
              </div>
              <div className={"requests-title-sample"}>
                <div className={"requests-text-wrapper-6"}>Duty leave</div>
                <div className={"requests-text-wrapper"}>Book Acharya hall</div>
                <div className={"requests-div"}>Extended stayback</div>
                <div className={"requests-text-wrapper-2"}>Duty leave</div>
                <div className={"requests-text-wrapper-3"}>FOSS-bi0s Night</div>
                <div className={"requests-text-wrapper-4"}>Book A203</div>
                <div className={"requests-text-wrapper-5"}>Meal count</div>
              </div>
              <div className={"requests-date-sample"}>
                <div className={"requests-text-wrapper-7"}>12. 04. 23</div>
                <div className={"requests-text-wrapper-8"}>28. 03. 23</div>
                <div className={"requests-text-wrapper-9"}>10. 04. 23</div>
                <div className={"requests-text-wrapper-2"}>09. 04. 23</div>
                <div className={"requests-text-wrapper-3"}>04. 04. 23</div>
                <div className={"requests-text-wrapper-10"}>29. 03. 23</div>
                <div className={"requests-text-wrapper-11"}>19. 02. 23</div>
              </div>
              <div className={"requests-type-sample"}>
                <div className={"requests-text-wrapper-12"}>Leave</div>
                <div className={"requests-text-wrapper-13"}>Room</div>
                <div className={"requests-div"}>Request</div>
                <div className={"requests-text-wrapper-14"}>Leave</div>
                <div className={"requests-text-wrapper-15"}>Event</div>
                <div className={"requests-text-wrapper-16"}>Room</div>
                <div className={"requests-text-wrapper-17"}>Other</div>
              </div>
              <div className={"requests-status-sample"}>
                <div className={"requests-text-wrapper-6"}>Approved</div>
                <div className={"requests-text-wrapper-18"}>Pending</div>
                <div className={"requests-text-wrapper-19"}>Rejected</div>
                <div className={"requests-text-wrapper-20"}>Pending</div>
                <div className={"requests-text-wrapper-21"}>Pending</div>
                <div className={"requests-text-wrapper-22"}>Rejected</div>
                <div className={"requests-text-wrapper-5"}>Approved</div>
              </div>
            </div>
            <div className={"requests-table"}>
              <div className={"requests-overlap-group"}>
                <div className={"requests-rectangle"} />
                <div className={"requests-rectangle-15"} />
                <div className={"requests-rectangle-16"} />
                <div className={"requests-rectangle-17"} />
                <div className={"requests-rectangle-18"} />
              </div>
              <div className={"requests-overlap-group1"}>
                <div className={"requests-navbar"}>
                  <div className={"requests-text-wrapper-23"}>Date</div>
                  <div className={"requests-text-wrapper-24"}>Type</div>
                  <div className={"requests-text-wrapper-25"}>Title</div>
                  <div className={"requests-text-wrapper-26"}>Direction</div>
                  <div className={"requests-text-wrapper-27"}>Status</div>
                </div>
              </div>
            </div>
          </div>
          <h1 className={"requests-title"}>Requests</h1>
          <NavBar
            heart="heart.svg"
            heartStyle={{
              cursor: "pointer",
            }}
            menuIcon="icon.svg"
            menuIconStyle={{
              cursor: "pointer",
              height: "30px",
              left: "2px",
              top: "5px",
              width: "37px",
            }}
            moon="moon.svg"
            moonStyle={{
              cursor: "pointer",
            }}
            notiifcations="notiifcations.svg"
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