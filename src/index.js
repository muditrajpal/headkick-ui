import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import {Route,  Router} from "react-router-dom";
import App from "App"

import Sidebar from "components/Sidebar";
import history from "historyObj";

import { AuthProvider } from './contexts/auth.context'
import "react-quill/dist/quill.snow.css";

ReactDOM.render(
  <AuthProvider>
  <Router history={history}>
    <Route path="/" component={Sidebar} />
    <div className="mainContainer">
      <App/>

    </div>
  </Router>
  </AuthProvider>,
  document.getElementById("root")
);
