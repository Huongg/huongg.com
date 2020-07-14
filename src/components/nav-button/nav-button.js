import React from "react";

import "./nav-button.css";

export const NavButton = ({ children }) => {
  return (
    <button className="nav-button">
      {children}
      <div className="button__horizontal"></div>
      <div className="button__vertical"></div>
    </button>
  );
};
