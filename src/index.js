import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Tournament from "layouts/Tournament";
import Academies from "layouts/Academies";

import PageNotFound from "views/PageNotFound";

const hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={hist}>
    <Switch>
      <Route path="/tournament" component={Tournament} />
      <Route path="/academies" component={Academies} />
      <Route path="/page-not-found" component={PageNotFound} />
      <Redirect from="/" to="/page-not-found" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
