import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import TournamentManager from "layouts/TournamentManager";
import TournamentGuest from "layouts/TournamentGuest";
import Academies from "layouts/Academies";
import Sidebar from "components/Sidebar";
import PageNotFound from "views/PageNotFound";
import history from "historyObj";

import Navbar from './components/Navbar';
import { AuthProvider } from './contexts/auth.context'

ReactDOM.render(
  <AuthProvider>
  <Router history={history}>
    <Route path="/" component={Sidebar} />
    <div className="mainContainer">
      <div className="contentContainer">
        <Switch>
        <Route path="/tournament/guest" component={TournamentGuest} />
          <Route path="/tournament" component={TournamentManager} />
          <Route path="/academies" component={Academies} />
          <Route path="/page-not-found" component={PageNotFound} />
          <Redirect from="/" to="/page-not-found" />
        </Switch>
      </div>
    </div>
  </Router>
  </AuthProvider>,
  document.getElementById("root")
);
