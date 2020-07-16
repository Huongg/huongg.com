import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";

import { Home } from "./areas/home/home";
import { AboutMe } from "./areas/about-me/about-me";

import { Header } from "./components/header/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
