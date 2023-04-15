import React from "react";
// import "./style.css";

export const SignIn = () => {
  return (
    <div className={"sign-in-sign-in-wrapper"}>
      <div className={"sign-in-sign-in"}>
        <h1 className={"sign-in-text-wrapper"}>Sign in</h1>
        <div className={"sign-in-authenticate-button"}>
          <div className={"sign-in-overlap-group"}>
            <div className={"sign-in-div"}>Authenticate with</div>
            <img className={"sign-in-microsoft-logo"} src={"microsoft-logo-1.svg"} />
          </div>
        </div>
      </div>
    </div>
  );
};