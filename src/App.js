import React, { useState, useRef, useEffect } from "react";
import "./App.scss";

import { NavButton } from "./components/nav-button/nav-button";

function App() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <header className={`navigation${isSticky ? " sticky" : ""}`} ref={ref}>
        <NavButton>Home</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Others</NavButton>
        <span className="app-logo">HUONG NGUYEN</span>
        <NavButton>Food</NavButton>
        <NavButton>Travel</NavButton>
        <NavButton>Nerd</NavButton>
      </header>
      <div className="main-page-image"></div>
    </div>
  );
}

export default App;
