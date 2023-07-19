import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, IndexRoute, NavLink} from "react-router-dom";
import IPtoB36 from "../pages/IPtoB36";
import B36toIP from "../pages/B36toIP";

import ROUTES from "./routes";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <p>
            <NavLink to={ROUTES.mainRoute()} activeClassName="active">
              IP to B36
            </NavLink>
          </p>
          <p>
            <NavLink to={ROUTES.altRoute()} activeClassName="active">
              B36 to IP
            </NavLink>
          </p>
        </nav>
      </header>
       <Switch>
        <Route exact path="/">
          <IPtoB36 />
        </Route>
        <Route exact path="/b36toip">
          <B36toIP />
        </Route>
       </Switch>
    </Router>
  );
}

export default App;
