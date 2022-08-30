import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>Twitter Media</h1>
          <h6>See what's happening in the world right now</h6>
        </div>
      </div>
      <SignUp />
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="a-right">
      <form className="infoForm">
        <h3>Signup</h3>
        <div>
          <input
            type="text"
            placeholder="First name"
            className="infoInput"
            name="firstname"
          />
        </div>
      </form>
    </div>
  );
};

export default Auth;
