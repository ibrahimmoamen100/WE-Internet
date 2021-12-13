import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./path/pages/Home";
import Services from "./path/pages/Services";
import WepayPage from "./path/pages/WepayPage";
import Additionalpage from "./path/pages/Additionalpage";
import Overview from "./path/pages/Overview";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/Additional">
            <Additionalpage />
          </Route>
          <Route path="/We-Pay">
            <WepayPage />
          </Route>
          <Route path="/Overview">
            <Overview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
