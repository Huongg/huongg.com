import React, { useState, useRef, useEffect } from "react";

import "./header.scss";

import { NavButton } from "../nav-button/nav-button";

export const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = () => {
    if (headerRef.current) {
      setSticky(headerRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`navigation${isSticky ? " sticky" : ""}`}
    >
      <NavButton url="/home">Home</NavButton>
      <NavButton url="/about-me">About</NavButton>
      <NavButton url="garden">Garden</NavButton>
      <span className="app-logo">HUONG NGUYEN</span>
      <NavButton url="food">Food</NavButton>
      <NavButton url="travel">Travel</NavButton>
      <NavButton url="nerd">Nerd</NavButton>
    </header>
  );
};
