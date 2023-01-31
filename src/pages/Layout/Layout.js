import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import "../../App.css";

const Layout = () => {
  return (
    <div className="page-center">
      <div><Link to="/login" className="home-buttons">Login</Link></div>
      <div><Link to="/registration" className="home-buttons">Registration</Link></div>
      <div><Link to="/about" className="home-buttons">About the Game</Link></div>
    </div>
  );
};

export default Layout;
