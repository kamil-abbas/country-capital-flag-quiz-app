import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "../../App.css";

const Login = () => {
  return (
    <div className="page-center">
      <div className="login">
        <div className="login-item">
          <div className="login-title">Nickname:</div>
          <div className="login-input">
            <input />
          </div>
        </div>
        <div className="login-item">
          <div className="login-title">Password:</div>
          <div className="login-input">
            <input type="password" />
          </div>
        </div>
        <div className="login-btn">
          <div>
            <span>
              <Link
                to="/game-choice"
                className="link"
                onClick={window.location.reload}
              >
                Login
              </Link>
            </span>
          </div>
        </div>
        <div className="redirect-to-register">
          <Link to="/registration" style={{ color: "white" }}>
            I don't have an account...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
