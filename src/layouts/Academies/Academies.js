import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";

const Academies = () => {
  const getActiveRoute = (routes1) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes1.length; i++) {
      if (routes1[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes1[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes1[i].layout + routes1[i].path) !==
          -1
        ) {
          return routes1[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    });
  };

  return (
    <div>
      <Switch>
        {getRoutes(routes)}
        <Redirect from="/academies" to="/academies/overview" />
      </Switch>
    </div>
  );
};

export default Academies;
