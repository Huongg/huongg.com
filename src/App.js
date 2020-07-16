import React, { useState, useRef, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";

import { NavButton } from "./components/nav-button/nav-button";
import { Header } from "./components/header/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-page-image"></div>
      </div>
    </Router>
  );
}

export default App;
