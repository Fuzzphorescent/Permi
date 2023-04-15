
import React from "react";
import "../styles/sharon.png";
// import "./style.css";

export default function Landing() {
  return (
    <div className={"landing-landing-wrapper"}>
      <div className={"landing-landing"}>
        <div className={"landing-overlap"}>
          <div className={"landing-background"} />
          <img className={"landing-sharon"} src={"sharon.png"} />
          <div className={"landing-gradient"} />
          <div className={"landing-get-started"}>
            <div className={"landing-overlap-group"}>
              <div className={"landing-text-wrapper"}>Get Started</div>
            </div>
          </div>
          <p className={"landing-p"}>
            With Permi, you can manage your requests, grant permission, and book halls inside your organisation—all in one place.
          </p>
          <div className={"landing-nav-bar"}>
            <div className={"landing-overlap-group1"}>
              <div className={"landing-div"}>Permi.</div>
              <div className={"landing-sign-in"}>
                <div className={"landing-div-wrapper"}>
                  <div className={"landing-text-wrapper-2"}>Sign in</div>
                </div>
              </div>
            </div>
          </div>
          <h1 className={"landing-h-1"}>Say goodbye to playing tag with the authorities to get your form signed.</h1>
        </div>
      </div>
    </div>
  );
};