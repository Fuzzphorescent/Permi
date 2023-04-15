
import React from "react";
import { MainMenu } from "./menu";
// import "./style.css";

export default function Dashboard() {
  return (
    <div className={"dasboard-dasboard-wrapper"}>
      <div className={"dasboard-dasboard"}>
        <div className={"dasboard-overlap"}>
          <div className={"dasboard-background"} />
          <div className={"dasboard-nav-bar"}>
            <div className={"dasboard-p"}>P.</div>
            <div className={"dasboard-profile"} />
            <MainMenu
              icon="icon-1.svg"
              iconStyle={{
                cursor: "pointer",
                height: "30px",
                left: "2px",
                top: "5px",
                width: "37px",
              }}
              style={{
                height: "40px",
                left: "40px",
                position: "absolute",
                top: "20px",
                width: "40px",
              }}
            />
            <img className={"dasboard-notiifcations"} src={"notiifcations-1.svg"} />
            <div className={"dasboard-search-bar"}>
              <img className={"dasboard-search"} src={"search.svg"} />
            </div>
            <img className={"dasboard-heart"} src={"heart-1.svg"} />
            <img className={"dasboard-moon"} src={"moon-1.svg"} />
          </div>
          <div className={"dasboard-group"}>
            <div className={"dasboard-rejected"}>
              <img className={"dasboard-img"} src={"cross.svg"} />
            </div>
            <div className={"dasboard-approved"}>
              <img className={"dasboard-img"} src={"checkmark-small.svg"} />
            </div>
            <div className={"dasboard-outgoing"}>
              <img className={"dasboard-img-2"} src={"arrow-outcome.svg"} />
            </div>
            <div className={"dasboard-incoming"}>
              <img className={"dasboard-img-2"} src={"arrow-income.svg"} />
            </div>
            <div className={"dasboard-text-wrapper"}>0 outgoing requests</div>
            <div className={"dasboard-div"}>2 incoming requests</div>
            <div className={"dasboard-text-wrapper-2"}>2 new approvals</div>
            <div className={"dasboard-text-wrapper-3"}>1 rejected request</div>
          </div>
          <h1 className={"dasboard-h-1"}>Good morning, Fuzzy.</h1>
          <div className={"dasboard-text-wrapper-4"}>Here is your overview:</div>
          <img className={"dasboard-undraw-summer"} src={"undraw-summer-1wi4-1.svg"} />
          <div className={"dasboard-new-request"}>
            <div
              className={"dasboard-overlap-group"}
              style={{
                backgroundImage: "url(rectangle-11-1.svg)",
              }}
            >
              <div className={"dasboard-icon"} />
            </div>
          </div>
          <div className={"dasboard-view-request-button"}>
            <div className={"dasboard-text-wrapper-5"}>View all requests</div>
          </div>
        </div>
      </div>
    </div>
  );
};