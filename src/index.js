import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import Tournament from "layouts/Tournament";
import Academies from "layouts/Academies";
import Sidebar from "components/Sidebar";
import Header from "components/Header";

import PageNotFound from "views/PageNotFound";
import history from "historyObj";

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Sidebar} />
    <div className="mainContainer">
      <div className="contentContainer">
        <Switch>
          <Route path="/tournament" component={Tournament} />
          <Route path="/academies" component={Academies} />
          <Route path="/page-not-found" component={PageNotFound} />
          <Redirect from="/" to="/page-not-found" />
        </Switch>
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
