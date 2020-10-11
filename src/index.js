import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import Tournament from "layouts/Tournament";
import Academies from "layouts/Academies";

import PageNotFound from "views/PageNotFound";
import history from "historyObj";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/tournament" component={Tournament} />
      <Route path="/academies" component={Academies} />
      <Route path="/page-not-found" component={PageNotFound} />
      <Redirect from="/" to="/page-not-found" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
