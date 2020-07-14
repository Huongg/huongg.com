import React from "react";
import "./App.scss";

import { NavButton } from "./components/nav-button/nav-button";

function App() {
  return (
    <div className="App">
      <header className="navigation">
        <NavButton>Home</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Others</NavButton>
        <span className="app-logo">HUONG NGUYEN</span>
        <NavButton>Food</NavButton>
        <NavButton>Travel</NavButton>
        <NavButton>Nerd</NavButton>
      </header>
    </div>
  );
}

export default App;
