import React from "react";
// import "./style.css";

export const Sent = () => {
  return (
    <div className={"sent-sent-wrapper"}>
      <div className={"sent-sent"}>
        <div className={"sent-sent-popup-wrapper"}>
          <div className={"sent-sent-popup"}>
            <div className={"sent-overlap-group"}>
              <h1 className={"sent-text-wrapper"}>Request sent.</h1>
              <div className={"sent-overlap"}>
                <div className={"sent-div"}>Back to Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};