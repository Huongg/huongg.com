import React from "react";
import { Link } from "react-router-dom";

import "./nav-button.scss";

export const NavButton = ({ children, url }) => {
  console.log(url, "url");
  return (
    <Link to={url} className="nav-button">
      {children}
      <div className="button__horizontal"></div>
      <div className="button__vertical"></div>
    </Link>
  );
};
