import React from "react";
import {Link} from "react-router-dom";
// import "./Navigation.css";
import "./bootstrap.css";
import "./bootstrap.min.css";

function Navigation() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }

export default Navigation;