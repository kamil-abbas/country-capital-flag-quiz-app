import React from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import "../../App.css";

const Registration = () => {
  let userInfo = [];

  function handleClick(e) {
    document.querySelectorAll("input").forEach((inputItem) => {
      if (inputItem.length > 0) {
        userInfo.push(inputItem);
      }
    });
  }

  return (
    <div className="page-center">
      <div className="registration">
        <div className="reg-head-wrapper">
          <div className="reg-head">
            <span>Registration</span>
          </div>
        </div>
        <div className="reg-item">
          <div className="reg-title">Name:</div>
          <div className="reg-input">
            <input />
          </div>
        </div>
        <div className="reg-item">
          <div className="reg-title">Surname:</div>
          <div className="reg-input">
            <input />
          </div>
        </div>
        <div className="reg-item">
          <div className="reg-title">Nickname:</div>
          <div className="reg-input">
            <input />
          </div>
        </div>
        <div className="reg-item">
          <div className="reg-title">Password:</div>
          <div className="reg-input">
            <input type="password" />
          </div>
        </div>
        <div className="reg-item">
          <div className="reg-title">Repeat Password:</div>
          <div className="reg-input">
            <input type="password" />
          </div>
        </div>
        <div className="reg-item">
          <div className="reg-title">Email:</div>
          <div className="reg-input">
            <input type="email" />
          </div>
        </div>
        <div className="reg-btn">
          <div>
            <span>
              <Link
                to="/login"
                className="link"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Sign Up
              </Link>
            </span>
          </div>
        </div>
        <div className="redirect-to-login">
          <Link to="/login" style={{ color: "white" }}>
            I already have an account.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
